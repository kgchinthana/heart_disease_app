from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pickle
import numpy as np
from model.preprocess import preprocess_input

# Load the trained model
model_path = "model/heart_disease_model.pkl"
with open(model_path, "rb") as file:
    model = pickle.load(file)

# Initialize FastAPI app
app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins; replace "*" with specific URLs in production
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

# Define input schema
class PredictionInput(BaseModel):
    age: int
    sex: int
    cp: int
    trestbps: int
    chol: int
    fbs: int
    restecg: int
    thalach: int
    exang: int
    oldpeak: float
    slope: int
    ca: int
    thal: int

@app.post("/predict")
async def predict(data: PredictionInput):
    try:
        # Preprocess input
        input_data = preprocess_input(data)

        # Predict using the model
        prediction = model.predict(input_data)
        result = "High Risk" if prediction[0] == 1 else "Low Risk"

        return {"prediction": result}
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Error: {str(e)}")

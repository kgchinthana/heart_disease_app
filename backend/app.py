from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pickle
import numpy as np
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
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

# Define input schema with name and email fields
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
    name: str
    email: str

# Function to send email with prediction result
def send_email(name: str, email: str, prediction: str):
    try:
        # Setup the MIME
        sender_email = "kavindugchinthana214@gmail.com"
        receiver_email = email
        password = "haao giuk wcun azvz"  # Use an App Password for Gmail or environment variable
        
        msg = MIMEMultipart()
        msg['From'] = sender_email
        msg['To'] = receiver_email
        msg['Subject'] = "Heart Disease Prediction Results"
        
        body = f"Dear {name},\n\nBased on the details you provided, our analysis suggests that you are at {prediction}.\n\nThank you for using our service!"
        msg.attach(MIMEText(body, 'plain'))
        
        # Setup the server
        server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
        server.login(sender_email, password)
        text = msg.as_string()
        server.sendmail(sender_email, receiver_email, text)
        server.quit()
        print(f"Email sent to {email}")
    except Exception as e:
        print(f"Failed to send email: {str(e)}")

@app.post("/predict")
async def predict(data: PredictionInput):
    try:
        # Extract the name and email from the incoming data
        name = data.name
        email = data.email

        # Create a new dictionary with only the fields required for prediction
        prediction_data = {
            "age": data.age,
            "sex": data.sex,
            "cp": data.cp,
            "trestbps": data.trestbps,
            "chol": data.chol,
            "fbs": data.fbs,
            "restecg": data.restecg,
            "thalach": data.thalach,
            "exang": data.exang,
            "oldpeak": data.oldpeak,
            "slope": data.slope,
            "ca": data.ca,
            "thal": data.thal,
        }

        # Preprocess the input data
        input_data = preprocess_input(prediction_data)

        # Predict using the model
        prediction = model.predict(input_data)
        result = "High Risk" if prediction[0] == 1 else "Low Risk"

        # Send the email with the prediction result
        send_email(name, email, result)

        return {"prediction": result}
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Error: {str(e)}")

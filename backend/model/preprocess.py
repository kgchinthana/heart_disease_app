import numpy as np  

def preprocess_input(data):
    # Convert input data to numpy array for model
    input_features = np.array([
        data.age, data.sex, data.cp, data.trestbps, data.chol,
        data.fbs, data.restecg, data.thalach, data.exang, data.oldpeak,
        data.slope, data.ca, data.thal
    ]).reshape(1, -1)
    return input_features

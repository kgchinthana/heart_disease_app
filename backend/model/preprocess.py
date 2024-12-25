import numpy as np  

def preprocess_input(data):
<<<<<<< HEAD
    # Convert input data dictionary to numpy array for model
=======
    # Convert input data to numpy array for model
    
>>>>>>> fc0f1814a6859ac444836a7d66ea77207286078a
    input_features = np.array([
        data['age'], data['sex'], data['cp'], data['trestbps'], data['chol'],
        data['fbs'], data['restecg'], data['thalach'], data['exang'], data['oldpeak'],
        data['slope'], data['ca'], data['thal']
    ]).reshape(1, -1)
    return input_features

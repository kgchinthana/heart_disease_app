import React, { useState } from 'react';
import InputForm from './components/InputForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [prediction, setPrediction] = useState('');

  const handleSubmit = async (formData) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        setPrediction(data.prediction);
      } else {
        setPrediction('Error occurred while fetching prediction.');
      }
    } catch (error) {
      setPrediction('Network error occurred: ' + error.message);
    }
  };

  return (
    <div className="container">
      <InputForm onSubmit={handleSubmit} />
      {prediction && (
        <div className="alert alert-info mt-4">
          Prediction: <strong>{prediction}</strong>
        </div>
      )}
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import InputForm from './components/InputForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [result, setResult] = useState(null);

  const handleSubmit = async (formData) => {
    try {
      const { name, email, ...predictionData } = formData; // Exclude name and email from the request
      const response = await fetch('http://127.0.0.1:8000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(predictionData),
      });

      if (response.ok) {
        const data = await response.json();
        setResult({
          prediction: data.prediction,
          name: formData.name,
          email: formData.email,
        });
      } else {
        setResult({ error: 'Error occurred while fetching prediction.' });
      }
    } catch (error) {
      setResult({ error: 'Network error occurred: ' + error.message });
    }
  };

  return (
    <div className="container">
      {!result ? (
        <InputForm onSubmit={handleSubmit} />
      ) : (
        <div className="result-page text-center mt-5">
          {result.error ? (
            <div className="alert alert-danger">{result.error}</div>
          ) : (
            <div>
              <h1 className={`display-4 ${result.prediction === 'High Risk' ? 'text-danger' : 'text-success'}`}>
                {result.prediction === 'High Risk' ? '⚠️ High Risk' : '✅ Low Risk'}
              </h1>
              <p className="lead">
                Thank you, <strong>{result.name}</strong>!
              </p>
              <p>We’ve sent a detailed report to your email: <strong>{result.email}</strong></p>
            </div>
          )}
          <button
            className="btn btn-primary mt-4"
            onClick={() => setResult(null)}
          >
            Go Back
          </button>
        </div>
      )}
    </div>
  );
}

export default App;

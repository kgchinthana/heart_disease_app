import React, { useState } from 'react';
import InputForm from './components/InputForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [result, setResult] = useState(null);


  const handleSubmit = async (formData) => {
    try {
      // Include name and email along with the other prediction data
      const response = await fetch('http://127.0.0.1:8000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData), // Send the entire form data, including name and email
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
              <h1 className={`display-4 mb-4 ${result.prediction === 'High Risk' ? 'text-danger' : 'text-success'}`}>
                {result.prediction === 'High Risk' ? '⚠️ High Risk' : '✅ Low Risk'}
              </h1>
              <div
                className="card shadow-sm p-4"
                style={{ backgroundColor: '#f9f9f9', borderRadius: '10px' }}
              >
                <p className="lead">
                  Thank you, <strong>{result.name}</strong>!
                </p>
                <p>
                  Based on the details you provided, our analysis suggests that you are at{' '}
                  <strong>{result.prediction}</strong>.
                </p>
                <p className="text-muted">
                  A detailed report has been sent to your email: <strong>{result.email}</strong>.
                </p>
                <div className="alert alert-info mt-4">
                  <strong>Note:</strong> Remember, this is a predictive model and not a definitive diagnosis.
                  Please consult a healthcare professional for medical advice.
                </div>
              </div>
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

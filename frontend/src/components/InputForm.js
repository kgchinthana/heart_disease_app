import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import heartDiseaseImage from '../images/background.jpg';

function InputForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    age: '',
    sex: '',
    cp: '',
    trestbps: '',
    chol: '',
    fbs: '',
    restecg: '',
    thalach: '',
    exang: '',
    oldpeak: '',
    slope: '',
    ca: '',
    thal: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="container mt-5">
      {/* Hero Section with Image */}
      <div className="hero-section text-center mb-5">
        <img 
          src={heartDiseaseImage} 
          alt="Heart Disease" 
          className="img-fluid rounded mb-4"
          style={{ maxHeight: '400px', objectFit: 'cover' }}
        />
        <h1 className="display-4">Heart Disease Prediction</h1>
      </div>

      {/* Input Form Section */}
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            {/* Descriptive Fields */}
            <div className="form-group mb-3">
              <label>Age</label>
              <input
                type="number"
                className="form-control"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                min="1"
              />
            </div>

            <div className="form-group mb-3">
              <label>Sex</label>
              <div>
                <label className="mr-3">
                  <input
                    type="radio"
                    name="sex"
                    value="male"
                    checked={formData.sex === 'male'}
                    onChange={handleChange}
                    required
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="sex"
                    value="female"
                    checked={formData.sex === 'female'}
                    onChange={handleChange}
                  />
                  Female
                </label>
              </div>
            </div>

            <div className="form-group mb-3">
              <label>Chest Pain Type (cp)</label>
              <select
                className="form-control"
                name="cp"
                value={formData.cp}
                onChange={handleChange}
                required
              >
                <option value="">Select...</option>
                <option value="1">Typical Angina</option>
                <option value="2">Atypical Angina</option>
                <option value="3">Non-Anginal Pain</option>
                <option value="4">Asymptomatic</option>
              </select>
            </div>

            <div className="form-group mb-3">
              <label>Resting Blood Pressure (trestbps) (mm Hg)</label>
              <input
                type="number"
                className="form-control"
                name="trestbps"
                value={formData.trestbps}
                onChange={handleChange}
                required
                min="1"
              />
            </div>

            <div className="form-group mb-3">
              <label>Serum Cholestoral (chol) (mg/dl)</label>
              <input
                type="number"
                className="form-control"
                name="chol"
                value={formData.chol}
                onChange={handleChange}
                required
                min="1"
              />
            </div>

            <div className="form-group mb-3">
              <label>Fasting Blood Sugar gretter than 120 mg/dl (fbs)</label>
              <select
                className="form-control"
                name="fbs"
                value={formData.fbs}
                onChange={handleChange}
                required
              >
                <option value="">Select...</option>
                <option value="1">True</option>
                <option value="0">False</option>
              </select>
            </div>

            <div className="form-group mb-3">
              <label>Resting Electrocardiographic Results (restecg)</label>
              <select
                className="form-control"
                name="restecg"
                value={formData.restecg}
                onChange={handleChange}
                required
              >
                <option value="">Select...</option>
                <option value="0">Normal</option>
                <option value="1">Having ST-T wave abnormality</option>
                <option value="2">Showing probable or definite left ventricular hypertrophy</option>
              </select>
            </div>

            <div className="form-group mb-3">
              <label>Maximum Heart Rate Achieved (thalach) (bpm)</label>
              <input
                type="number"
                className="form-control"
                name="thalach"
                value={formData.thalach}
                onChange={handleChange}
                required
                min="1"
              />
            </div>

            <div className="form-group mb-3">
              <label>Exercise Induced Angina (exang)</label>
              <select
                className="form-control"
                name="exang"
                value={formData.exang}
                onChange={handleChange}
                required
              >
                <option value="">Select...</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>

            <div className="form-group mb-3">
              <label>Old Peak (oldpeak) - Depression Induced by Exercise Relative to Rest</label>
              <input
                type="number"
                className="form-control"
                name="oldpeak"
                value={formData.oldpeak}
                onChange={handleChange}
                required
                step="0.1"
                min="0"
              />
            </div>

            <div className="form-group mb-3">
              <label>Slope of Peak Exercise ST Segment (slope)</label>
              <select
                className="form-control"
                name="slope"
                value={formData.slope}
                onChange={handleChange}
                required
              >
                <option value="">Select...</option>
                <option value="1">Up Sloping</option>
                <option value="2">Flat</option>
                <option value="3">Down Sloping</option>
              </select>
            </div>

            <div className="form-group mb-3">
              <label>Number of Major Vessels Colored by Fluoroscopy (ca)</label>
              <input
                type="number"
                className="form-control"
                name="ca"
                value={formData.ca}
                onChange={handleChange}
                required
                min="0"
                max="3"
              />
            </div>

            <div className="form-group mb-3">
              <label>Thalassemia (thal)</label>
              <select
                className="form-control"
                name="thal"
                value={formData.thal}
                onChange={handleChange}
                required
              >
                <option value="">Select...</option>
                <option value="1">Normal</option>
                <option value="2">Fixed Defect</option>
                <option value="3">Reversible Defect</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary btn-block">Predict</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InputForm;

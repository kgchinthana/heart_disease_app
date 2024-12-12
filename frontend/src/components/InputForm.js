import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import heartDiseaseImage from '../images/background.jpg';

function InputForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    thal: '',
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
      {/* Hero Section */}
      <div className="hero-section text-center mb-5">
        <img
          src={heartDiseaseImage}
          alt="Heart Disease"
          className="img-fluid rounded mb-4"
          style={{ maxHeight: '400px', objectFit: 'cover' }}
        />
        <h1 className="display-4 text-primary">Heart Disease Prediction</h1>
        <p className="lead text-muted">Provide your details to predict the risk of heart disease.</p>
      </div>

      {/* Form Section */}
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg rounded">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Enter Your Details</h3>
              <form onSubmit={handleSubmit}>

                {/* Full Name */}
                <div className="form-group mb-3">
                  <label className="font-weight-bold">Full Name</label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div className="form-group mb-3">
                  <label className="font-weight-bold">Email</label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>

                {/* Age */}
                <div className="form-group mb-3">
                  <label className="font-weight-bold">Age</label>
                  <input
                    type="number"
                    className="form-control form-control-lg"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    min="1"
                    placeholder="Enter your age"
                  />
                </div>

                {/* Sex */}
                <div className="form-group mb-3">
                  <label className="font-weight-bold">Sex</label>
                  <select
                    className="form-control form-control-lg"
                    name="sex"
                    value={formData.sex}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select sex</option>
                    <option value="1">Male</option>
                    <option value="0">Female</option>
                  </select>
                </div>

                {/* Chest Pain Type */}
                <div className="form-group mb-3">
                  <label className="font-weight-bold">Chest Pain Type</label>
                  <select
                    className="form-control form-control-lg"
                    name="cp"
                    value={formData.cp}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select chest pain type</option>
                    <option value="0">No Pain</option>
                    <option value="1">Typical Angina</option>
                    <option value="2">Atypical Angina</option>
                    <option value="3">Non-anginal Pain</option>
                  </select>
                </div>

                {/* Resting Blood Pressure */}
                <div className="form-group mb-3">
                  <label className="font-weight-bold">Resting Blood Pressure</label>
                  <input
                    type="number"
                    className="form-control form-control-lg"
                    name="trestbps"
                    value={formData.trestbps}
                    onChange={handleChange}
                    required
                    min="0"
                    placeholder="Enter resting blood pressure"
                  />
                </div>

                {/* Cholesterol */}
                <div className="form-group mb-3">
                  <label className="font-weight-bold">Cholesterol</label>
                  <input
                    type="number"
                    className="form-control form-control-lg"
                    name="chol"
                    value={formData.chol}
                    onChange={handleChange}
                    required
                    min="0"
                    placeholder="Enter cholesterol level"
                  />
                </div>

                {/* Fasting Blood Sugar */}
                <div className="form-group mb-3">
                  <label className="font-weight-bold">Fasting Blood Sugar</label>
                  <select
                    className="form-control form-control-lg"
                    name="fbs"
                    value={formData.fbs}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select fasting blood sugar</option>
                    <option value="0">False</option>
                    <option value="1">True</option>
                  </select>
                </div>

                {/* Resting Electrocardiographic Results */}
                <div className="form-group mb-3">
                  <label className="font-weight-bold">Resting Electrocardiographic Results</label>
                  <select
                    className="form-control form-control-lg"
                    name="restecg"
                    value={formData.restecg}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select electrocardiographic result</option>
                    <option value="0">Normal</option>
                    <option value="1">ST-T Wave Abnormality</option>
                    <option value="2">Left Ventricular Hypertrophy</option>
                  </select>
                </div>

                {/* Maximum Heart Rate Achieved */}
                <div className="form-group mb-3">
                  <label className="font-weight-bold">Maximum Heart Rate Achieved</label>
                  <input
                    type="number"
                    className="form-control form-control-lg"
                    name="thalach"
                    value={formData.thalach}
                    onChange={handleChange}
                    required
                    min="0"
                    placeholder="Enter maximum heart rate achieved"
                  />
                </div>

                {/* Exercise-Induced Angina */}
                <div className="form-group mb-3">
                  <label className="font-weight-bold">Exercise-Induced Angina</label>
                  <select
                    className="form-control form-control-lg"
                    name="exang"
                    value={formData.exang}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select exercise-induced angina</option>
                    <option value="0">No</option>
                    <option value="1">Yes</option>
                  </select>
                </div>

                {/* Old Peak */}
                <div className="form-group mb-3">
                  <label className="font-weight-bold">Oldpeak</label>
                  <input
                    type="number"
                    className="form-control form-control-lg"
                    name="oldpeak"
                    value={formData.oldpeak}
                    onChange={handleChange}
                    required
                    step="any"
                    placeholder="Enter oldpeak value"
                  />
                </div>

                {/* Slope of Peak Exercise ST Segment */}
                <div className="form-group mb-3">
                  <label className="font-weight-bold">Slope of Peak Exercise ST Segment</label>
                  <select
                    className="form-control form-control-lg"
                    name="slope"
                    value={formData.slope}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select slope</option>
                    <option value="0">Upsloping</option>
                    <option value="1">Flat</option>
                    <option value="2">Downsloping</option>
                  </select>
                </div>

                {/* Number of Major Vessels Colored by Fluoroscopy */}
                <div className="form-group mb-3">
                  <label className="font-weight-bold">Number of Major Vessels Colored by Fluoroscopy</label>
                  <input
                    type="number"
                    className="form-control form-control-lg"
                    name="ca"
                    value={formData.ca}
                    onChange={handleChange}
                    required
                    min="0"
                    max="3"
                    placeholder="Enter number of major vessels"
                  />
                </div>

                {/* Thalassemia */}
                <div className="form-group mb-3">
                  <label className="font-weight-bold">Thalassemia</label>
                  <select
                    className="form-control form-control-lg"
                    name="thal"
                    value={formData.thal}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select thalassemia</option>
                    <option value="1">Normal</option>
                    <option value="2">Fixed Defect</option>
                    <option value="3">Reversible Defect</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn btn-lg btn-success btn-block mt-4"
                >
                  <i className="fas fa-heartbeat"></i> Predict Risk
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputForm;

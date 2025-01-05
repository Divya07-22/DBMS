import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom"; 

const StudentDetails = () => {
  const [formData, setFormData] = useState({
    studentname: "",
    usn: "",
    email: "",
    sem:"",
    yearofgraduation: "",
    specialization: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null); 
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);
    setErrorMessage(null);
  
    try {
      const response = await fetch("http://localhost:5000/api/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          navigate("/student/details-page"); // Redirect to the list page after submission
        }, 3000);
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Submission failed. Try again.");
      }
    } catch (error) {
      setErrorMessage("A network error occurred. Please check your connection.");
    }
  };

  return (
    <div style={{
      maxWidth: '600px', 
      margin: '50px auto', 
      padding: '30px', 
      backgroundColor: '#ffffff', 
      borderRadius: '10px',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Add Student Details</h2>
      {submitted && <p style={{ color: "#28a745", textAlign: 'center' }}>Details submitted successfully!</p>}
      {errorMessage && <p style={{ color: "#dc3545", textAlign: 'center' }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input 
          name="studentname" 
          type="text" 
          placeholder="Student Name" 
          value={formData.studentname} 
          onChange={handleChange} 
          required 
          style={inputStyle} 
        />
        <input 
          name="usn" 
          type="text" 
          placeholder="USN" 
          value={formData.usn} 
          onChange={handleChange} 
          required 
          style={inputStyle} 
        />
        <input 
          name="email" 
          type="email" 
          placeholder="Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
          style={inputStyle} 
        />
        <input 
          name="sem" 
          type="number" 
          placeholder="Semester" 
          value={formData.sem} 
          onChange={handleChange} 
          required 
          style={inputStyle} 
        />
        <input 
          name="yearofgraduation" 
          type="number" 
          placeholder="Year of Graduation" 
          value={formData.yearofgraduation} 
          onChange={handleChange} 
          required 
          style={inputStyle} 
        />
        <input 
          name="specialization" 
          type="text" 
          placeholder="Specialization" 
          value={formData.specialization} 
          onChange={handleChange} 
          required 
          style={inputStyle} 
        />
        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
    </div>
  );
};

// Inline styles for inputs and button
const inputStyle = {
  padding: '12px',
  fontSize: '16px',
  border: '1px solid #ddd',
  borderRadius: '5px',
  outline: 'none',
  backgroundColor: '#f9f9f9',
  transition: 'border-color 0.3s ease',
};

const buttonStyle = {
  padding: '12px 20px',
  fontSize: '16px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  alignSelf: 'center',
};

export default StudentDetails;

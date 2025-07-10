// // // import React, { useState } from "react"; 
// // // import { useNavigate } from "react-router-dom"; 

// // // const StudentDetails = () => {
// // //   const [formData, setFormData] = useState({
// // //     studentname: "",
// // //     usn: "",
// // //     email: "",
// // //     sem:"",
// // //     yearofgraduation: "",
// // //     specialization: "",
// // //   });

// // //   const [submitted, setSubmitted] = useState(false);
// // //   const [errorMessage, setErrorMessage] = useState(null); 
// // //   const navigate = useNavigate(); 

// // //   const handleChange = (e) => {
// // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setSubmitted(false);
// // //     setErrorMessage(null);
  
// // //     try {
// // //       const response = await fetch("http://localhost:5000/api/students", {
// // //         method: "POST",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //         },
// // //         body: JSON.stringify(formData),
// // //       });
  
// // //       if (response.ok) {
// // //         setSubmitted(true);
// // //         setTimeout(() => {
// // //           navigate("/student/details-page"); // Redirect to the list page after submission
// // //         }, 3000);
// // //       } else {
// // //         const errorData = await response.json();
// // //         setErrorMessage(errorData.message || "Submission failed. Try again.");
// // //       }
// // //     } catch (error) {
// // //       setErrorMessage("A network error occurred. Please check your connection.");
// // //     }
// // //   };

// // //   return (
// // //     <div style={{
// // //       maxWidth: '600px', 
// // //       margin: '50px auto', 
// // //       padding: '30px', 
// // //       backgroundColor: '#ffffff', 
// // //       borderRadius: '10px',
// // //       boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
// // //     }}>
// // //       <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Add Student Details</h2>
// // //       {submitted && <p style={{ color: "#28a745", textAlign: 'center' }}>Details submitted successfully!</p>}
// // //       {errorMessage && <p style={{ color: "#dc3545", textAlign: 'center' }}>{errorMessage}</p>}
// // //       <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
// // //         <input 
// // //           name="studentname" 
// // //           type="text" 
// // //           placeholder="Student Name" 
// // //           value={formData.studentname} 
// // //           onChange={handleChange} 
// // //           required 
// // //           style={inputStyle} 
// // //         />
// // //         <input 
// // //           name="usn" 
// // //           type="text" 
// // //           placeholder="USN" 
// // //           value={formData.usn} 
// // //           onChange={handleChange} 
// // //           required 
// // //           style={inputStyle} 
// // //         />
// // //         <input 
// // //           name="email" 
// // //           type="email" 
// // //           placeholder="Email" 
// // //           value={formData.email} 
// // //           onChange={handleChange} 
// // //           required 
// // //           style={inputStyle} 
// // //         />
// // //         <input 
// // //           name="sem" 
// // //           type="number" 
// // //           placeholder="Semester" 
// // //           value={formData.sem} 
// // //           onChange={handleChange} 
// // //           required 
// // //           style={inputStyle} 
// // //         />
// // //         <input 
// // //           name="yearofgraduation" 
// // //           type="number" 
// // //           placeholder="Year of Graduation" 
// // //           value={formData.yearofgraduation} 
// // //           onChange={handleChange} 
// // //           required 
// // //           style={inputStyle} 
// // //         />
// // //         <input 
// // //           name="specialization" 
// // //           type="text" 
// // //           placeholder="Specialization" 
// // //           value={formData.specialization} 
// // //           onChange={handleChange} 
// // //           required 
// // //           style={inputStyle} 
// // //         />
// // //         <button type="submit" style={buttonStyle}>Submit</button>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // // Inline styles for inputs and button
// // // const inputStyle = {
// // //   padding: '12px',
// // //   fontSize: '16px',
// // //   border: '1px solid #ddd',
// // //   borderRadius: '5px',
// // //   outline: 'none',
// // //   backgroundColor: '#f9f9f9',
// // //   transition: 'border-color 0.3s ease',
// // // };

// // // const buttonStyle = {
// // //   padding: '12px 20px',
// // //   fontSize: '16px',
// // //   backgroundColor: '#007bff',
// // //   color: 'white',
// // //   border: 'none',
// // //   borderRadius: '5px',
// // //   cursor: 'pointer',
// // //   transition: 'background-color 0.3s ease',
// // //   alignSelf: 'center',
// // // };

// // // export default StudentDetails;
// // import React, { useState } from "react"; 
// // import { useNavigate } from "react-router-dom"; 

// // const StudentDetails = () => {
// //   const [formData, setFormData] = useState({
// //     name: "",          // Changed from studentname
// //     usn: "",
// //     email: "",
// //     semester: "",      // Changed from sem
// //     graduationYear: "", // Changed from yearofgraduation
// //     specialization: "",
// //   });

// //   const [submitted, setSubmitted] = useState(false);
// //   const [errorMessage, setErrorMessage] = useState(null); 
// //   const navigate = useNavigate(); 

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setSubmitted(false);
// //     setErrorMessage(null);
  
// //     try {
// //       const response = await fetch("http://localhost:5000/api/students", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify(formData),
// //       });
  
// //       if (response.ok) {
// //         setSubmitted(true);
// //         setTimeout(() => {
// //           navigate("/student/details-page");
// //         }, 3000);
// //       } else {
// //         const errorData = await response.json();
// //         setErrorMessage(errorData.error || "Submission failed. Try again.");
// //       }
// //     } catch (error) {
// //       setErrorMessage("A network error occurred. Please check your connection.");
// //     }
// //   };

// //   return (
// //     <div style={{
// //       maxWidth: '600px', 
// //       margin: '50px auto', 
// //       padding: '30px', 
// //       backgroundColor: '#ffffff', 
// //       borderRadius: '10px',
// //       boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
// //     }}>
// //       <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Add Student Details</h2>
// //       {submitted && <p style={{ color: "#28a745", textAlign: 'center' }}>Details submitted successfully!</p>}
// //       {errorMessage && <p style={{ color: "#dc3545", textAlign: 'center' }}>{errorMessage}</p>}
// //       <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
// //         <input 
// //           name="name"                 // Changed from studentname
// //           type="text" 
// //           placeholder="Student Name" 
// //           value={formData.name}       // Changed from studentname
// //           onChange={handleChange} 
// //           required 
// //           style={inputStyle} 
// //         />
// //         <input 
// //           name="usn" 
// //           type="text" 
// //           placeholder="USN" 
// //           value={formData.usn} 
// //           onChange={handleChange} 
// //           required 
// //           style={inputStyle} 
// //         />
// //         <input 
// //           name="email" 
// //           type="email" 
// //           placeholder="Email" 
// //           value={formData.email} 
// //           onChange={handleChange} 
// //           required 
// //           style={inputStyle} 
// //         />
// //         <input 
// //           name="semester"             // Changed from sem
// //           type="number" 
// //           placeholder="Semester" 
// //           value={formData.semester}   // Changed from sem
// //           onChange={handleChange} 
// //           required 
// //           style={inputStyle} 
// //         />
// //         <input 
// //           name="graduationYear"      // Changed from yearofgraduation
// //           type="number" 
// //           placeholder="Year of Graduation" 
// //           value={formData.graduationYear}  // Changed from yearofgraduation
// //           onChange={handleChange} 
// //           required 
// //           style={inputStyle} 
// //         />
// //         <input 
// //           name="specialization" 
// //           type="text" 
// //           placeholder="Specialization" 
// //           value={formData.specialization} 
// //           onChange={handleChange} 
// //           required 
// //           style={inputStyle} 
// //         />
// //         <button type="submit" style={buttonStyle}>Submit</button>
// //       </form>
// //     </div>
// //   );
// // };

// // // Inline styles remain unchanged
// // const inputStyle = {
// //   padding: '12px',
// //   fontSize: '16px',
// //   border: '1px solid #ddd',
// //   borderRadius: '5px',
// //   outline: 'none',
// //   backgroundColor: '#f9f9f9',
// //   transition: 'border-color 0.3s ease',
// // };

// // const buttonStyle = {
// //   padding: '12px 20px',
// //   fontSize: '16px',
// //   backgroundColor: '#007bff',
// //   color: 'white',
// //   border: 'none',
// //   borderRadius: '5px',
// //   cursor: 'pointer',
// //   transition: 'background-color 0.3s ease',
// //   alignSelf: 'center',
// // };

// // export default StudentDetails;

// import React, { useState } from "react"; 
// import { useNavigate } from "react-router-dom"; 

// const StudentDetails = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     usn: "",
//     email: "",
//     semester: "",
//     graduationYear: "", // Fixed field name
//     specialization: "",
//   });

//   const [submitted, setSubmitted] = useState(false);
//   const [errorMessage, setErrorMessage] = useState(null); 
//   const navigate = useNavigate(); 

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitted(false);
//     setErrorMessage(null);
  
//     try {
//       // Convert numbers before sending
//       const dataToSend = {
//         ...formData,
//         semester: Number(formData.semester),
//         graduationYear: Number(formData.graduationYear)
//       };
      
//       const response = await fetch("http://localhost:5000/api/students", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(dataToSend),
//       });
  
//       if (response.ok) {
//         setSubmitted(true);
//         setTimeout(() => navigate("/student/details-page"), 2000);
//       } else {
//         const errorData = await response.json();
//         setErrorMessage(
//           errorData.error || 
//           errorData.message || 
//           "Submission failed. Please try again."
//         );
//       }
//     } catch (error) {
//       setErrorMessage("Network error. Please check your connection.");
//     }
//   };

//   // JSX remains the same with updated field names...
//   return (
//     <div style={containerStyle}>
//       <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Add Student Details</h2>
//       {submitted && (
//         <p style={{ color: "#28a745", textAlign: 'center' }}>
//           ✅ Details submitted successfully!
//         </p>
//       )}
//       {errorMessage && (
//         <p style={{ color: "#dc3545", textAlign: 'center' }}>
//           ❌ {errorMessage}
//         </p>
//       )}
//       <form onSubmit={handleSubmit} style={formStyle}>
//         <input 
//           name="name"
//           type="text" 
//           placeholder="Student Name" 
//           value={formData.name} 
//           onChange={handleChange} 
//           required 
//           style={inputStyle} 
//         />
//         <input 
//           name="usn" 
//           type="text" 
//           placeholder="USN (e.g. 1VE20CS001)" 
//           value={formData.usn} 
//           onChange={handleChange} 
//           required 
//           style={inputStyle} 
//         />
//         <input 
//           name="email" 
//           type="email" 
//           placeholder="Email (e.g. name@example.com)" 
//           value={formData.email} 
//           onChange={handleChange} 
//           required 
//           style={inputStyle} 
//         />
//         <input 
//           name="semester" 
//           type="number" 
//           placeholder="Semester (1-8)" 
//           value={formData.semester} 
//           onChange={handleChange} 
//           min="1"
//           max="8"
//           required 
//           style={inputStyle} 
//         />
//         <input 
//           name="graduationYear" 
//           type="number" 
//           placeholder="Graduation Year (e.g. 2025)" 
//           value={formData.graduationYear} 
//           onChange={handleChange} 
//           min="2000"
//           max="2030"
//           required 
//           style={inputStyle} 
//         />
//         <input 
//           name="specialization" 
//           type="text" 
//           placeholder="Specialization (e.g. Computer Science)" 
//           value={formData.specialization} 
//           onChange={handleChange} 
//           required 
//           style={inputStyle} 
//         />
//         <button type="submit" style={buttonStyle}>Submit</button>
//       </form>
//     </div>
//   );
// };

// // CSS styles (unchanged)
// const containerStyle = {
//   maxWidth: '600px', 
//   margin: '50px auto', 
//   padding: '30px', 
//   backgroundColor: '#ffffff', 
//   borderRadius: '10px',
//   boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
// };

// const formStyle = {
//   display: 'flex', 
//   flexDirection: 'column', 
//   gap: '15px'
// };

// const inputStyle = {
//   padding: '12px',
//   fontSize: '16px',
//   border: '1px solid #ddd',
//   borderRadius: '5px',
//   outline: 'none',
//   backgroundColor: '#f9f9f9',
//   transition: 'border-color 0.3s ease',
// };

// const buttonStyle = {
//   padding: '12px 20px',
//   fontSize: '16px',
//   backgroundColor: '#007bff',
//   color: 'white',
//   border: 'none',
//   borderRadius: '5px',
//   cursor: 'pointer',
//   transition: 'background-color 0.3s ease',
//   alignSelf: 'center',
// };

// export default StudentDetails;
import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom"; 

const StudentDetails = () => {
  const [formData, setFormData] = useState({
    name: "",
    usn: "",
    email: "",
    semester: "",
    graduationYear: "",
    specialization: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null); 
  const navigate = useNavigate(); 
  const [buttonHover, setButtonHover] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);
    setErrorMessage(null);
  
    try {
      const dataToSend = {
        ...formData,
        semester: Number(formData.semester),
        graduationYear: Number(formData.graduationYear)
      };
      
      const response = await fetch("http://localhost:5000/api/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });
  
      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => navigate("/student/details-page"), 2000);
      } else {
        const errorData = await response.json();
        setErrorMessage(
          errorData.error || 
          errorData.message || 
          "Submission failed. Please try again."
        );
      }
    } catch (error) {
      setErrorMessage("Network error. Please check your connection.");
    }
  };

  return (
    <div style={containerOuterStyle}>
      <style>
        {`
          @keyframes slideIn {
            0% { transform: translateX(-100px); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
      
      <div style={containerStyle}>
        <h2 style={headerStyle}>Add Student Details</h2>
        
        {submitted && (
          <div style={successStyle}>
            ✅ Details submitted successfully!
          </div>
        )}
        
        {errorMessage && (
          <div style={errorStyle}>
            ❌ {errorMessage}
          </div>
        )}
        
        <form onSubmit={handleSubmit} style={formStyle}>
          <input 
            name="name"
            type="text" 
            placeholder="Student Name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            style={inputStyle} 
          />
          
          <input 
            name="usn" 
            type="text" 
            placeholder="USN (e.g. 1VE20CS001)" 
            value={formData.usn} 
            onChange={handleChange} 
            required 
            style={inputStyle} 
          />
          
          <input 
            name="email" 
            type="email" 
            placeholder="Email (e.g. name@example.com)" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            style={inputStyle} 
          />
          
          <input 
            name="semester" 
            type="number" 
            placeholder="Semester (1-8)" 
            value={formData.semester} 
            onChange={handleChange} 
            min="1"
            max="8"
            required 
            style={inputStyle} 
          />
          
          <input 
            name="graduationYear" 
            type="number" 
            placeholder="Graduation Year (e.g. 2025)" 
            value={formData.graduationYear} 
            onChange={handleChange} 
            min="2000"
            max="2030"
            required 
            style={inputStyle} 
          />
          
          <input 
            name="specialization" 
            type="text" 
            placeholder="Specialization (e.g. Computer Science)" 
            value={formData.specialization} 
            onChange={handleChange} 
            required 
            style={inputStyle} 
          />
          
          <button 
            type="submit" 
            style={{
              ...buttonStyle,
              background: buttonHover 
                ? 'linear-gradient(90deg, #ff8a00, #e52e71)'
                : 'linear-gradient(90deg, #4facfe, #00f2fe)',
              transform: buttonHover ? 'scale(1.05)' : 'scale(1)',
              boxShadow: buttonHover 
                ? '0 10px 20px rgba(0, 0, 0, 0.2)' 
                : '0 5px 15px rgba(0, 0, 0, 0.1)'
            }}
            onMouseEnter={() => setButtonHover(true)}
            onMouseLeave={() => setButtonHover(false)}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

// New CSS styles with animations
const containerOuterStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
  backgroundSize: '400% 400%',
  animation: 'gradient 15s ease infinite',
  padding: '20px',
};

const containerStyle = {
  maxWidth: '600px',
  width: '100%',
  padding: '40px',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  borderRadius: '20px',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
  animation: 'slideIn 0.8s ease-out, float 6s ease-in-out infinite',
  transform: 'translateY(0)',
};

const headerStyle = {
  textAlign: 'center',
  marginBottom: '30px',
  color: '#fff',
  fontSize: '2.2rem',
  fontWeight: '600',
  textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '25px',
};

const inputStyle = {
  padding: '16px 20px',
  fontSize: '16px',
  border: 'none',
  borderRadius: '12px',
  outline: 'none',
  backgroundColor: 'rgba(255, 255, 255, 0.85)',
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
};

const buttonStyle = {
  padding: '16px 40px',
  fontSize: '18px',
  fontWeight: '600',
  color: 'white',
  border: 'none',
  borderRadius: '12px',
  cursor: 'pointer',
  transition: 'all 0.4s ease',
  alignSelf: 'center',
  marginTop: '15px',
  letterSpacing: '1px',
  backgroundSize: '200% auto',
  backgroundPosition: 'left center',
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
  textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
};

const successStyle = {
  color: '#d4edda',
  textAlign: 'center',
  padding: '15px',
  marginBottom: '20px',
  backgroundColor: 'rgba(40, 167, 69, 0.2)',
  borderRadius: '8px',
  fontWeight: '500',
  fontSize: '1.1rem',
  animation: 'slideIn 0.5s ease-out',
};

const errorStyle = {
  color: '#f8d7da',
  textAlign: 'center',
  padding: '15px',
  marginBottom: '20px',
  backgroundColor: 'rgba(220, 53, 69, 0.2)',
  borderRadius: '8px',
  fontWeight: '500',
  fontSize: '1.1rem',
  animation: 'slideIn 0.5s ease-out',
};

export default StudentDetails;
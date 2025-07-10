


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const inputStyle = {
//     width: "100%",
//     padding: "0.8rem",
//     margin: "0.8rem 0",
//     border: "2px solid #4CAF50",
//     borderRadius: "5px",
//     fontSize: "1rem",
//     outline: "none",
//     boxSizing: "border-box",
//     transition: "border-color 0.3s ease",
// };

// const inputFocusStyle = {
//     ...inputStyle,
//     borderColor: "#2e7d32",
// };

// const buttonStyle = {
//     width: "100%",
//     padding: "0.8rem",
//     backgroundColor: "#4CAF50",
//     color: "white",
//     border: "none",
//     borderRadius: "5px",
//     fontSize: "1rem",
//     fontWeight: "bold",
//     cursor: "pointer",
//     transition: "background-color 0.3s, transform 0.3s",
// };

// const buttonHoverStyle = {
//     ...buttonStyle,
//     backgroundColor: "#45a049",
//     transform: "scale(1.05)",
// };

// const FacultySignUp = () => {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//     });

//     const [error, setError] = useState(""); // To handle error messages
//     const [success, setSuccess] = useState(""); // To handle success messages
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//         setError(""); // Reset error on input change
//         setSuccess(""); // Reset success on input change
//     };

//     const validateForm = () => {
//         if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
//             setError("All fields are required.");
//             return false;
//         }
//         if (formData.password !== formData.confirmPassword) {
//             setError("Passwords do not match.");
//             return false;
//         }
//         if (!/\S+@\S+\.\S+/.test(formData.email)) {
//             setError("Please enter a valid email.");
//             return false;
//         }
//         return true;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Validate form fields
//         if (!validateForm()) {
//             return;
//         }

//         try {
//             const response = await fetch("http://localhost:5000/api/faculty/signup", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({
//                     name: formData.name,
//                     email: formData.email,
//                     password: formData.password,
                    
//                 }),
//             });

//             const data = await response.json();

//             if (response.ok) {
//                 // Display success alert
//                 window.alert("Signup successful! Redirecting to dashboard...");
//                 setSuccess("Signup successful! Redirecting to dashboard...");
//                 setTimeout(() => {
//                     navigate("/faculty/dashboard"); // Redirect after success
//                 }, 2000);
//             } else {
//                 // Display error alert
//                 window.alert(data.error || "Signup failed. Please try again.");
//                 setError(data.error || "Signup failed. Please try again.");
//             }
//         } catch (error) {
//             // Display error alert for unexpected issues
//             window.alert("An error occurred. Please try again.");
//             setError("An error occurred. Please try again.");
//         }
//     };

//     return (
//         <div style={{ marginTop: "20px", maxWidth: "500px", margin: "0 auto" }}>
//             <h2 style={{ textAlign: "center", color: "#4CAF50" }}>Faculty Sign Up</h2>
//             {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
//             {success && <p style={{ color: "green", textAlign: "center" }}>{success}</p>}
//             <form onSubmit={handleSubmit}>
//                 <input
//                     name="name"
//                     type="text"
//                     placeholder="Name"
//                     onChange={handleChange}
//                     value={formData.name}
//                     style={formData.name ? inputFocusStyle : inputStyle}
//                 />
//                 <input
//                     name="email"
//                     type="email"
//                     placeholder="Email"
//                     onChange={handleChange}
//                     value={formData.email}
//                     style={formData.email ? inputFocusStyle : inputStyle}
//                 />
//                 <input
//                     name="password"
//                     type="password"
//                     placeholder="Password"
//                     onChange={handleChange}
//                     value={formData.password}
//                     style={formData.password ? inputFocusStyle : inputStyle}
//                 />
//                 <input
//                     name="confirmPassword"
//                     type="password"
//                     placeholder="Confirm Password"
//                     onChange={handleChange}
//                     value={formData.confirmPassword}
//                     style={formData.confirmPassword ? inputFocusStyle : inputStyle}
//                 />
//                 <button
//                     type="submit"
//                     style={buttonStyle}
//                     disabled={
//                         !formData.name ||
//                         !formData.email ||
//                         !formData.password ||
//                         !formData.confirmPassword ||
//                         formData.password !== formData.confirmPassword
//                     }
//                     onMouseEnter={(e) => (e.target.style.backgroundColor = "#45a049")}
//                     onMouseLeave={(e) => (e.target.style.backgroundColor = "#4CAF50")}
//                 >
//                     Sign Up
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default FacultySignUp;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FacultySignUp = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();
    const [buttonHover, setButtonHover] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError("");
        setSuccess("");
    };

    const validateForm = () => {
        if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
            setError("All fields are required.");
            return false;
        }
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            return false;
        }
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            setError("Please enter a valid email.");
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/api/faculty/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    password: formData.password,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                window.alert("Signup successful! Redirecting to dashboard...");
                setSuccess("Signup successful! Redirecting to dashboard...");
                setTimeout(() => {
                    navigate("/faculty/dashboard");
                }, 2000);
            } else {
                window.alert(data.error || "Signup failed. Please try again.");
                setError(data.error || "Signup failed. Please try again.");
            }
        } catch (error) {
            window.alert("An error occurred. Please try again.");
            setError("An error occurred. Please try again.");
        }
    };

    return (
        <div style={containerOuterStyle}>
            <style>
                {`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                    100% { transform: translateY(0px); }
                }
                
                @keyframes gradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                
                @keyframes slideIn {
                    0% { transform: translateY(100px); opacity: 0; }
                    100% { transform: translateY(0); opacity: 1; }
                }
                
                @keyframes pulse {
                    0% { box-shadow: 0 0 0 0 rgba(106, 27, 154, 0.7); }
                    70% { box-shadow: 0 0 0 15px rgba(106, 27, 154, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(106, 27, 154, 0); }
                }
                `}
            </style>
            
            <div style={containerStyle}>
                <h2 style={headerStyle}>Faculty Sign Up</h2>
                
                {error && (
                    <div style={errorStyle}>
                        ❌ {error}
                    </div>
                )}
                
                {success && (
                    <div style={successStyle}>
                        ✅ {success}
                    </div>
                )}
                
                <form onSubmit={handleSubmit} style={formStyle}>
                    <input
                        name="name"
                        type="text"
                        placeholder="Full Name"
                        onChange={handleChange}
                        value={formData.name}
                        style={inputStyle}
                    />
                    
                    <input
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        onChange={handleChange}
                        value={formData.email}
                        style={inputStyle}
                    />
                    
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        onChange={handleChange}
                        value={formData.password}
                        style={inputStyle}
                    />
                    
                    <input
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                        onChange={handleChange}
                        value={formData.confirmPassword}
                        style={inputStyle}
                    />
                    
                    <button
                        type="submit"
                        style={{
                            ...buttonStyle,
                            background: buttonHover 
                                ? 'linear-gradient(45deg, #7b1fa2, #ab47bc)' 
                                : 'linear-gradient(45deg, #6a1b9a, #9c27b0)',
                            transform: buttonHover ? 'scale(1.05)' : 'scale(1)',
                            boxShadow: buttonHover 
                                ? '0 10px 25px rgba(156, 39, 176, 0.4)' 
                                : '0 5px 15px rgba(156, 39, 176, 0.3)',
                        }}
                        onMouseEnter={() => setButtonHover(true)}
                        onMouseLeave={() => setButtonHover(false)}
                        disabled={
                            !formData.name ||
                            !formData.email ||
                            !formData.password ||
                            !formData.confirmPassword ||
                            formData.password !== formData.confirmPassword
                        }
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

// Modern glassmorphism styles with animations
const containerOuterStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(-45deg, #673ab7, #9c27b0, #2196f3, #26c6da)',
    backgroundSize: '400% 400%',
    animation: 'gradient 15s ease infinite',
    padding: '20px',
};

const containerStyle = {
    width: '100%',
    maxWidth: '500px',
    padding: '40px',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(12px)',
    borderRadius: '20px',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.25)',
    animation: 'float 8s ease-in-out infinite, slideIn 0.8s ease-out',
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
    gap: '20px',
};

const inputStyle = {
    width: '100%',
    padding: '16px 20px',
    margin: '8px 0',
    border: 'none',
    borderRadius: '12px',
    fontSize: '1rem',
    outline: 'none',
    boxSizing: 'border-box',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
    animation: 'pulse 2s infinite',
};

const buttonStyle = {
    width: '100%',
    padding: '16px',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.4s ease',
    marginTop: '15px',
    letterSpacing: '1px',
    backgroundSize: '200% auto',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
    textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
};

const errorStyle = {
    color: '#ffcdd2',
    textAlign: 'center',
    padding: '15px',
    marginBottom: '15px',
    backgroundColor: 'rgba(211, 47, 47, 0.2)',
    borderRadius: '10px',
    fontWeight: '500',
    fontSize: '1rem',
    animation: 'slideIn 0.5s ease-out',
};

const successStyle = {
    color: '#c8e6c9',
    textAlign: 'center',
    padding: '15px',
    marginBottom: '15px',
    backgroundColor: 'rgba(56, 142, 60, 0.2)',
    borderRadius: '10px',
    fontWeight: '500',
    fontSize: '1rem',
    animation: 'slideIn 0.5s ease-out',
};

export default FacultySignUp;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const FormSection = ({ title, fields, data, setData, endpoint }) => {
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(endpoint, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//       });
      
//       if (response.ok) {
//         alert(`${title} submitted successfully!`);
//         setData({});
//       } else {
//         try {
//           const errorData = await response.json();
//           alert(
//             `Failed to submit ${title}: ${errorData.error || errorData.message || "Unknown error"}`
//           );
//         } catch (parseError) {
//           alert(`Failed to submit ${title}: ${response.statusText}`);
//         }
//       }
//     } catch (error) {
//       console.error(`Error submitting ${title}:`, error);
//       alert(`An error occurred while submitting ${title}.`);
//     }
//   };

//   const styles = {
//     inputField: {
//       margin: "10px 0",
//       padding: "10px",
//       borderRadius: "4px",
//       border: "1px solid #ddd",
//       width: "100%",
//       boxSizing: "border-box",
//     },
//     button: {
//       backgroundColor: "#007bff",
//       color: "white",
//       padding: "10px 15px",
//       border: "none",
//       borderRadius: "4px",
//       cursor: "pointer",
//       transition: "background-color 0.3s ease",
//     },
//     container: {
//       borderRadius: "8px",
//       boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//       padding: "20px",
//       maxWidth: "600px",
//       margin: "20px auto",
//       backgroundColor: "#f9f9f9",
//     },
//     errorMessage: {
//       color: "red",
//       fontSize: "12px",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <h2>{title}</h2>
//       <form onSubmit={handleSubmit}>
//         {fields.map((field) => (
//           <div key={field.key} style={{ marginBottom: "10px" }}>
//             <label>{field.label}:</label>
//             <input
//               type="text"
//               value={data[field.key] || ""}
//               onChange={(e) =>
//                 setData({ ...data, [field.key]: e.target.value })
//               }
//               style={styles.inputField}
//               required
//             />
//           </div>
//         ))}
//         <button
//           type="submit"
//           style={styles.button}
//           onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
//           onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
//         >
//           Submit {title}
//         </button>
//       </form>
//     </div>
//   );
// };

// const Tables = () => {
//   const [recruiter, setRecruiter] = useState({});
//   const [skill, setSkill] = useState({});
//   const [internship, setInternship] = useState({});
//   const [interview, setInterview] = useState({});
//   const [placement, setPlacement] = useState({});
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     navigate("/student-details");
//   };

//   const styles = {
//     logoutButton: {
//       padding: "10px 15px",
//       backgroundColor: "#dc3545",
//       color: "white",
//       border: "none",
//       borderRadius: "4px",
//       cursor: "pointer",
//       marginTop: "20px",
//       transition: "background-color 0.3s ease",
//     },
//   };

//   return (
//     <div>
//       <FormSection
//         title="Recruiter Details"
//         fields={[
//           { key: "companyName", label: "Company Name" },
//           { key: "contactPerson", label: "Contact Person" },
//           { key: "contactEmail", label: "Contact Email" },
//           { key: "contactPhone", label: "Contact Phone" },
//           { key: "location", label: "Location" },
//         ]}
//         data={recruiter}
//         setData={setRecruiter}
//         endpoint="http://localhost:5000/api/recruiters"
//       />
//       <FormSection
//         title="Skill Details"
//         fields={[
//           { key: "std_id", label: "Student ID" },
//           { key: "skill_name", label: "Skill Name" },
//           { key: "skill_category", label: "Skill Category" },
//         ]}
//         data={skill}
//         setData={setSkill}
//         endpoint="http://localhost:5000/api/skills"
//       />
//       <FormSection
//         title="Internship Details"
//         fields={[
//           { key: "title", label: "Title" },
//           { key: "description", label: "Description" },
//           { key: "recruit_id", label: "Recruiter ID" },
//           { key: "location", label: "Location" },
//           { key: "duration", label: "Duration" },
//           { key: "stipend", label: "Stipend" },
//           { key: "skills_required", label: "Skills Required" },
//           { key: "application_deadline", label: "Application Deadline" },
//         ]}
//         data={internship}
//         setData={setInternship}
//         endpoint="http://localhost:5000/api/internships"
//       />
//       <FormSection
//         title="Interview Details"
//         fields={[
//           { key: "std_id", label: "Student ID" },
//           { key: "recruit_id", label: "Recruiter ID" },
//           { key: "interview_result", label: "Interview Result" },
//           { key: "interview_date", label: "Interview Date" },
//           { key: "interview_mode", label: "Interview Mode" },
//           { key: "feedback", label: "Feedback" },
//           { key: "interviewer_name", label: "Interview Name" },
//         ]}
//         data={interview}
//         setData={setInterview}
//         endpoint="http://localhost:5000/api/interviews"
//       />
//       <FormSection
//         title="Placement Details"
//         fields={[
//           { key: "std_id", label: "Student ID" },
//           { key: "company_name", label: "Company Name" },
//           { key: "job_title", label: "Job Title" },
//           { key: "date_of_placement", label: "Date of Placement" },
//           { key: "salary_package", label: "Salary" },
//           { key: "placed", label: "Placed" },
//           { key: "location", label: "Location" },
//         ]}
//         data={placement}
//         setData={setPlacement}
//         endpoint="http://localhost:5000/api/placements"
//       />
//       <button
//         onClick={handleLogout}
//         style={styles.logoutButton}
//         onMouseOver={(e) => (e.target.style.backgroundColor = "#bd2130")}
//         onMouseOut={(e) => (e.target.style.backgroundColor = "#dc3545")}
//       >
//         Logout
//       </button>
//     </div>
//   );
// };

// export default Tables;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormSection = ({ title, fields, data, setData, endpoint }) => {
  const [containerHovered, setContainerHovered] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        alert(`${title} submitted successfully!`);
        setData({});
      } else {
        try {
          const errorData = await response.json();
          alert(
            `Failed to submit ${title}: ${errorData.error || errorData.message || "Unknown error"}`
          );
        } catch (parseError) {
          alert(`Failed to submit ${title}: ${response.statusText}`);
        }
      }
    } catch (error) {
      console.error(`Error submitting ${title}:`, error);
      alert(`An error occurred while submitting ${title}.`);
    }
  };

  const styles = {
    inputField: {
      margin: "10px 0",
      padding: "15px",
      borderRadius: "8px",
      border: "1px solid #e0e0e0",
      width: "100%",
      boxSizing: "border-box",
      fontSize: "16px",
      transition: "all 0.3s ease",
      background: "#f8f9fa",
    },
    button: {
      backgroundColor: "#4361ee",
      color: "white",
      padding: "12px 25px",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      fontSize: "16px",
      fontWeight: "600",
      letterSpacing: "0.5px",
      boxShadow: "0 4px 6px rgba(67, 97, 238, 0.3)",
    },
    container: {
      borderRadius: "16px",
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.08)",
      padding: "30px",
      maxWidth: "650px",
      margin: "25px auto",
      backgroundColor: "white",
      transition: "all 0.4s ease",
      transform: containerHovered ? "translateY(-5px)" : "translateY(0)",
      border: "1px solid #f0f0f0",
    },
    label: {
      display: "block",
      marginBottom: "8px",
      fontWeight: "500",
      color: "#333",
      fontSize: "15px",
    },
  };

  return (
    <div 
      style={styles.container}
      onMouseEnter={() => setContainerHovered(true)}
      onMouseLeave={() => setContainerHovered(false)}
    >
      <h2 style={{
        marginTop: 0,
        marginBottom: "25px",
        color: "#4361ee",
        fontSize: "28px",
        fontWeight: "700",
        textAlign: "center",
        position: "relative",
        paddingBottom: "15px",
      }}>
        {title}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "80px",
          height: "4px",
          background: "linear-gradient(90deg, #4361ee, #3a0ca3)",
          borderRadius: "2px",
        }}></div>
      </h2>
      
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.key} style={{ marginBottom: "20px" }}>
            <label style={styles.label}>{field.label}:</label>
            <input
              type="text"
              value={data[field.key] || ""}
              onChange={(e) =>
                setData({ ...data, [field.key]: e.target.value })
              }
              style={styles.inputField}
              onFocus={(e) => {
                e.target.style.borderColor = "#4361ee";
                e.target.style.boxShadow = "0 0 0 3px rgba(67, 97, 238, 0.2)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e0e0e0";
                e.target.style.boxShadow = "none";
              }}
              required
              placeholder={`Enter ${field.label.toLowerCase()}...`}
            />
          </div>
        ))}
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <button
            type="submit"
            style={{
              ...styles.button,
              backgroundColor: buttonHovered ? "#3a0ca3" : "#4361ee",
              transform: buttonHovered ? "scale(1.05)" : "scale(1)",
              boxShadow: buttonHovered 
                ? "0 7px 14px rgba(67, 97, 238, 0.4)" 
                : "0 4px 6px rgba(67, 97, 238, 0.3)",
            }}
            onMouseEnter={() => setButtonHovered(true)}
            onMouseLeave={() => setButtonHovered(false)}
          >
            Submit {title}
            <span style={{ marginLeft: "8px", transition: "transform 0.3s ease" }}>
              {buttonHovered ? "🚀" : "📝"}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

const Tables = () => {
  const [recruiter, setRecruiter] = useState({});
  const [skill, setSkill] = useState({});
  const [internship, setInternship] = useState({});
  const [interview, setInterview] = useState({});
  const [placement, setPlacement] = useState({});
  const navigate = useNavigate();
  
  const [logoutHovered, setLogoutHovered] = useState(false);

  const handleLogout = () => {
    navigate("/student-details");
  };

  const styles = {
    logoutButton: {
      padding: "14px 30px",
      backgroundColor: "#f72585",
      color: "white",
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
      margin: "30px auto 40px",
      display: "block",
      fontSize: "16px",
      fontWeight: "600",
      letterSpacing: "0.5px",
      boxShadow: "0 4px 6px rgba(247, 37, 133, 0.3)",
      transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    },
    container: {
      maxWidth: "800px",
      margin: "0 auto",
      padding: "20px",
      background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
      minHeight: "100vh",
    },
    header: {
      textAlign: "center",
      padding: "30px 0 10px",
      color: "#3a0ca3",
      fontSize: "2.8rem",
      fontWeight: "800",
      textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
      marginBottom: "10px",
      background: "linear-gradient(90deg, #4361ee, #7209b7)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    subtitle: {
      textAlign: "center",
      color: "#6c757d",
      fontSize: "1.2rem",
      marginBottom: "40px",
      fontWeight: "400",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Campus Placement Portal</h1>
      <p style={styles.subtitle}>Manage all placement-related information in one place</p>
      
      <FormSection
        title="Recruiter Details"
        fields={[
          { key: "companyName", label: "Company Name" },
          { key: "contactPerson", label: "Contact Person" },
          { key: "contactEmail", label: "Contact Email" },
          { key: "contactPhone", label: "Contact Phone" },
          { key: "location", label: "Location" },
        ]}
        data={recruiter}
        setData={setRecruiter}
        endpoint="http://localhost:5000/api/recruiters"
      />
      
      <FormSection
        title="Skill Details"
        fields={[
          { key: "std_id", label: "Student ID" },
          { key: "skill_name", label: "Skill Name" },
          { key: "skill_category", label: "Skill Category" },
        ]}
        data={skill}
        setData={setSkill}
        endpoint="http://localhost:5000/api/skills"
      />
      
      <FormSection
        title="Internship Details"
        fields={[
          { key: "title", label: "Title" },
          { key: "description", label: "Description" },
          { key: "recruit_id", label: "Recruiter ID" },
          { key: "location", label: "Location" },
          { key: "duration", label: "Duration" },
          { key: "stipend", label: "Stipend" },
          { key: "skills_required", label: "Skills Required" },
          { key: "application_deadline", label: "Application Deadline" },
        ]}
        data={internship}
        setData={setInternship}
        endpoint="http://localhost:5000/api/internships"
      />
      
      <FormSection
        title="Interview Details"
        fields={[
          { key: "std_id", label: "Student ID" },
          { key: "recruit_id", label: "Recruiter ID" },
          { key: "interview_result", label: "Interview Result" },
          { key: "interview_date", label: "Interview Date" },
          { key: "interview_mode", label: "Interview Mode" },
          { key: "feedback", label: "Feedback" },
          { key: "interviewer_name", label: "Interview Name" },
        ]}
        data={interview}
        setData={setInterview}
        endpoint="http://localhost:5000/api/interviews"
      />
      
      <FormSection
        title="Placement Details"
        fields={[
          { key: "std_id", label: "Student ID" },
          { key: "company_name", label: "Company Name" },
          { key: "job_title", label: "Job Title" },
          { key: "date_of_placement", label: "Date of Placement" },
          { key: "salary_package", label: "Salary" },
          { key: "placed", label: "Placed" },
          { key: "location", label: "Location" },
        ]}
        data={placement}
        setData={setPlacement}
        endpoint="http://localhost:5000/api/placements"
      />
      
      <button
        onClick={handleLogout}
        style={{
          ...styles.logoutButton,
          backgroundColor: logoutHovered ? "#b5179e" : "#f72585",
          transform: logoutHovered ? "scale(1.05)" : "scale(1)",
          boxShadow: logoutHovered 
            ? "0 7px 14px rgba(247, 37, 133, 0.4)" 
            : "0 4px 6px rgba(247, 37, 133, 0.3)",
        }}
        onMouseEnter={() => setLogoutHovered(true)}
        onMouseLeave={() => setLogoutHovered(false)}
      >
        {logoutHovered ? "👋 Logging Out..." : "🚪 Logout"}
      </button>
    </div>
  );
};

export default Tables;
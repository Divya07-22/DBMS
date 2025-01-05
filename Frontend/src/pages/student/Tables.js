import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormSection = ({ title, fields, data, setData, endpoint }) => {
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
        setData({}); // Clear form data
      } else {
        const errorData = await response.json();
        alert(
          `Failed to submit ${title}: ${errorData.message || "Unknown error"}`
        );
      }
    } catch (error) {
      console.error(`Error submitting ${title}:`, error);
      alert(`An error occurred while submitting ${title}.`);
    }
  };

  const styles = {
    inputField: {
      margin: "10px 0",
      padding: "10px",
      borderRadius: "4px",
      border: "1px solid #ddd",
      width: "100%",
      boxSizing: "border-box",
    },
    button: {
      backgroundColor: "#007bff",
      color: "white",
      padding: "10px 15px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    container: {
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      padding: "20px",
      maxWidth: "600px",
      margin: "20px auto",
      backgroundColor: "#f9f9f9",
    },
    errorMessage: {
      color: "red",
      fontSize: "12px",
    },
  };

  return (
    <div style={styles.container}>
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.key} style={{ marginBottom: "10px" }}>
            <label>{field.label}:</label>
            <input
              type="text"
              value={data[field.key] || ""}
              onChange={(e) =>
                setData({ ...data, [field.key]: e.target.value })
              }
              style={styles.inputField}
              required
            />
          </div>
        ))}
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
        >
          Submit {title}
        </button>
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

  const handleLogout = () => {
    navigate("/student-details");
  };

  const styles = {
    logoutButton: {
      padding: "10px 15px",
      backgroundColor: "#dc3545",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      marginTop: "20px",
      transition: "background-color 0.3s ease",
    },
  };

  return (
    <div>
      <FormSection
        title="Recruiter Details"
        fields={[
          
          { key: "company_name", label: "Company Name" },
          { key: "contact_person", label: "Contact Person" },
          { key: "contact_email", label: "Contact Email" },
          { key: "contact_phone", label: "Contact Phone" },
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
        style={styles.logoutButton}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#bd2130")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#dc3545")}
      >
        Logout
      </button>
    </div>
  );
};

export default Tables;

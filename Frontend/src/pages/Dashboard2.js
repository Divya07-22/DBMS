
import React, { useState } from "react";

function FacultyDashboard() {
  const [selectedOption, setSelectedOption] = useState("");
  const [queryOutput, setQueryOutput] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleDropdownChange = async (e) => {
    const selectedQuery = e.target.value;
    setSelectedOption(selectedQuery);
    setQueryOutput(null);
    setError("");

    if (selectedQuery) {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:5000/api/faculty-dashboard/query/${encodeURIComponent(selectedQuery)}`
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || `Server error: ${response.status}`);
        }

        const data = await response.json();
        
        if (data.success) {
          setQueryOutput(data.output);
        } else {
          throw new Error(data.message || "Error fetching data");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  // Function to sanitize data
  const sanitizeData = (data) => {
    if (!data) return data;
    
    if (Array.isArray(data)) {
      return data.map(item => sanitizeData(item));
    }
    
    if (typeof data === 'object') {
      const cleanData = {};
      for (const key in data) {
        if (key === '__v' || key === '$__' || key === '_doc' || key === '$isNew') {
          continue;
        }
        cleanData[key] = sanitizeData(data[key]);
      }
      return cleanData;
    }
    
    return data;
  };

  // Format cell values for display
  const formatCellValue = (value) => {
    if (value === null || value === undefined) {
      return 'N/A';
    }
    
    if (Array.isArray(value)) {
      if (value.length === 0) return 'Empty';
      
      return (
        <ul style={{ 
          margin: 0, 
          padding: 0, 
          paddingLeft: '20px',
          maxHeight: '150px',
          overflowY: 'auto'
        }}>
          {value.map((item, i) => (
            <li key={i} style={{ marginBottom: '5px' }}>
              {formatCellValue(item)}
            </li>
          ))}
        </ul>
      );
    }
    
    if (typeof value === 'object') {
      return (
        <pre style={{ 
          margin: 0, 
          whiteSpace: 'pre-wrap',
          maxHeight: '150px',
          overflowY: 'auto'
        }}>
          {JSON.stringify(value, null, 2)}
        </pre>
      );
    }
    
    return value.toString();
  };

  // Function to render table
  const renderTable = (data) => {
    const cleanData = sanitizeData(data);
    
    if (!cleanData || cleanData.length === 0) {
      return <p>No data available.</p>;
    }

    const headers = Object.keys(cleanData[0]);

    return (
      <div style={{ overflowX: "auto" }}>
        <table style={{ 
          width: "100%", 
          borderCollapse: "collapse",
          border: "1px solid rgba(0, 255, 255, 0.2)",
          boxShadow: "0 0 20px rgba(0, 255, 255, 0.2)"
        }}>
          <thead>
            <tr style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
              {headers.map((header, idx) => (
                <th 
                  key={idx} 
                  style={{ 
                    padding: "15px", 
                    textAlign: "left", 
                    borderBottom: "1px solid rgba(0, 255, 255, 0.3)",
                    fontWeight: "bold",
                    position: 'sticky',
                    top: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    color: "#00ffff",
                    fontSize: "1.1rem",
                    textShadow: "0 0 10px rgba(0, 255, 255, 0.7)"
                  }}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {cleanData.map((row, rowIdx) => (
              <tr 
                key={rowIdx} 
                style={{ 
                  borderBottom: "1px solid rgba(0, 255, 255, 0.2)",
                  backgroundColor: rowIdx % 2 === 0 ? "rgba(10, 10, 40, 0.5)" : "rgba(20, 20, 60, 0.5)",
                  color: "#e0e0ff",
                  transition: "background-color 0.3s"
                }}
              >
                {headers.map((header, colIdx) => (
                  <td 
                    key={colIdx} 
                    style={{ 
                      padding: "12px", 
                      textAlign: "left",
                      verticalAlign: "top",
                      maxWidth: "300px",
                      overflow: "hidden",
                      borderRight: "1px solid rgba(0, 255, 255, 0.1)"
                    }}
                  >
                    {formatCellValue(row[header])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle, #0f0c29, #302b63, #24243e)",
        fontFamily: "'Orbitron', 'Rajdhani', sans-serif",
        padding: "20px",
        overflow: "hidden",
        position: "relative"
      }}
    >
      {/* Animated grid background */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          linear-gradient(rgba(0, 100, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 100, 255, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px",
        animation: "gridMove 20s linear infinite",
        zIndex: 0
      }}></div>
      
      {/* Glowing particles */}
      <div style={{
        position: "absolute",
        top: "20%",
        left: "15%",
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        background: "rgba(0, 255, 255, 0.8)",
        boxShadow: "0 0 20px 5px rgba(0, 255, 255, 0.8)",
        animation: "pulse 3s infinite alternate",
        zIndex: 0
      }}></div>
      
      <div style={{
        position: "absolute",
        top: "70%",
        right: "20%",
        width: "15px",
        height: "15px",
        borderRadius: "50%",
        background: "rgba(255, 0, 255, 0.8)",
        boxShadow: "0 0 25px 8px rgba(255, 0, 255, 0.8)",
        animation: "pulse 4s infinite alternate-reverse",
        zIndex: 0
      }}></div>
      
      <div style={{
        position: "absolute",
        bottom: "10%",
        left: "30%",
        width: "8px",
        height: "8px",
        borderRadius: "50%",
        background: "rgba(0, 255, 200, 0.8)",
        boxShadow: "0 0 15px 4px rgba(0, 255, 200, 0.8)",
        animation: "pulse 2.5s infinite alternate",
        zIndex: 0
      }}></div>

      <div
        style={{
          width: "90%",
          maxWidth: "1200px",
          backgroundColor: "rgba(10, 15, 30, 0.85)",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 0 30px rgba(0, 200, 255, 0.3)",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
          border: "1px solid rgba(0, 200, 255, 0.3)"
        }}
      >
        <h1 style={{ 
          color: "#00ffff", 
          marginBottom: "30px", 
          fontSize: "3rem",
          fontWeight: "bold",
          textShadow: "0 0 15px rgba(0, 255, 255, 0.7)",
          letterSpacing: "2px",
          animation: "textGlow 2s infinite alternate"
        }}>
          FACULTY DASHBOARD
        </h1>

        {/* Dropdown */}
        <div style={{ marginBottom: "40px", position: "relative" }}>
          <label
            htmlFor="dropdown"
            style={{
              display: "block",
              marginBottom: "20px",
              fontWeight: "bold",
              fontSize: "1.3rem",
              color: "#e0e0ff",
              textShadow: "0 0 10px rgba(224, 224, 255, 0.5)"
            }}
          >
            SELECT DATA QUERY:
          </label>
          <div style={{
            position: "relative",
            border: "2px solid rgba(0, 200, 255, 0.5)",
            borderRadius: "10px",
            boxShadow: "0 0 15px rgba(0, 200, 255, 0.3)",
            overflow: "hidden"
          }}>
            <select
              id="dropdown"
              value={selectedOption}
              onChange={handleDropdownChange}
              disabled={loading}
              style={{
                width: "100%",
                padding: "16px 20px",
                fontSize: "1.1rem",
                border: "none",
                borderRadius: "8px",
                outline: "none",
                backgroundColor: "rgba(0, 10, 30, 0.8)",
                color: "#00ffff",
                cursor: "pointer",
                appearance: "none",
                fontWeight: "bold",
                letterSpacing: "1px",
                textShadow: "0 0 10px rgba(0, 255, 255, 0.5)",
                boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)"
              }}
            >
              <option value="" disabled>
                -- CHOOSE A QUERY --
              </option>
              {[
                "All Students",
                "All Recruiters",
                "Query for Students With Placement",
                "All skills",
                "Get all students with their skill",
                "Count the no of students in each specialization",
                "Get recruiters who have posted internships for specific skills",
                "Get the list of placements by company with details of job roles and salary package",
                "Get the total number of interviews conducted for each student by recruiter",
              ].map((query, index) => (
                <option key={index} value={query} style={{ backgroundColor: "rgba(0, 20, 40, 0.9)" }}>
                  {query}
                </option>
              ))}
            </select>
            <div style={{
              position: "absolute",
              right: "15px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#00ffff",
              pointerEvents: "none",
              fontSize: "1.5rem"
            }}>
              ▼
            </div>
          </div>
        </div>

        {/* Loading and Error Indicators */}
        {loading && (
          <div style={{ 
            margin: "30px 0", 
            color: "#00ffff",
            fontSize: "1.3rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <div style={{
              width: "80px",
              height: "80px",
              border: "8px solid rgba(0, 255, 255, 0.3)",
              borderTop: "8px solid #00ffff",
              borderRadius: "50%",
              animation: "spin 1.5s linear infinite",
              marginBottom: "20px",
              boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)"
            }}></div>
            <span style={{ 
              marginLeft: "10px",
              textShadow: "0 0 10px rgba(0, 255, 255, 0.7)"
            }}>
              ACCESSING DATABASE...
            </span>
          </div>
        )}
        
        {error && (
          <div style={{ 
            padding: "20px", 
            backgroundColor: "rgba(100, 0, 0, 0.5)", 
            color: "#ff5555",
            borderRadius: "10px",
            margin: "30px 0",
            border: "1px solid rgba(255, 0, 0, 0.5)",
            boxShadow: "0 0 20px rgba(255, 0, 0, 0.3)",
            textShadow: "0 0 10px rgba(255, 85, 85, 0.5)",
            animation: "pulseError 1.5s infinite"
          }}>
            <strong>SYSTEM ERROR:</strong> {error}
          </div>
        )}

        {/* Output Box */}
        <div
          style={{
            padding: "25px",
            border: "1px solid rgba(0, 200, 255, 0.3)",
            borderRadius: "15px",
            backgroundColor: "rgba(0, 10, 30, 0.7)",
            boxShadow: "inset 0 0 20px rgba(0, 100, 255, 0.3), 0 0 30px rgba(0, 100, 255, 0.2)",
            minHeight: "300px",
            maxHeight: "600px",
            overflowY: "auto",
            color: "#e0e0ff",
            textAlign: "left"
          }}
        >
          {!loading && !error && queryOutput ? (
            Array.isArray(queryOutput) ? (
              renderTable(queryOutput)
            ) : (
              <pre style={{ 
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
                color: "#00ffcc",
                textShadow: "0 0 5px rgba(0, 255, 204, 0.5)"
              }}>
                {JSON.stringify(sanitizeData(queryOutput), null, 2)}
              </pre>
            )
          ) : !loading && !error && !queryOutput ? (
            <div style={{ 
              fontSize: "1.2rem", 
              color: "rgba(224, 224, 255, 0.7)", 
              textAlign: "center",
              padding: "40px 20px",
              textShadow: "0 0 10px rgba(224, 224, 255, 0.3)"
            }}>
              <div style={{ marginBottom: "20px", fontSize: "3rem" }}>🔍</div>
              SELECT A QUERY TO VIEW DATABASE RESULTS
            </div>
          ) : null}
        </div>
      </div>
      
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          @keyframes gridMove {
            0% { background-position: 0 0; }
            100% { background-position: 50px 50px; }
          }
          
          @keyframes pulse {
            0% { opacity: 0.3; transform: scale(1); }
            100% { opacity: 1; transform: scale(1.2); }
          }
          
          @keyframes textGlow {
            0% { text-shadow: 0 0 15px rgba(0, 255, 255, 0.7); }
            100% { text-shadow: 0 0 25px rgba(0, 255, 255, 1), 0 0 35px rgba(0, 150, 255, 0.8); }
          }
          
          @keyframes pulseError {
            0% { box-shadow: 0 0 20px rgba(255, 0, 0, 0.3); }
            50% { box-shadow: 0 0 30px rgba(255, 0, 0, 0.5); }
            100% { box-shadow: 0 0 20px rgba(255, 0, 0, 0.3); }
          }
          
          select:hover {
            background-color: rgba(0, 30, 60, 0.9) !important;
          }
          
          select:focus {
            box-shadow: inset 0 0 15px rgba(0, 200, 255, 0.5) !important;
          }
          
          pre {
            background-color: rgba(0, 20, 40, 0.5);
            padding: 20px;
            border-radius: 10px;
            border-left: 3px solid #00ffcc;
          }
          
          ::-webkit-scrollbar {
            width: 12px;
          }
          
          ::-webkit-scrollbar-track {
            background: rgba(0, 20, 40, 0.3);
            border-radius: 10px;
          }
          
          ::-webkit-scrollbar-thumb {
            background: rgba(0, 200, 255, 0.5);
            border-radius: 10px;
            border: 2px solid rgba(0, 100, 255, 0.3);
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: rgba(0, 255, 255, 0.7);
          }
          
          @font-face {
            font-family: 'Orbitron';
            font-style: normal;
            font-weight: 400;
            src: url(https://fonts.gstatic.com/s/orbitron/v25/yMJRMIlzdpvBhQQL_Qq7dys.woff2) format('woff2');
          }
          
          @font-face {
            font-family: 'Rajdhani';
            font-style: normal;
            font-weight: 400;
            src: url(https://fonts.gstatic.com/s/rajdhani/v15/LDIxapCSOBg7S-QT7p4HM-M.woff2) format('woff2');
          }
        `}
      </style>
    </div>
  );
}

export default FacultyDashboard;
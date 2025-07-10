

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import LoginForm from "./pages/LoginForm";

import FacultySignUp from "./pages/FacultySignUp";

 // Added import for StudentDetails
 import StudentDetails from "./pages/student/StudentDetails";
import DetailsPage from "./pages/student/Tables";  // Added import for DetailsPage
import Dashboard2 from "./pages/Dashboard2";
import StdDetails from "./pages/faculty/StdDetails";
// import StdDetailsView from "./pages/faculty/StdDetailsView";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/student-details" element={<StudentDetails />} />
                <Route path="/faculty/signup" element={<FacultySignUp />} /> 
                {/* <Route path="/coordinator/student-details" element={<StudentDetails />} />  Added route for StudentDetails */}
                <Route 
                    path="/student/details-page" 
                    element={<DetailsPage 
                        internship={{/* Example data for internship */}} 
                        interview={{/* Example data for interview */}} 
                        placement={{/* Example data for placement */}} 
                        recruiter={{/* Example data for recruiter */}} 
                        skill={{/* Example data for skill */}} 
                    />} 
                /> {/* Added route for DetailsPage */}
                <Route path="/faculty/dashboard" element={<Dashboard2 />} />
                 <Route path="/faculty/StdDetails" element={<StdDetails />} />
                 {/* <Route path="/faculty/StdDetailsView" element={<StdDetailsView />} /> */}
                 
            </Routes>
        </Router>
    );
}

export default App;

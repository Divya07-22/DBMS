import mongoose from 'mongoose';
import Student from './Student.js';
import Recruiter from './Recruiter.js';
import Skill from './Skill.js';
import Placement from './Placement.js';
import Interview from './Interview.js';
//import Internship from './Internship.js';

export const executeQuery = async (selectedQuery) => {
  try {
    switch (selectedQuery) {
      case "All Students":
        return await Student.find().populate('user', 'email').lean();
      
      case "All Recruiters":
        return await Recruiter.find().populate('user', 'email').lean();
      
      case "Query for Students With Placement":
        return await Student.find({ placement_status: 'placed' })
          .populate('user', 'email')
          .populate('placements').lean();
      
      case "All skills":
        return await Skill.find().lean();
      
      case "Get all students with their skill":
        return await Student.find().populate('skills').lean();
      
      case "Count the no of students in each specialization":
        return await Student.aggregate([
          { $group: { _id: "$specialization", count: { $sum: 1 } } }
        ]);
      
      case "Get recruiters who have posted internships for specific skills":
        return await Recruiter.find({
          'internships.skills': { $exists: true, $ne: [] }
        }).populate('internships').lean();
      
      case "Get the list of placements by company with details of job roles and salary package":
        return await Placement.find()
          .populate('recruiter', 'company_name')
          .populate('student', 'name').lean();
      
      case "Get the total number of interviews conducted for each student by recruiter":
        return await Interview.aggregate([
          { 
            $group: { 
              _id: "$student", 
              totalInterviews: { $sum: 1 },
              recruiters: { $addToSet: "$recruiter" }
            } 
          },
          {
            $lookup: {
              from: "students",
              localField: "_id",
              foreignField: "_id",
              as: "student"
            }
          },
          { $unwind: "$student" },
          {
            $project: {
              "student.name": 1,
              totalInterviews: 1,
              numberOfRecruiters: { $size: "$recruiters" }
            }
          }
        ]);
      
      default:
        return []; // Return empty array instead of throwing error
    }
  } catch (error) {
    console.error("Query execution error:", error);
    throw new Error(`Failed to execute query: ${error.message}`);
  }
};
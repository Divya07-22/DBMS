// import { executeQuery } from '../models/facultydashModel.js';

// export const getFacultyQueryResult = async (req, res) => {
//   const { selectedQuery } = req.params;
//   console.log("Controller: Received query -", selectedQuery);
  
//   try {
//     const result = await executeQuery(selectedQuery);
    
//     // Convert MongoDB ObjectId to string for frontend
//     const sanitizedResult = result.map(item => {
//       const sanitized = {...item};
//       if (sanitized._id) sanitized._id = sanitized._id.toString();
//       if (sanitized.std_id) sanitized.std_id = sanitized.std_id.toString();
//       if (sanitized.recruit_id) sanitized.recruit_id = sanitized.recruit_id.toString();
//       return sanitized;
//     });
    
//     res.status(200).json({ success: true, output: sanitizedResult });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ 
//       success: false, 
//       message: error.message || 'Server error' 
//     });
//   }
// };
// import { executeQuery } from '../models/facultydashModel.js';
// import { sanitizeMongooseObject } from '../utils/sanitize.js';
// export const getFacultyQueryResult = async (req, res) => {
//   const { selectedQuery } = req.params;
//   const sanitizedResult = result.map(item => sanitizeMongooseObject(item));
//   try {
//     const result = await executeQuery(selectedQuery);
    
//     // Sanitize the output - remove internal Mongoose properties
//     const sanitizedResult = result.map(item => {
//       // Convert ObjectId to string
//       const sanitized = {...item};
//       if (sanitized._id) sanitized._id = sanitized._id.toString();
      
//       // Remove Mongoose internal properties
//       delete sanitized.__v;
//       delete sanitized.$__;
//       delete sanitized.$isNew;
//       delete sanitized._doc;
//       delete sanitized.$errors;
//       delete sanitized.$op;
//       delete sanitized.$where;
      
//       return sanitized;
//     });
    
//     res.status(200).json({ success: true, output: sanitizedResult });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ 
//       success: false, 
//       message: error.message || 'Server error' 
//     });
//   }
// };
import { executeQuery } from '../models/facultydashModel.js';

export const getFacultyQueryResult = async (req, res) => {
  const { selectedQuery } = req.params;
  console.log("Controller: Received query -", selectedQuery);
  
  try {
    const result = await executeQuery(selectedQuery);
    
    // Handle empty results
    if (!result) {
      return res.status(200).json({ 
        success: true, 
        output: [],
        message: 'No data found for this query' 
      });
    }
    
    // Handle different result types
    let dataArray;
    if (Array.isArray(result)) {
      dataArray = result;
    } else if (typeof result === 'object') {
      dataArray = [result];
    } else {
      // Handle other types (strings, numbers, etc)
      return res.status(200).json({
        success: true,
        output: result
      });
    }

    // Sanitize the output
    const sanitizedResult = dataArray.map(item => {
      const sanitized = {...item};
      
      // Convert ObjectIds to strings
      if (sanitized._id) sanitized._id = sanitized._id.toString();
      if (sanitized.std_id) sanitized.std_id = sanitized.std_id.toString();
      if (sanitized.recruit_id) sanitized.recruit_id = sanitized.recruit_id.toString();
      
      // Remove Mongoose internal properties
      delete sanitized.__v;
      delete sanitized.$__;
      delete sanitized.$isNew;
      delete sanitized._doc;
      
      return sanitized;
    });
    
    res.status(200).json({ success: true, output: sanitizedResult });
  } catch (error) {
    console.error('Controller Error:', error);
    res.status(500).json({ 
      success: false, 
      message: error.message || 'Server error' 
    });
  }
};
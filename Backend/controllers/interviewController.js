import Interview from '../models/Interview.js';

// Add interview
export const addInterview = async (req, res) => {
  // Map frontend field names to backend schema
  const {
    std_id,             // Frontend: std_id
    recruit_id,         // Frontend: recruit_id
    interview_result,   // Frontend: interview_result
    interview_date,     // Frontend: interview_date
    interview_mode,     // Frontend: interview_mode
    feedback,           // Frontend: feedback
    interviewer_name    // Frontend: interviewer_name
  } = req.body;

  try {
    const interview = new Interview({
      student: std_id,           // Store as string
      recruiter: recruit_id,     // Store as string
      interviewResult: interview_result,
      interviewDate: new Date(interview_date),
      interviewMode: interview_mode,
      feedback: feedback,
      interviewerName: interviewer_name
    });

    await interview.save();
    console.log('Interview added successfully:', interview);
    res.status(201).json(interview);
  } catch (err) {
    console.error('Error adding interview:', err);
    
    if (err.name === 'ValidationError') {
      return res.status(400).json({ error: err.message });
    }
    
    res.status(500).json({ error: 'Server error' });
  }
};

// Get interviews by student
export const getInterviewsByStudent = async (req, res) => {
  try {
    // Changed to use string ID directly
    const interviews = await Interview.find({ student: req.params.studentId });
    res.json(interviews);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
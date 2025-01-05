

const db = require('../config/db');

const executeQuery = (selectedQuery) => {
  console.log(selectedQuery);
  const queries = {
    "All Students": `SELECT * FROM students;`,
    "All Recruiters": `SELECT * FROM recruiters;`,
    "Query for Students With Placement": `
      SELECT 
        s.std_id,
        s.studentname,
        s.sem,
        s.specialization
      FROM 
        students s
      LEFT JOIN 
        placements p ON s.std_id = p.std_id
      WHERE 
        p.placed = 'yes';`,
    "All skills": `SELECT * FROM skills;`,
    "Get all students with their skill": `
      SELECT 
        s.studentname,
        s.usn,
        s.sem,
        sk.skill_name,
        sk.skill_category
      FROM 
        students s
      JOIN 
        skills sk ON s.std_id = sk.std_id;`,
        "Count the no of students in each specialization":`SELECT 
    specialization,
    COUNT(std_id) AS student_count
FROM 
    students
GROUP BY 
    specialization;
`,
"Get recruiters who have posted internships for specific skills":`SELECT 
    r.company_name,
    r.contact_person,
    r.contact_email,
    i.title AS internship_title
FROM 
    recruiters r
JOIN 
    internships i ON r.recruit_id = i.recruit_id
WHERE 
    i.skills_required LIKE '%Java%' 
    OR i.skills_required LIKE '%Python%';
`,
"Get the list of placements by company with details of job roles and salary package":`SELECT 
    p.company_name,
    p.job_title,
    p.salary_package,
    COUNT(p.plac_id) AS number_of_placements
FROM 
    placements p
GROUP BY 
    p.company_name, p.job_title, p.salary_package;
`,
" Get the total number of interviews conducted for each student by recruiter":`SELECT 
    s.studentname,
    r.company_name,
    COUNT(iv.interview_id) AS total_interviews
FROM 
    students s
JOIN 
    interviews iv ON s.std_id = iv.std_id
JOIN 
    recruiters r ON iv.recruit_id = r.recruit_id
GROUP BY 
    s.std_id, r.recruit_id
ORDER BY 
    total_interviews DESC;
`
  };

  const query = queries[selectedQuery];

  return new Promise((resolve, reject) => {
    if (!query) {
      console.error(`Query not found for: ${selectedQuery}`);
      return reject(`Query not found for: ${selectedQuery}`);
    }

    console.log("Executing query:", query);

    db.query(query, (err, result) => {
      if (err) {
        console.error(`Error executing query: ${selectedQuery}`, err);
        return reject({
          message: `Error executing query: ${selectedQuery}`,
          error: err
        });
      }
      resolve(result);
    });
  });
};

module.exports = { executeQuery };

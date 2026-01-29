// Assignment 2: Exam Result Summary

const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

// 1. Calculate total marks
const totalMarks = Object.values(marks).reduce((sum, mark) => sum + mark, 0);

// 2. Calculate average marks
const averageMarks = totalMarks / Object.keys(marks).length;

// 3. Find the highest scoring subject
let highestSubject = "";
let highestMarks = 0;

for (let subject in marks) {
  if (marks[subject] > highestMarks) {
    highestMarks = marks[subject];
    highestSubject = subject;
  }
}

// 4. Add a new subject
marks.computer = 90;

// Output results
console.log("Total Marks:", totalMarks);
console.log("Average Marks:", averageMarks);
console.log("Highest Scoring Subject:", highestSubject, "-", highestMarks);
console.log("Updated Marks:", marks);
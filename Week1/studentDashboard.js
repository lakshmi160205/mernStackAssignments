// Student Performance Dashboard
 const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

// 1. Students who passed
const passedStudents = students.filter(s => s.marks >= 40);

// 2. Add grade field
const gradedStudents = students.map(s => ({
  ...s,
  grade:
    s.marks >= 90 ? "A" :
    s.marks >= 75 ? "B" :
    s.marks >= 60 ? "C" : "D"
}));

// 3. Average marks
const averageMarks =
  students.reduce((sum, s) => sum + s.marks, 0) / students.length;

// 4. Student who scored 92
const scored92 = students.find(s => s.marks === 92);

// 5. Index of Kiran
const kiranIndex = students.findIndex(s => s.name === "Kiran");

console.log(passedStudents, gradedStudents, averageMarks, scored92, kiranIndex);
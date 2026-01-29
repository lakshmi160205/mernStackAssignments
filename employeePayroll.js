// Employee Payroll Processor
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

// 1. IT department employees
const itEmployees = employees.filter(e => e.department === "IT");

// 2. Add netSalary with 10% bonus
const updatedEmployees = employees.map(e => ({
  ...e,
  netSalary: e.salary + e.salary * 0.1
}));

// 3. Total salary payout
const totalSalary = employees.reduce((sum, e) => sum + e.salary, 0);

// 4. Employee with salary 30000
const salary30000 = employees.find(e => e.salary === 30000);

// 5. Index of Neha
const nehaIndex = employees.findIndex(e => e.name === "Neha");

console.log(itEmployees, updatedEmployees, totalSalary, salary30000, nehaIndex);
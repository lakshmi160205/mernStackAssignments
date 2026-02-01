//  Date Comparison & Validation (Beginner → Intermediate)
let enrollmentDeadline = new Date("2026-01-20");

let today=new Date(Date.now());
console.log(today);
// Check if:
// Today is before deadline → "Enrollment Open"
if(today<enrollmentDeadline){
    console.log("Enrollment open");
}
// Today is after deadline → "Enrollment Open"
if(today>enrollmentDeadline){
    console.log("Enrollment Closed");
}
let input="2026-02-30";
function isValidDate(dateString) {
  const date = new Date(dateString);
  // Check if date is Invalid
  const [year, month, day] = dateString.split("-");
   return (
    date.getFullYear() === parseInt(year) &&
    date.getMonth() + 1 === parseInt(month) &&
    date.getDate() === parseInt(day)
  );
}

// Validate input date
if (isValidDate(input)) {
  console.log("Valid Date");
} else {
  console.log("Invalid Date");
}



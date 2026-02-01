// MODULE-2 : COURSE CATALOG ENGINE
const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];

// Get published courses
let publishedCourses = courses.filter(course => course.published === true);
console.log(publishedCourses);

// Sort courses by price (high → low)
let sortedCourses = [...courses].sort((a, b) => b.price - a.price);
console.log(sortedCourses);

// Extract { title, price } only
let courseDetails = courses.map(course => ({
  title: course.title,
  price: course.price
}));
console.log(courseDetails);

// Calculate total value of published courses
let totalValue = publishedCourses.reduce(
  (sum, course) => sum + course.price,
  0
);
console.log(totalValue);

// Add a new course immutably
let newCourse = {
  id: 104,
  title: "TypeScript",
  price: 1599,
  published: true
};

let updatedCourses = [...courses, newCourse];
console.log(updatedCourses);

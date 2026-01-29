const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];

const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];

// Merge cart with courses to get full course info
let mergedCart = cart.map(item => {
  let course = courses.find(c => c.id === item.courseId);
  return { ...item, ...course };
});
console.log(mergedCart);

// Calculate total cart amount
let totalAmount = mergedCart.reduce(
  (sum, item) => sum + item.price * item.qty,
  0
);
console.log(totalAmount);

// Increase quantity of a course (immutably)
let increaseQtyId = 101;
let updatedCart = cart.map(item =>
  item.courseId === increaseQtyId
    ? { ...item, qty: item.qty + 1 }
    : item
);
console.log(updatedCart);

// Remove a course from cart
let removeId = 103;
let removedCart = cart.filter(item => item.courseId !== removeId);
console.log(removedCart);

// Check if all cart items are paid courses
let allPaid = mergedCart.every(item => item.price > 0);
console.log(allPaid);

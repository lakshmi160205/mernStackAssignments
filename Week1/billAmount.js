let totalAmount = 0;

// 1. Add ₹500 
totalAmount += 500;

// 2. Add ₹1200
totalAmount += 1200;

// 3.₹200 discount
totalAmount -= 200;

// 4.18% GST
let gst = totalAmount * 0.18;
totalAmount += gst;

// 5.final bill amount
console.log("Final Bill Amount: ₹" + totalAmount);
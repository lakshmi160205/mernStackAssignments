// Hands-On 2: Deep Copy (Isolation & Safety Use Case)
 const order = {
    orderId: "ORD1001",
    customer: {
    name: "Anita",
    address: {
    city: "Hyderabad",
    pincode: 500085
    }
    },
    items: [
    { product: "Laptop", price: 70000 }
    ]
    };

//  Create a deep copy of order
const copiedOrder=structuredClone(order);
// Modify in copied object
//customer.address.city
copiedOrder.customer.address.city="Secunderabad";
//  items[0].price
copiedOrder.items[0].price=50000;
//Verify original object remains unchanged
console.log(order); 
console.log(copiedOrder);
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

let res1=cart.filter((cartObj)=>cartObj.inStock===true)
console.log(res1)

let res2=cart.map(element=>({name:element.name,totalPrice:element.price*element.quantity}))
console.log(res2)

let res3=cart.reduce((acc,ele)=>acc+ele.price*ele.quantity,0)
console.log(res3)

let res4=cart.find((element)=>element.name==='Mouse')
console.log(res4)

let res5=cart.findIndex((element)=>element.name==="Keyboard")
console.log(res5)



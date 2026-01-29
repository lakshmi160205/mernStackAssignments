const temperatures = [32, 35, 28, 40, 38, 30, 42]

let res1=temperatures.filter((element)=>element>35)
console.log(res1)

let res2=temperatures.map((element)=>element=element*(9/5)+32)
console.log(res2)

let res3=temperatures.reduce((acc,ele)=>acc+=ele)
console.log(res3/temperatures.length)

let res4=temperatures.find((element)=>element>40)
console.log(res4)

let res5=temperatures.findIndex((element)=>element===28)
console.log(res5)

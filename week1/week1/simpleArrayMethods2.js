const courses = ["javascript", "react", "node", "mongodb", "express"]

let res1=courses.filter((element)=>element.length>5)
console.log(res1)

let res2=courses.map((element)=>element=element.toUpperCase())
console.log(res2)

let res3=courses.reduce((acc,ele)=>{ return acc?acc+' | '+ele.toUpperCase():ele.toUpperCase()},"")
console.log(res3)

let res4=courses.find((element)=>element==="react")
console.log(res4)

let res5=courses.findIndex((element)=>element==='node')
console.log(res5)
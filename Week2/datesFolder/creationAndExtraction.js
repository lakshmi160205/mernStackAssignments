// Assignment 1: Date Creation & Extraction (Beginner)
// Create a Date object for current date & time
let date=new Date(Date.now());
console.log(date);
// display Year
console.log(date.getFullYear());
// display month
console.log(date.getMonth());
// display Date
console.log(date.getDate());
// display DaY
console.log(date.getDay());
// display Hours,Minutes,Seconds
console.log("Hours:",date.getHours(),"Minutes:",date.getMinutes(),"Seconds:",date.getSeconds());
let date1=date.getDate();
let month=date.getMonth();
let year=date.getFullYear();
let hours=date.getHours();
let min=date.getMinutes();
let sec=date.getSeconds();


let formattedDate=date1+"-"+month+"-"+year+" "+hours+":"+min+":"+sec;
// console.log(date.getDate(),"-",date.getMonth(),"-",date.getFullYear()," ",date.getHours(),":",date.getMinutes(),":",date.getSeconds());
console.log(formattedDate);
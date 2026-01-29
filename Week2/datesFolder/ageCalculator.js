// Assignment 3: Age Calculator (Intermediate)
let dob = "2005-01-16";

//  Calculate exact age in years
let [year,month,date]=dob.split("-");

let today=new Date();
let todayYear=today.getFullYear();
let todayMonth=today.getMonth();
let todayDate=today.getDate();
let yearAge=todayYear-parseInt(year);
let yearMonth=todayMonth-parseInt(month);
let yearDate=todayDate-parseInt(date);
if(yearMonth<0){
    yearAge--;
    yearMonth=yearMonth+12;
}
if(yearDate<0){
    yearMonth--;
    yearDate=yearDate+31;
}
console.log(yearAge,yearMonth,yearDate);

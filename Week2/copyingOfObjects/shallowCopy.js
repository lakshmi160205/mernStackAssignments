// Shallow Copy (Controlled Mutation Use Case)
 const user = 
 {
    id: 101,
    name: "Ravi",
    preferences: {
    theme: "dark",
    language: "en"
    }
    };

//Create a shallow copy of user 
const userCopy={...user};
// Change
//name in the copied object 
userCopy.name="kiran";
//preferences.theme in the copied object 
userCopy.preferences.theme="light";

// .Log both original and copied objects
console.log(user);
console.log(userCopy);

// Observe what changes and what doesn’t

//name has changed only in the copied object
// but the theme is changed in both the objects






    

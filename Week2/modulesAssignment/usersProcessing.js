// MODULE-1 :USER PROCESSING ENGINE
const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];
// Get only active users
let activeUsers=users.filter(ele=>ele.active===true);
console.log(activeUsers);
//  Extract names of active users
for(let i of activeUsers){
    console.log(i.name);
}

let admins=users.filter(ele=>(ele.role==="admin"));
console.log(admins);

// Find user by id
let id=1;
let findUserById=users.filter(ele=>ele.id===id);
console.log(findUserById);

// Deactivate a user immutably
const deactivateUser=users.map(user=>user.id===id?{...user,active:false}:user);
console.log(deactivateUser);
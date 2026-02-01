import exp from 'express';
// create mini-express(Seperate Route) app
export const userApp=exp.Router();
let users=[];
// http req types
    // get req handling route (read)
userApp.get('/users',(req,res)=>{
    // console.log(users);
    res.status(200).json({"message":"All users", "payload":users});
})
    //create
userApp.post('/users',(req,res)=>{
      let newUser=req.body;
    // res.json(users);
    users.push(newUser); 
    res.status(201).json({"message":"User added successfully","payload":newUser});
    // console.log(users);  
})
    // update
userApp.put('/users',(req,res)=>{
    //  get modified user from req
    let modifiedUser=req.body;
    // find the user with id exists in users array
    let userIndex=users.findIndex(user=>user.id===modifiedUser.id);
    // if user found then modify the user details
    // send res as "User modified successfully"
    let deletedUser=users[userIndex];
    if(userIndex!==-1){
        users[userIndex]=modifiedUser;
        res.status(200).json({"message":"User modified successfully","payload":modifiedUser});
    }
    // if user not found send "user not found" message
    else{
        res.json({"message":"User not found"});
    }


})

// read user by id
userApp.get('/users/:id',(req,res)=>{
    let userId=parseInt(req.params.id);
    let user=users.find(user=>user.id===userId);
    if(!user){
        res.status(404).json({"message":"User not found"});
    }
    else{
        res.status(200).json({"message":"User found","payload":user});
    }
});
    // delete
userApp.delete('/users/:id',(req,res)=>{
    let userId=parseInt(req.params.id);
    let userIndex=users.findIndex(user=>user.id===userId);
    if(userIndex===-1){
        res.status(404).json({"message":"User not found"});
    }
    else{
        let userDeleted=users.splice(userIndex,1);
        res.status(200).json({"message":"User deleted successfully","payload":userDeleted});
    }
});

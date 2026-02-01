import exp from 'express';
import { UserModel } from '../models/UserModel.js';
export const userAPP = exp.Router();

// USER API ROUTES

// Create user 
userAPP.post('/users', async(req, res) => {
    let newUser = req.body;
    let newUserDoc= new UserModel(newUser);
    await newUserDoc.save();
    res.status(201).json({"message":"New user created","payload":newUserDoc});
    console.log(newUserDoc);
});

// read user
userAPP.get('/users', async(req, res) => {
    // read usrs from db
    let usersList = await UserModel.find()
    res.status(200).json({"message":"users list", "payload": usersList});
});

//Read user by ID
userAPP.get('/users/:id', async(req, res) => {
    // get object id from url params
    let objId=req.params.id;
    // find user by id from db
    let user = await UserModel.findById(objId)
    // send response
    res.status(200).json({"message":"user details", "payload": user});
});

// update User
userAPP.put('/users/:id', async(req, res) => {
    // get object id from url params
    let objId=req.params.id;
    // get modified user details from req body
    let modifiedUser=req.body;
    // make update
    let updatedUser= await UserModel.findByIdAndUpdate(objId, 
        {$set:{...modifiedUser}}, 
        {new:true,runValidators:true});
    // send response
    res.status(200).json({"message":"user updated", "payload": updatedUser});
});    
// Delete User
userAPP.delete("/users/:id", async(req, res) => {
    // get object id from url params
    let objId=req.params.id;
    // delete user from db
    let deletedUser= await UserModel.findByIdAndDelete(objId)
    res.status(200).json({"message":"user deleted", "payload": deletedUser});
});
import {Schema, model} from 'mongoose';

// Define User schema
const userSchema = new Schema({
    username:{
        type:String,
        required:[true, "Username is required"],
        minLength:[4, "Minimum length is 4 characters"],
        maxLength:[6, "Maximum length is 6 characters"]
    },
    password:{
        type:String,
        required:[true, "Password is required"]
    },
    age:{
        type:Number,
        required:[true, "Age is required"],
        min:[18, "age should be above 18"],
        max:[25, "age should be less than 25"]
    }
},
    {strict:"throw",timestamps:true}
);

// create user model with that schema
export const UserModel = model('user', userSchema);
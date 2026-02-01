import exp from 'express';
import {userAPP} from './APIs/UserAPI.js';
import {connect} from 'mongoose'
import { productAPP } from './APIs/productAPI.js';

// create express app
const app = exp();

// Assign a port number
const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use(exp.json())
app.use('/products-api',productAPP);
app.use('/user-api', userAPP);

// connect to database server
async function connectDB() {
    try{
    await connect('mongodb://localhost:27017/userDB');
    console.log("DB connected successfully")
    }
    catch(err){
        console.log("Error in DB connection", err)
    }

}
connectDB();

// error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ "message":"Internal server error", "error": err.message });
});


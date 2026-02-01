import { Schema,model } from "mongoose";
export const productSchema = new Schema({
    pid:{
        type:Number,
        required:[true, "Product ID is required"]
    },
    productName:{
        type:String,
        required:[true, "Product name is required"]
    },
    price:{
        type:Number,
        required:[true, "Price is required"]
    }
});

export const ProductModel = model("Product", productSchema);
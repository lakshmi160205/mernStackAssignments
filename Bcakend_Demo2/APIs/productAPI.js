import exp from 'express';
import {ProductModel} from '../models/productModel.js';
export const productAPP = exp.Router();

// PRODUCT API ROUTES
// POST Products
productAPP.post('/products',async(req,res)=>{
    let newProduct=req.body;
    let newProductDoc=new ProductModel(newProduct);
    await newProductDoc.save();
    res.status(201).json({"message":"New product created","payload":newProductDoc});
    console.log(newProductDoc);
})

// GET Products
productAPP.get('/products',async(req,res)=>{
    let productsList=await ProductModel.find();
    res.status(200).json({"message":"Products list","payload":productsList})
});

// Get Product by ID
productAPP.get('/products/:id',async(req,res)=>{
    let objId=req.params.id;
    let product=await ProductModel.findById(objId);
    res.status(200).json({"message":"Product details","payload":product});
});

// PUT Product by id
productAPP.put('/products/:id',async(req,res)=>{
    let productId=req.params.id;
    let modifyProduct=req.body;
    let updatedProduct=await ProductModel.findByIdAndUpdate(productId,modifyProduct,{new:true});
    res.status(200).json({"message":"product modified",payload:updatedProduct})
});

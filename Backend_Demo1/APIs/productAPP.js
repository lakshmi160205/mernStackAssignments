
import exp from 'express';
export const productApp=exp.Router();
// Products API 
let products=[];
productApp.get('/products',(req,res)=>{
    res.status(200).json({"message":"All products","payload":products});
});

productApp.get('/products-id/:id',(req,res)=>{
    let productId=parseInt(req.params.id);
    let product=products.find(prod=>prod.id===productId);
    if(!product){
        res.status(404).json({"message":"Product not found"});
    }else{
        res.status(200).json({"message":"Product found","payload":product});
    }
});
productApp.get('/products-brand/:brand',(req,res)=>{
    let brand=req.params.brand;
    // console.log(brand);
    let filteredProducts=products.filter(prod=>prod.brand===brand);
    res.status(200).json({"message":"Filtered products by brand","payload":filteredProducts});
});

productApp.post('/products',(req,res)=>{
    let newProduct=req.body;
    products.push(newProduct);
    res.status(201).json({"message":"Product added successfully","payload":newProduct});
});

productApp.put('/products',(req,res)=>{
    let modifiedProduct=req.body;
    let productIndex=products.findIndex(prod=>prod.id===modifiedProduct.id);    
    if(productIndex!==-1){
        products[productIndex]=modifiedProduct;
        res.status(200).json({"message":"Product modified successfully","payload":modifiedProduct});
    }else{
        res.status(404).json({"message":"Product not found"});
    }   
});

productApp.delete('/products/:id',(req,res)=>{
    let productId=parseInt(req.params.id);
    let productIndex=products.findIndex(prod=>prod.id===productId); 
    if(productIndex!==-1){
        let deletedProduct=products.splice(productIndex,1);
        res.status(200).json({"message":"Product deleted successfully","payload":deletedProduct[0]});
    }else{
        res.status(404).json({"message":"Product not found"});
    }
});

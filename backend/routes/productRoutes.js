import express from "express";
import Product from "../models/productModel.js";
import expressAsyncHandler from 'express-async-handler'
const router = express.Router();

router.get("/", expressAsyncHandler( async (req, res) => {
  const products = await Product.find({});
  res.json(products);
}))

router.get("/:id", expressAsyncHandler( async (req, res) => {
    console.log("REACHED")
    const product = await Product.findById( req.params.id);
  
  if (product){
        res.json(product);
  }
  
  res.status(404).json({message: "Product Not Found"})
}))

export default router;

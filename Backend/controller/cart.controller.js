const { CartModel } = require("../model/cart.model");


const addProd = async(req,res)=>{
      let {name}  = req.body;
      let prod = await CartModel.create({name:name})
     return res.send(
        {
            message:"Added",
            data:prod
    }
     )
  }
  const getProd = async(req,res)=>{
    let cart_products  = await CartModel.find()
    return res.send(cart_products)
   }

   module.exports = {
    getProd,
    addProd
   }
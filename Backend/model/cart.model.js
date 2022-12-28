const mongoose = require('mongoose')

const CartSchema = mongoose.Schema({
    name:{type:String,required:true},
    image_1:{type:String,required:true},
    image_2:{type:String,required:true},
    image_3:{type:String,required:true},
    image_4:{type:String,required:true},
    image_5:{type:String,required:true},
    price:{type:Number,required:true},
    sold:{type:Number,required:true},
    manufacture_date:{type:String,required:true},
    color:{type:String,required:true},
    size:{type:String,required:true},
    stock:{type:String,required:true},
    reviews:[],
})

const CartModel = mongoose.model('Carts',CartSchema);
module.exports = {CartModel}
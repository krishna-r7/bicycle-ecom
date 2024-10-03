const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({ 
    name: String,
    address: String,
    gender: String,
    dob: String,
    contact: Number,
    district: String,
    pincode: Number,
    email: String,
    password: String,
    loginid:String,
   
  },
   {
    collection:'reg_123' 
  });

  const loginSchema = new mongoose.Schema({
    email:String,
    password:String,
    usertype:Number,
    status:Number
},
{
 collection:'login' 
});


const productSchema = new mongoose.Schema({ 
  productname: String,
  productprice: Number,
  photo: String,
  productcategory: String,
  loginid:String,
  currentdate: Date,
},
 {
  collection:'product_123' 
});

const cartSchema = new mongoose.Schema({
  productid: String,
  quantity: Number,
  size: String,
  loginid: String,
},{
  collection:'cart_123'
});

const buySchema = new mongoose.Schema({
  productid: String,
  quantity: Number,
  size: String,
  loginid: String,
},{
  collection:'buy_123'
});

const bankSchema = new mongoose.Schema({
  contact: Number,
  cardno: Number,
  cvv: Number,
  loginid:String,
},{
  collection:'bank'
})


  const DataModel = mongoose.model('User', userSchema,);
  const LoginModel = mongoose.model('login', loginSchema);
  const ProductModel = mongoose.model('product', productSchema);
  const CartModel = mongoose.model('cart',cartSchema);
  const BuyModel = mongoose.model('buy',buySchema);
  const BankModel = mongoose.model('bank',bankSchema);

  module.exports = {DataModel,LoginModel,ProductModel,CartModel,BuyModel,BankModel}
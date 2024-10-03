const express = require('express');
const router = express.Router();
const cors = require('cors');
const bcrypt = require('bcrypt');
router.use(cors());
router.use(express.json());
const { DataModel, LoginModel, ProductModel } = require('../models/UserModel');
const authToken = require("../Middleware/auth");
const jwt = require('jsonwebtoken');
const util = require("util");
const { log } = require('console');




router.get('/Adminviewuserdata', async (req, res) => {
  try {
    const allData = await DataModel.aggregate([
      {
        $addFields: {
          // Convert the 'postid' field to ObjectId
          loginid: { $toObjectId: '$loginid' }
        }
      },
      {
        $lookup: {
          from: 'login',
          localField: 'loginid',
          foreignField: '_id',
          as: 'Joineddatalogreg',
        },
      }
    ]);

    console.log(allData);

    if (allData.length > 0) {
      res.json(allData);
    } else {
      res.status(404).json({ error: 'User data not found' });
    }
  } catch (error) {
    console.error('An error occurred while retrieving data:', error);
    res.status(500).json({ error: 'Failed to retrieve data' });
  }
});


router.post('/approveUser/:id', async (req, res) => {
  const userid = req.params.id;
  // console.log("id",userid);
  try {
    const approvedata = await LoginModel.findByIdAndUpdate(
      { _id: userid },
      { $set: { status: 1 } },
      { new: true });
    console.log(approvedata);
    if (approvedata) {
      res.json(approvedata);
      console.log(approvedata);
    }
    else {
      res.status(400).json({ error: "Not Approve" })
    }
  }
  catch (error) {
    console.error(error);
  }
})


router.post('/rejectUser/:id', async (req, res) => {
  const userid = req.params.id;
  // console.log("id",userid);
  try {
    const rejectdata = await LoginModel.findByIdAndUpdate(
      { _id: userid },
      { $set: { status: 2 } },
      { new: true });
    console.log(rejectdata);
    if (rejectdata) {
      res.json(rejectdata);
      console.log(rejectdata);
    }
    else {
      res.status(400).json({ error: "Not Approve" })
    }
  }
  catch (error) {
    console.error(error);
  }
})


router.post('/addproduct', authToken, async (req, res) => {
  try {
    userid = req.token.userId;
    const { product } = req.body;
    console.log("product", req.body);
    const saveproduct = new ProductModel({
      productname: product.productname,
      productprice: product.productprice,
      productcategory: product.productcategory,
      photo: product.photo,
      loginid: userid,
      currentdate: new Date(),// Set current date and time
    });
    await saveproduct.save();
    res.status(200).json({ message: 'Product added successfully' });
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})


router.get('/fetchallproduct', async (req, res) => { //fetch all products
  try {
    const fetchallproduct = await ProductModel.find();
    console.log("allprod",fetchallproduct);
    if (fetchallproduct) {
      res.status(200).json(fetchallproduct);
            console.log("allprod",fetchallproduct);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ error: 'Failed to retrieve product' });
  }
});

//delete (Admin) user data 
router.delete('/adminuserdelete/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const deletedPost = await ProductModel.findByIdAndDelete(id);

    if (deletedPost) {
      res.status(202).json({ message: 'Post deleted successfully' });
    } else {
      res.status(404).json({ error: 'Post not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});









module.exports = router;
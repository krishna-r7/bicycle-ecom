const express = require('express');
const router = express.Router();
const cors = require('cors');
const bcrypt = require('bcrypt');
router.use(cors());
router.use(express.json());
const { DataModel, LoginModel, ProductModel, CartModel, BankModel, BuyModel } = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const authToken = require("../Middleware/auth");
const { log } = require('util');
const { error } = require('console');




router.post('/userreg', async (req, res) => {
  try {
    const usertype = 1;
    const { email, password } = req.body;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newlogin = new LoginModel({
      email,
      password: hashedPassword,
      usertype,
      status: 0
    });
    // console.log(newlogin)

    const savelogin = await newlogin.save();
    const loginid = savelogin._id;
    const { name, address, gender, dob, contact, district, pincode } = req.body;
    const savedUser = new DataModel({
      name,
      address,
      gender,
      dob,
      contact,
      district,
      pincode,
      loginid,
    });
    console.log(savedUser)
    await savedUser.save();
    res.status(201).json({ user: savelogin });
  } catch (error) {
    res.status(500).json({ error: 'Could not insert data' });
  }
});


router.get('/fetchuserdata', authToken, async (req, res) => {
  try {
    userid = req.token.userId;
    // console.log(userid);
    const fetchdata = await DataModel.findOne({ loginid: userid })
    if (fetchdata) {
      res.json(fetchdata);
    }
    else {
      res.status(404).json({ error: 'User data not found' })
    }
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve data' });
  }
});


router.post('/updateUser', authToken, async (req, res) => {
  try {
    userid = req.token.userId;
    console.log(userid);
    const { name, address, gender, dob, contact, district, pincode } = req.body;
    console.log(req.body);
    const updatepost = {
      name,
      address,
      gender,
      dob,
      contact,
      district,
      pincode,
    };
    const updatedUser = await DataModel.findOneAndUpdate(
      { loginid: userid },
      { $set: updatepost },
      { new: true }
    );
    console.log("updatedUser:", updatedUser);
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.status(201).json(updatedUser);
  } catch (error) {
    console.error('Error updating user data:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});


router.get('/fetchproduct', authToken, async (req, res) => { // Bicycle fetch
  try {
    const fetchproduct = await ProductModel.find({ productcategory: 'Bicycles' }).sort({ currentdate: -1 });
    if (fetchproduct) {
      res.status(200).json(fetchproduct);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ error: 'Failed to retrieve product' });
  }
});


router.get('/fetchaccproduct', authToken, async (req, res) => { // Accessories fetch
  try {
    const fetchaccproduct = await ProductModel.find({ productcategory: 'Accessories' }).sort({ currentdate: -1 });
    if (fetchaccproduct) {
      res.status(200).json(fetchaccproduct);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ error: 'Failed to retrieve product' });
  }
});

router.get('/cartproduct/:id', authToken, async (req, res) => {
  try {
    const id = req.params.id;
    userid = req.token.userId;
    //  console.log("idddd",id);
    const cartcheck = await CartModel.find({ productid: id, loginid: userid });
    const cartproduct = await ProductModel.find({ _id: id });
    // console.log("cartproduct",cartproduct);
    if (cartproduct.length > 0) {
      res.status(200).json({ cartproduct, cartcheck });
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ error: 'Failed to retrieve product' });
  }
});

router.post('/addcart', authToken, async (req, res) => {
  try {
    userid = req.token.userId;
    const { id, quantity, selectedSize } = req.body;
    const cartcheck = await CartModel.find({ productid: id, loginid: userid });
    if (cartcheck.length > 0) {
      res.status(202).json({ message: "Cart Already Exist" })
    }
    else {
      const savecart = new CartModel({
        productid: id,
        loginid: userid,
        quantity: quantity,
        size: selectedSize,
      })
      await savecart.save();
      res.status(201).json({ message: "Cart Added Successfully" })
    }
  }
  catch (error) {
    console.log("error occured", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})



router.get('/selectcart', authToken, async (req, res) => {
  try {
    userid = req.token.userId;
    const cartData = await CartModel.aggregate([
      {
        $match: {
          'loginid': userid
        }
      },
      {
        $addFields: {
          productid: { $toObjectId: '$productid' }
        }
      },
      {
        $lookup: {
          from: 'product_123',
          localField: 'productid',
          foreignField: '_id',
          as: 'joinedCart'
        }
      }
    ]);

    // console.log("cartdata", cartData);

    if (cartData.length > 0) {
      res.json(cartData);
    } else {
      res.status(404).json({ error: 'Cart data not found' });
    }
  } catch (error) {
    console.error('An error occurred while retrieving data:', error);
    res.status(500).json({ error: 'Failed to retrieve data' });
  }
});


router.get('/fetchaccproductbicycles', authToken, async (req, res) => { // Accessories fetch
  try {
    const fetchaccproduct = await ProductModel.find({ productcategory: 'Bicycles' }).sort({ currentdate: -1 });
    if (fetchaccproduct) {
      res.status(200).json(fetchaccproduct);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ error: 'Failed to retrieve product' });
  }
});


router.delete('/cartdelete/:id', authToken, async (req, res) => {
  const id = req.params.id;
  userid = req.token.userId;
  try {
    const deletedPost = await CartModel.findByIdAndDelete({ _id: id, userid: userid });
    if (deletedPost) {
      res.status(202).json({ message: 'Post deleted successfully' });
    } else {
      res.status(404).json({ error: 'Post not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});


router.put('/updatecart/:productId', authToken, async (req, res) => {
  try {
    const { productId } = req.params;
    const { quantity } = req.body;

    await CartModel.updateOne({ _id: productId }, { quantity });

    res.status(200).json({ message: 'Quantity updated successfully' });
  } catch (error) {
    console.error('An error occurred while updating quantity:', error);
    res.status(500).json({ error: 'Failed to update quantity' });
  }
});



router.post('/buyproduct', authToken, async (req, res) => {
  try {
    userid = req.token.userId;
    console.log(userid);
    const { id, quantity, selectedSize } = req.body.state;
    const cardnouser = req.body.cardno;
    const cvvuser = req.body.cvv;
    const contactfetch = await DataModel.findOne({ loginid: userid })
    if (!contactfetch) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    const contact = contactfetch.contact;
    console.log(contact);
    const bankData = await BankModel.findOne({ contact: contact });
    if (!bankData) {
      return res.status(404).json({ error: 'Bank data not found' });
    }
    if (cardnouser == bankData.cardno) {
      if (cvvuser == bankData.cvv) {
        const savebuy = new BuyModel({
          productid: id,
          loginid: userid,
          quantity: quantity,
          size: selectedSize,
        })
        await savebuy.save();
        res.status(200).json({ message: "Buy Added Successfully", contact: contact })
      }
      else {
        return res.status(201).json({ error: 'cvv no match' })
      }
    }
    else {
      return res.status(202).json({ error: 'cardno no match' })
    }
  }
  catch (error) {
    console.log("error occured", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})
// fetch ordered datas


// router.get('/fetchordereditems', authToken, async (req, res) => { // fetch orderitems
//   try {
//     userid = req.token.userId;
//     console.log(userid);
//     const fetchorderproduct = await BuyModel.find({loginid:userid});
//     if (fetchorderproduct) {
//       res.status(200).json(fetchorderproduct);
//       console.log("Order Successfull");
//     } else {
//       res.status(404).json({ error: 'Order not found' });
//     }
//   } catch (error) {
//     console.error('Error fetching Order:', error);
//     res.status(500).json({ error: 'Failed to retrieve Order' });
//   }
// });



router.get('/fetchordereditems', authToken, async (req, res) => { // fetch orderitems
  try {
    userid = req.token.userId;
    const buyData = await BuyModel.aggregate([
      {
        $match: {
          'loginid': userid
        }
      },
      {
        $addFields: {
          productid: { $toObjectId: '$productid' }
        }
      },
      {
        $lookup: {
          from: 'product_123',
          localField: 'productid',
          foreignField: '_id',
          as: 'joinedBuy'
        }
      }
    ]);

    console.log("Buydataaaaa",buyData);

    if (buyData.length > 0) {
      res.json(buyData);
    } else {
      res.status(404).json({ error: 'Buy data not found' });
    }
  } catch (error) {
    console.error('An error occurred while retrieving data:', error);
    res.status(500).json({ error: 'Failed to retrieve data' });
  }
});



// router.get('/buyallproducts', authToken, async (req, res) => { //fetch all products
//   try {
//     userid = req.token.userId;
//     const fetchallproduct = await CartModel.find({loginid:userid});
//     if (fetchallproduct) {
//       for( i=0 ; i<fetchallproduct.length ; i++){
//         console.log(i);
//         const savebuy = new BuyModel({
//           productid: fetchallproduct[i].productid,
//           loginid: fetchallproduct[i].loginid,
//           quantity: fetchallproduct[i].quantity,
//           size: fetchallproduct[i].size,
//         })
//         // console.log("savebuy");
//         // console.log(savebuy);
//         await savebuy.save();
//       }
//       res.status(200).json(fetchallproduct);
//     } else {
//       res.status(404).json({ error: 'Product not found' });
//     }
//     // console.log(fetchallproduct);
//     // console.log(fetchallproduct.length);
//   } catch (error) {
//     console.error('Error fetching product:', error);
//     res.status(500).json({ error: 'Failed to retrieve product' });
//   }
// });



router.post('/buyallproduct', authToken, async (req, res) => {
  try {
    const userid = req.token.userId;
    const cardnouser = req.body.cardno;
    const cvvuser = req.body.cvv;
    const contactfetch = await DataModel.findOne({ loginid: userid });
    if (!contactfetch) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    const contact = contactfetch.contact;
    const bankData = await BankModel.findOne({ contact: contact });
    if (!bankData) {
      return res.status(404).json({ error: 'Bank data not found' });
    }
    if (cardnouser == bankData.cardno) {
      if (cvvuser == bankData.cvv) {
        const fetchallproduct = await CartModel.find({ loginid: userid });
        if (fetchallproduct.length > 0) { 
          for (let i = 0; i < fetchallproduct.length; i++) {
            console.log(i);
            const savebuy = new BuyModel({
              productid: fetchallproduct[i].productid,
              loginid: fetchallproduct[i].loginid,
              quantity: fetchallproduct[i].quantity,
              size: fetchallproduct[i].size,
            });
            await savebuy.save();
          }
          return res.status(200).json(fetchallproduct);
        } else {
          return res.status(404).json({ error: 'No products found in the cart' });
        }
      } else {
        return res.status(201).json({ error: 'CVV does not match' });
      }
    } else {
      return res.status(202).json({ error: 'Card number does not match' });
    }
  } catch (error) {
    console.log("error occurred", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});








module.exports = router;

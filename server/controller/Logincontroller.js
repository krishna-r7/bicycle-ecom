const express = require('express');
const router = express.Router();
const cors = require('cors');
const bcrypt = require('bcrypt');
router.use(cors());
router.use(express.json());
const { DataModel, LoginModel,ProductModel } = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const util = require("util");
const { access } = require('fs');


async function generateAccessToken(userId) {
    const accessToken = await jwt.sign({ userId }, process.env.JWTTOKEN, {
        expiresIn: "1h",
    });
    return accessToken;
}
async function generateRefreshToken(userId) {
    const refreshToken = await jwt.sign({ userId }, process.env.REFRESHTOKEN, {
        expiresIn: "5h",
    });
    return refreshToken;
}

const compareAsync = util.promisify(bcrypt.compare);

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const loginData = await LoginModel.findOne({ email });
        if (loginData) {
            const match = await compareAsync(password, loginData.password);
            if (match) {
                if(loginData.status===1){         
                console.log("Login successfull");
                const accessToken = await generateAccessToken(loginData._id);
                res.cookie("accessToken", accessToken, { httpOnly: true });
                console.log(accessToken);
                const refreshToken = await generateRefreshToken(loginData._id);
                res.cookie("refreshToken", refreshToken, { httpOnly: true });
                console.log(refreshToken);
                if (loginData.usertype === 0) {
                    console.log("Admin");
                    res.json({ success: "Login successfull", accessToken, loginData });
                } else if (loginData.usertype === 1) {
                    console.log("Index");
                    res.json({ success: "Login successfull", accessToken, loginData });
                }
            }else if(loginData.status==2){
                console.log("Admin Rejected");
                res.status(401).json({ error: "Admin reject" });
            }
            else{
                console.log("Waiting for approval");
                res.status(401).json({ error: "Waiting approval" });
            }
            } else {
                console.log("Invalid password");
                res.status(401).json({ error: "Invalid password" });
            }
        } else {
            console.log("User not found");
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
});


router.delete('/logout', async (req, res) => {
    try {
        res.clearCookie('accessToken');
        res.clearCookie('refreshToken');
        res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
        console.error('Logout failed:', error);
        res.status(500).json({ error: 'Logout failed' });
    }
});



module.exports = router;
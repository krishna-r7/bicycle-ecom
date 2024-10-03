// const jwt = require("jsonwebtoken");
// require('dotenv').config();
// const cookie = require('cookie');

// const authToken = async (req, res, next) => {
//     const cookies = cookie.parse(req.headers.cookie || '');
//     const token = cookies.accessToken;
    
//     if (!token) {
//         console.log("Token not found");
//         return next(new Error("Token not found"));
//     }
//     try {
//         // console.log("Token found");
//         const user = await jwt.verify(token, process.env.JWTTOKEN);
//         req.token = user;
//         next();
//     } catch (error) {
//         console.error("Error verifying token:", error);
//         return res.status(403).json({ error: "Invalid Token" });
//     }   
// };

// module.exports = authToken;




const jwt = require("jsonwebtoken");
require('dotenv').config();
const cookie = require('cookie');

const authToken = async (req, res, next) => {
    const cookies = cookie.parse(req.headers.cookie || '');
    const token = cookies.accessToken;
    const refreshToken = cookies.refreshToken;

    if (!token || !refreshToken) {
        console.log("Token or Refresh Token not found");
        return next(new Error("Token or Refresh Token not found"));
    }

    try {
        // Verify access token
        const user = await jwt.verify(token, process.env.JWTTOKEN);
        req.token = user;
      return  next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            try {
                // Verify refresh token
                const decodedRefreshToken = jwt.verify(refreshToken, process.env.REFRESHTOKEN);
                // Generate new access token
                const newAccessToken = await generateAccessToken(decodedRefreshToken.userId); // generate new token
                // Set new access token in response cookie
                res.cookie('accessToken', newAccessToken, { httpOnly: true });    
                const newDecoded = await jwt.verify(newAccessToken, process.env.JWTTOKEN);
                req.token = newDecoded;
                next();
            } catch (err) {
                console.error("Error verifying tokens:", err);
                return res.status(403).json({ error: "Invalid Tokens" });
            }
        } else {
            console.error("Error verifying token:", error);
            return res.status(403).json({ error: "Invalid Token" });
        }
    }
};

const generateAccessToken = async (userId) => {
    return await jwt.sign({ userId }, process.env.JWTTOKEN, { expiresIn: '10s' });
};

// const generateRefreshToken = async (userId) => {
//     return await jwt.sign({ userId }, process.env.REFRESHTOKEN, { expiresIn: '30m' });
// }; 

module.exports = authToken;
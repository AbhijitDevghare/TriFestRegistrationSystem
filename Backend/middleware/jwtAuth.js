require("dotenv").config();
const JWT = require('jsonwebtoken');

const jwtAuth = (req,resp,next)=>{
    const token = (req.cookies && req.cookies.token) || null;

    if(!token){
        return resp.status(400).json({
            success:false,
            message:"Not Authorized"
        })
    }

    try{
        //verify JWT token
        // console.log("ENV KEY : "+process.env.SECRET)
        const payload=JWT.verify(token,process.env.SECRET);
        req.user={ id : payload.id, email : payload.email};
    }catch(error){
        return resp.status(400).json({
            success:false,
            message:error.message
        })
    }
    next();
}

module.exports = jwtAuth;
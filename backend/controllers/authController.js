const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

let users = [];

let otpStore = {};

exports.sendOtp = async (req,res)=>{

try{

const { email } = req.body;

if(!email){

return res.status(400).json({

message:"Email Required"

});

}

const otp = Math.floor(

100000 + Math.random()*900000

);

otpStore[email]=otp;

console.log("OTP =",otp);

return res.status(200).json({

message:"OTP Sent Successfully",

otp

});

}

catch(err){

console.log(err);

return res.status(500).json({

message:"OTP Failed"

});

}

};



exports.register=async(req,res)=>{

try{

const{

name,

email,

password,

role,

otp

}=req.body;


if(otpStore[email]!=otp){

return res.status(400).json({

message:"Invalid OTP"

});

}


const userExist=

users.find(

u=>u.email===email

);


if(userExist){

return res.status(400).json({

message:"Email Already Exists"

});

}


const hashed=

await bcrypt.hash(

password,

10

);


const user={

id:Date.now(),

name,

email,

password:hashed,

role:role || "Student"

};


users.push(user);

delete otpStore[email];


return res.status(201).json({

message:"Registration Successful"

});

}

catch(err){

console.log(err);

return res.status(500).json({

message:"Server Error"

});

}

};



exports.login=async(req,res)=>{

try{

const{

email,

password

}=req.body;


const user=

users.find(

u=>u.email===email

);


if(!user){

return res.status(400).json({

message:"User Not Found"

});

}


const match=

await bcrypt.compare(

password,

user.password

);


if(!match){

return res.status(400).json({

message:"Wrong Password"

});

}


const token=

jwt.sign(

{

id:user.id,

role:user.role

},

"secretkey",

{

expiresIn:"1h"

}

);


return res.status(200).json({

message:"Login Success",

token,

user

});

}

catch(err){

console.log(err);

return res.status(500).json({

message:"Server Error"

});

}

};
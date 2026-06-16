const express = require("express");

const cors = require("cors");

const db = require("./config/db");

const app = express();

app.use(cors());

app.use(express.json());



// USERS TABLE

db.run(`

CREATE TABLE IF NOT EXISTS users(

id INTEGER PRIMARY KEY AUTOINCREMENT,

name TEXT NOT NULL,

email TEXT UNIQUE NOT NULL,

password TEXT NOT NULL,

role TEXT NOT NULL

)

`,(err)=>{

if(err){

console.log("Users Table Error ❌");

}

else{

console.log("Users Table Ready ✅");

}

});




// STUDENTS TABLE

db.run(`

CREATE TABLE IF NOT EXISTS students(

id INTEGER PRIMARY KEY AUTOINCREMENT,

name TEXT NOT NULL,

email TEXT UNIQUE,

course TEXT,

progress INTEGER,

status TEXT

)

`,(err)=>{

if(err){

console.log("Students Table Error ❌");

}

else{

console.log("Students Table Ready ✅");

}

});




// INSTRUCTORS TABLE

db.run(`

CREATE TABLE IF NOT EXISTS instructors(

id INTEGER PRIMARY KEY AUTOINCREMENT,

name TEXT NOT NULL,

email TEXT UNIQUE,

subject TEXT,

experience TEXT,

status TEXT

)

`,(err)=>{

if(err){

console.log("Instructors Table Error ❌");

}

else{

console.log("Instructors Table Ready ✅");

}

});




// COURSES TABLE

db.run(`

CREATE TABLE IF NOT EXISTS courses(

id INTEGER PRIMARY KEY AUTOINCREMENT,

courseName TEXT,

description TEXT,

instructor TEXT

)

`,(err)=>{

if(err){

console.log("Courses Table Error ❌");

}

else{

console.log("Courses Table Ready ✅");

}

});



app.get("/",(req,res)=>{

res.send("RBAC Server Running ✅");

});



app.listen(5000,()=>{

console.log(

"Server Running On Port 5000 🚀"

);

});


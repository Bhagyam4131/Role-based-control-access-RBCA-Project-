const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(

"./rbac.db",

(err) => {

if(err){

console.log("Database Connection Error ❌");

console.log(err);

}

else{

console.log(

"SQLite Connected Successfully ✅"

);

}

}

);

module.exports = db;


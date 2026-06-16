import React, { useState } from "react";

export default function Profile() {

const [edit,setEdit] = useState(false);

const [profile,setProfile] = useState({

name:"",

email:"",

role:"Student",

phone:"",

college:""

});

const handleChange=(e)=>{

setProfile({

...profile,

[e.target.name]:e.target.value

});

};

const handleSave=()=>{

setEdit(false);

alert("Profile Updated Successfully ✅");

};

return(

<div style={{

minHeight:"100vh",

background:"#f1f5f9",

display:"flex",

justifyContent:"center",

alignItems:"center"

}}>

<div style={{

width:"500px",

background:"white",

padding:"35px",

borderRadius:"20px",

boxShadow:"0 10px 25px rgba(0,0,0,0.2)"

}}>

<h1 style={{

textAlign:"center",

marginBottom:"25px",

color:"#2563eb"

}}>

👤 My Profile

</h1>


{edit ? (

<>

<input

type="text"

name="name"

placeholder="Enter Name"

value={profile.name}

onChange={handleChange}

style={inputStyle}

/>

<input

type="email"

name="email"

placeholder="Enter Email"

value={profile.email}

onChange={handleChange}

style={inputStyle}

/>

<select

name="role"

value={profile.role}

onChange={handleChange}

style={inputStyle}

>

<option>

Student

</option>

<option>

Instructor

</option>

<option>

Admin

</option>

</select>

<input

type="text"

name="phone"

placeholder="Phone Number"

value={profile.phone}

onChange={handleChange}

style={inputStyle}

/>

<input

type="text"

name="college"

placeholder="College Name"

value={profile.college}

onChange={handleChange}

style={inputStyle}

/>

<button

onClick={handleSave}

style={saveBtn}

>

Save Profile

</button>

</>

)

:

(

<>

<h3>Name</h3>

<p>{profile.name || "-"}</p>

<hr />

<h3>Email</h3>

<p>{profile.email || "-"}</p>

<hr />

<h3>Role</h3>

<p>{profile.role}</p>

<hr />

<h3>Phone</h3>

<p>{profile.phone || "-"}</p>

<hr />

<h3>College</h3>

<p>{profile.college || "-"}</p>

<hr />

<button

onClick={()=>setEdit(true)}

style={editBtn}

>

Edit Profile

</button>

</>

)

}

</div>

</div>

)

}

const inputStyle={

width:"100%",

padding:"12px",

marginBottom:"15px",

border:"1px solid #ccc",

borderRadius:"8px"

};

const editBtn={

width:"100%",

padding:"12px",

background:"#2563eb",

color:"white",

border:"none",

borderRadius:"8px",

cursor:"pointer",

fontSize:"16px"

};

const saveBtn={

width:"100%",

padding:"12px",

background:"#16a34a",

color:"white",

border:"none",

borderRadius:"8px",

cursor:"pointer",

fontSize:"16px"

};
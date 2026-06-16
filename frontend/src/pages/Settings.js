import React, { useState, useEffect } from "react";

export default function Settings() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  const [notification, setNotification] = useState(true);


  useEffect(() => {

    const savedSettings = JSON.parse(

      localStorage.getItem("settings")

    );

    if(savedSettings){

      setName(savedSettings.name || "");

      setEmail(savedSettings.email || "");

      setPassword(savedSettings.password || "");

      setDarkMode(savedSettings.darkMode);

      setNotification(savedSettings.notification);

    }

  }, []);



  const saveSettings = () => {

    const settings = {

      name,

      email,

      password,

      darkMode,

      notification

    };



    localStorage.setItem(

      "settings",

      JSON.stringify(settings)

    );



    alert(

      "Settings Saved Successfully ✅"

    );

  };



  return (

    <div

      style={{

        minHeight:"100vh",

        background:

        darkMode

        ?

        "#0f172a"

        :

        "#f1f5f9",

        padding:"40px"

      }}

    >

      <div

      style={{

      maxWidth:"700px",

      margin:"auto",

      background:

      darkMode

      ?

      "#1e293b"

      :

      "white",

      padding:"35px",

      borderRadius:"25px",

      boxShadow:

      "0 15px 35px rgba(0,0,0,0.2)"

      }}

      >

      <h1

      style={{

      textAlign:"center",

      color:

      darkMode

      ?

      "white"

      :

      "#2563eb"

      }}

      >

      ⚙️ Settings

      </h1>



      <p

      style={{

      textAlign:"center",

      color:

      darkMode

      ?

      "#cbd5e1"

      :

      "#64748b",

      marginBottom:"30px"

      }}

      >

      Manage Your Account Settings

      </p>




      <label>

      Full Name

      </label>

      <input

      type="text"

      value={name}

      onChange={(e)=>

      setName(e.target.value)

      }

      style={inputStyle}

      />




      <label>

      Email

      </label>

      <input

      type="email"

      value={email}

      onChange={(e)=>

      setEmail(e.target.value)

      }

      style={inputStyle}

      />





      <label>

      Password

      </label>

      <input

      type="password"

      value={password}

      onChange={(e)=>

      setPassword(e.target.value)

      }

      style={inputStyle}

      />






      <div style={rowStyle}>

      <span>

      🌙 Dark Mode

      </span>

      <button

      onClick={()=>

      setDarkMode(

      !darkMode

      )

      }

      style={

      darkMode

      ?

      greenBtn

      :

      redBtn

      }

      >

      {

      darkMode

      ?

      "ON"

      :

      "OFF"

      }

      </button>

      </div>







      <div style={rowStyle}>

      <span>

      🔔 Notifications

      </span>

      <button

      onClick={()=>

      setNotification(

      !notification

      )

      }

      style={

      notification

      ?

      greenBtn

      :

      redBtn

      }

      >

      {

      notification

      ?

      "ON"

      :

      "OFF"

      }

      </button>

      </div>






      <button

      onClick={saveSettings}

      style={saveBtn}

      >

      💾 Save Settings

      </button>

      </div>

    </div>

  );

}



const inputStyle={

width:"100%",

padding:"14px",

marginTop:"8px",

marginBottom:"20px",

borderRadius:"12px",

border:"1px solid #cbd5e1",

outline:"none",

fontSize:"15px"

};



const rowStyle={

display:"flex",

justifyContent:"space-between",

alignItems:"center",

marginBottom:"25px",

fontWeight:"bold",

fontSize:"18px"

};



const greenBtn={

background:"#22c55e",

color:"white",

border:"none",

padding:"10px 20px",

borderRadius:"25px",

cursor:"pointer",

fontWeight:"bold"

};



const redBtn={

background:"#ef4444",

color:"white",

border:"none",

padding:"10px 20px",

borderRadius:"25px",

cursor:"pointer",

fontWeight:"bold"

};



const saveBtn={

width:"100%",

padding:"15px",

background:

"linear-gradient(90deg,#2563eb,#7c3aed)",

color:"white",

border:"none",

borderRadius:"15px",

cursor:"pointer",

fontSize:"18px",

fontWeight:"bold",

marginTop:"20px"

};


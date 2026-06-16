import React, { useState } from "react";

export default function Instructors() {

  const [selected, setSelected] = useState(null);

  const instructors = [

    {

      id: 1,

      name: "Ravi Kumar",

      email: "ravi@gmail.com",

      subject: "Java Full Stack",

      experience: "5 Years",

      students: 120,

      color: "#3b82f6"

    },

    {

      id: 2,

      name: "Priya Sharma",

      email: "priya@gmail.com",

      subject: "React JS",

      experience: "3 Years",

      students: 80,

      color: "#8b5cf6"

    },

    {

      id: 3,

      name: "Arjun",

      email: "arjun@gmail.com",

      subject: "PostgreSQL",

      experience: "4 Years",

      students: 60,

      color: "#22c55e"

    }

  ];


  return (

    <div

      style={{

        minHeight:"100vh",

        padding:"40px",

        background:

        "linear-gradient(135deg,#0f172a,#1e293b,#334155)"

      }}

    >

      <h1

      style={{

      color:"white",

      textAlign:"center",

      fontSize:"45px"

      }}

      >

      👨‍🏫 Manage Instructors

      </h1>


      <p

      style={{

      color:"#cbd5e1",

      textAlign:"center",

      marginBottom:"40px"

      }}

      >

      View Instructor Details and Performance

      </p>





      <div

      style={{

      display:"grid",

      gridTemplateColumns:

      "repeat(auto-fit,minmax(280px,1fr))",

      gap:"30px"

      }}

      >

      {

      instructors.map((ins)=>(

      <div

      key={ins.id}

      style={{

      background:"white",

      borderRadius:"25px",

      overflow:"hidden",

      boxShadow:

      "0 10px 30px rgba(0,0,0,0.3)"

      }}

      >


      <div

      style={{

      background:ins.color,

      padding:"25px",

      color:"white",

      textAlign:"center"

      }}

      >

      <h2>

      {ins.name}

      </h2>

      <p>

      {ins.subject}

      </p>

      </div>





      <div

      style={{

      padding:"25px"

      }}

      >

      <p>

      📧

      <b>

      Email :

      </b>

      {ins.email}

      </p>



      <p>

      ⭐

      <b>

      Experience :

      </b>

      {ins.experience}

      </p>



      <p>

      👨‍🎓

      <b>

      Students :

      </b>

      {ins.students}

      </p>



      <button

      onClick={()=>

      setSelected(ins)

      }

      style={{

      width:"100%",

      background:ins.color,

      color:"white",

      border:"none",

      padding:"12px",

      borderRadius:"12px",

      cursor:"pointer",

      fontWeight:"bold",

      marginTop:"15px"

      }}

      >

      View Details

      </button>

      </div>

      </div>

      ))

      }

      </div>





      {

      selected &&

      <div

      style={{

      background:"white",

      marginTop:"50px",

      padding:"30px",

      borderRadius:"25px",

      boxShadow:

      "0 10px 25px rgba(0,0,0,0.3)"

      }}

      >

      <h2

      style={{

      color:"#2563eb"

      }}

      >

      Instructor Details

      </h2>


      <hr/>


      <p>

      <b>Name :</b>

      {selected.name}

      </p>


      <p>

      <b>Email :</b>

      {selected.email}

      </p>


      <p>

      <b>Subject :</b>

      {selected.subject}

      </p>


      <p>

      <b>Experience :</b>

      {selected.experience}

      </p>


      <p>

      <b>Total Students :</b>

      {selected.students}

      </p>


      <button

      onClick={()=>

      setSelected(null)

      }

      style={{

      background:"#ef4444",

      color:"white",

      border:"none",

      padding:"12px 20px",

      borderRadius:"10px",

      cursor:"pointer",

      marginTop:"20px"

      }}

      >

      Close

      </button>

      </div>

      }

    </div>

  );

}


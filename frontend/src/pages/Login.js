import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    const user = JSON.parse(
      localStorage.getItem("user")
    );

    if (!user) {

      alert("Please Register First");

      return;

    }

    if (

      user.email === email &&

      user.password === password

    ) {

      alert("Login Successful ✅");

      navigate("/dashboard");

    }

    else {

      alert("Invalid Email or Password ❌");

    }

  };

  return (

    <div

      style={{

        height:"100vh",

        display:"flex",

        justifyContent:"center",

        alignItems:"center",

        background:"#0f172a"

      }}

    >

      <form

        onSubmit={handleLogin}

        style={{

          background:"white",

          padding:"30px",

          width:"350px",

          borderRadius:"15px",

          boxShadow:"0 0 20px rgba(0,0,0,0.2)"

        }}

      >

        <h1

        style={{

        textAlign:"center",

        marginBottom:"20px"

        }}

        >

        RBAC Login

        </h1>



        <input

        type="email"

        placeholder="Email"

        value={email}

        onChange={(e)=>

        setEmail(e.target.value)

        }

        required

        style={{

        width:"100%",

        padding:"12px",

        marginBottom:"15px",

        borderRadius:"8px"

        }}

        />



        <input

        type="password"

        placeholder="Password"

        value={password}

        onChange={(e)=>

        setPassword(e.target.value)

        }

        required

        style={{

        width:"100%",

        padding:"12px",

        marginBottom:"15px",

        borderRadius:"8px"

        }}

        />



        <button

        type="submit"

        style={{

        width:"100%",

        padding:"12px",

        background:"#2563eb",

        color:"white",

        border:"none",

        borderRadius:"8px",

        cursor:"pointer"

        }}

        >

        Login

        </button>



        <p

        style={{

        textAlign:"center",

        marginTop:"15px"

        }}

        >

        New User ?

        <Link to="/register">

        Register

        </Link>

        </p>

      </form>

    </div>

  );

}
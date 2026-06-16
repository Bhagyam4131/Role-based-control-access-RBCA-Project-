import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {

  const navigate = useNavigate();

  const [user, setUser] = useState({

    name: "",

    email: "",

    password: "",

    role: "Student"

  });

  const [generatedOtp, setGeneratedOtp] = useState("");

  const [enteredOtp, setEnteredOtp] = useState("");

  const [otpVerified, setOtpVerified] = useState(false);



  const handleChange = (e) => {

    setUser({

      ...user,

      [e.target.name]: e.target.value

    });

  };



  const sendOtp = () => {

    if (!user.email) {

      alert("Please Enter Email First");

      return;

    }

    const otp = Math.floor(

      100000 + Math.random() * 900000

    ).toString();

    setGeneratedOtp(otp);

    alert("OTP Sent Successfully ✅\nOTP : " + otp);

  };



  const verifyOtp = () => {

    if (enteredOtp === generatedOtp) {

      setOtpVerified(true);

      alert("OTP Verified Successfully ✅");

    }

    else {

      alert("Invalid OTP ❌");

    }

  };



  const handleRegister = (e) => {

    e.preventDefault();



    if (!otpVerified) {

      alert("Please Verify OTP First");

      return;

    }



    const passwordRegex =

    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;



    if (!passwordRegex.test(user.password)) {

      alert(

      "Password must contain:\n\n" +

      "• Minimum 8 Characters\n" +

      "• One Uppercase Letter\n" +

      "• One Lowercase Letter\n" +

      "• One Number\n" +

      "• One Special Character"

      );

      return;

    }



    localStorage.setItem(

      "user",

      JSON.stringify(user)

    );



    alert("Registration Successful ✅");



    navigate("/login");

  };



  return (

    <div

      style={{

        minHeight: "100vh",

        display: "flex",

        justifyContent: "center",

        alignItems: "center",

        background:

        "linear-gradient(135deg,#0f172a,#1e293b,#334155)"

      }}

    >

      <form

        onSubmit={handleRegister}

        style={{

          width: "420px",

          background: "white",

          padding: "35px",

          borderRadius: "20px",

          boxShadow:

          "0 10px 30px rgba(0,0,0,0.3)"

        }}

      >

        <h1

        style={{

        textAlign:"center",

        color:"#2563eb"

        }}

        >

        Create Account

        </h1>



        <p

        style={{

        textAlign:"center",

        color:"gray",

        marginBottom:"25px"

        }}

        >

        Register to RBAC System

        </p>



        <input

          type="text"

          name="name"

          placeholder="Full Name"

          value={user.name}

          onChange={handleChange}

          style={inputStyle}

        />



        <input

          type="email"

          name="email"

          placeholder="Email Address"

          value={user.email}

          onChange={handleChange}

          style={inputStyle}

        />



        <button

          type="button"

          onClick={sendOtp}

          style={blueBtn}

        >

          Send OTP

        </button>



        <input

          type="text"

          placeholder="Enter OTP"

          value={enteredOtp}

          onChange={(e)=>

          setEnteredOtp(e.target.value)

          }

          style={inputStyle}

        />



        <button

          type="button"

          onClick={verifyOtp}

          style={orangeBtn}

        >

          Verify OTP

        </button>



        <input

          type="password"

          name="password"

          placeholder="Password"

          value={user.password}

          onChange={handleChange}

          style={inputStyle}

        />



        <small

        style={{

        color:"gray"

        }}

        >

        Password must contain:

        <br/>

        ✔ Minimum 8 Characters

        <br/>

        ✔ Uppercase Letter

        <br/>

        ✔ Lowercase Letter

        <br/>

        ✔ Number

        <br/>

        ✔ Special Character

        </small>



        <select

          name="role"

          value={user.role}

          onChange={handleChange}

          style={inputStyle}

        >

          <option value="Student">

            Student

          </option>

          <option value="Instructor">

            Instructor

          </option>

          <option value="Admin">

            Admin

          </option>

        </select>



        <button

          type="submit"

          style={greenBtn}

        >

          Register

        </button>



        <p

        style={{

        textAlign:"center"

        }}

        >

          Already have an account ?

          {" "}

          <Link to="/login">

            Login

          </Link>

        </p>

      </form>

    </div>

  );

}



const inputStyle = {

  width:"100%",

  padding:"14px",

  marginTop:"12px",

  marginBottom:"12px",

  border:"1px solid #cbd5e1",

  borderRadius:"10px",

  outline:"none",

  fontSize:"15px"

};



const blueBtn = {

  width:"100%",

  padding:"12px",

  background:"#2563eb",

  color:"white",

  border:"none",

  borderRadius:"10px",

  cursor:"pointer",

  marginBottom:"12px"

};



const orangeBtn = {

  width:"100%",

  padding:"12px",

  background:"#f59e0b",

  color:"white",

  border:"none",

  borderRadius:"10px",

  cursor:"pointer",

  marginBottom:"12px"

};



const greenBtn = {

  width:"100%",

  padding:"14px",

  background:"#16a34a",

  color:"white",

  border:"none",

  borderRadius:"10px",

  cursor:"pointer",

  marginTop:"15px",

  fontSize:"16px"

};


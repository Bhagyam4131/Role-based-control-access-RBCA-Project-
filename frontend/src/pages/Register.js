import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "Student",
  });

  const [generatedOtp, setGeneratedOtp] = useState("");
  const [enteredOtp, setEnteredOtp] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
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
    } else {
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

    localStorage.setItem("user", JSON.stringify(user));

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
          "linear-gradient(135deg,#ff6b6b,#ff8e53,#ffd93d,#6c63ff,#4facfe)",
        padding: "20px",
      }}
    >
      <form
        onSubmit={handleRegister}
        style={{
          width: "500px",
          background: "rgba(255,255,255,0.95)",
          padding: "40px",
          borderRadius: "30px",
          boxShadow: "0 25px 80px rgba(0,0,0,0.25)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: "90px",
              height: "90px",
              margin: "0 auto 20px",
              borderRadius: "50%",
              background:
                "linear-gradient(135deg,#6c63ff,#ff6b6b)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "38px",
              color: "white",
              boxShadow: "0 10px 30px rgba(108,99,255,0.4)",
            }}
          >
            🚀
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: "34px",
              fontWeight: "800",
              background:
                "linear-gradient(90deg,#ff6b6b,#6c63ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Create Account
          </h1>

          <p
            style={{
              color: "#64748b",
              marginTop: "10px",
              marginBottom: "25px",
            }}
          >
            Join RBAC Management System
          </p>
        </div>

        <input
          type="text"
          name="name"
          placeholder="👤 Full Name"
          value={user.name}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="📧 Email Address"
          value={user.email}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <button
          type="button"
          onClick={sendOtp}
          style={sendOtpBtn}
        >
          Send OTP
        </button>

        <input
          type="text"
          placeholder="🔐 Enter OTP"
          value={enteredOtp}
          onChange={(e) =>
            setEnteredOtp(e.target.value)
          }
          style={inputStyle}
        />

        <button
          type="button"
          onClick={verifyOtp}
          style={verifyBtn}
        >
          Verify OTP
        </button>

        {otpVerified && (
          <div
            style={{
              background:
                "linear-gradient(90deg,#00c853,#69f0ae)",
              color: "white",
              padding: "14px",
              borderRadius: "15px",
              textAlign: "center",
              marginBottom: "15px",
              fontWeight: "700",
            }}
          >
            ✅ OTP Verified Successfully
          </div>
        )}

        <input
          type="password"
          name="password"
          placeholder="🔑 Password"
          value={user.password}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <small
          style={{
            display: "block",
            color: "#64748b",
            marginBottom: "15px",
            lineHeight: "1.8",
          }}
        >
          Password must contain:
          <br />
          ✔ 8+ Characters
          <br />
          ✔ Uppercase Letter
          <br />
          ✔ Lowercase Letter
          <br />
          ✔ Number
          <br />
          ✔ Special Character
        </small>

        <select
          name="role"
          value={user.role}
          onChange={handleChange}
          style={inputStyle}
        >
          <option value="Student">🎓 Student</option>
          <option value="Instructor">👨‍🏫 Instructor</option>
          <option value="Admin">👑 Admin</option>
        </select>

        <button
          type="submit"
          style={registerBtn}
        >
          Register Account
        </button>

        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
            color: "#64748b",
          }}
        >
          Already have an account?{" "}
          <Link
            to="/login"
            style={{
              color: "#6c63ff",
              textDecoration: "none",
              fontWeight: "700",
            }}
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "16px",
  marginBottom: "15px",
  border: "2px solid #e5e7eb",
  borderRadius: "15px",
  outline: "none",
  fontSize: "15px",
  boxSizing: "border-box",
  background: "#f8fafc",
};

const sendOtpBtn = {
  width: "100%",
  padding: "15px",
  background:
    "linear-gradient(90deg,#4facfe,#00f2fe)",
  color: "white",
  border: "none",
  borderRadius: "15px",
  cursor: "pointer",
  marginBottom: "15px",
  fontWeight: "700",
};

const verifyBtn = {
  width: "100%",
  padding: "15px",
  background:
    "linear-gradient(90deg,#ff9966,#ff5e62)",
  color: "white",
  border: "none",
  borderRadius: "15px",
  cursor: "pointer",
  marginBottom: "15px",
  fontWeight: "700",
};

const registerBtn = {
  width: "100%",
  padding: "16px",
  background:
    "linear-gradient(90deg,#6c63ff,#8e44ad,#ff6b6b)",
  color: "white",
  border: "none",
  borderRadius: "15px",
  cursor: "pointer",
  marginTop: "15px",
  fontSize: "17px",
  fontWeight: "700",
};


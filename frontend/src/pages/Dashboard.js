import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    navigate("/login");
    return null;
  }

  let cards = [];

  // ADMIN
  if (user.role === "Admin") {
    cards = [
      {
        title: "👨‍🎓 Manage Students",
        path: "/students",
      },
      {
        title: "👨‍🏫 Manage Instructors",
        path: "/instructors",
      },
      {
        title: "📚 Courses",
        path: "/courses",
      },
      {
        title: "👤 Profile",
        path: "/profile",
      },
      {
        title: "📈 Progress",
        path: "/progress",
      },
      {
        title: "⚙️ Settings",
        path: "/settings",
      },
    ];
  }

  // INSTRUCTOR
  else if (user.role === "Instructor") {
    cards = [
      {
        title: "📚 My Courses",
        path: "/courses",
      },
      {
        title: "👨‍🎓 Students",
        path: "/students",
      },
      {
        title: "⚙️ Settings",
        path: "/settings",
      },
    ];
  }

  // STUDENT
  else {
    cards = [
      {
        title: "👤 Profile",
        path: "/profile",
      },
      {
        title: "📚 Courses",
        path: "/courses",
      },
      {
        title: "📈 Progress",
        path: "/progress",
      },
    ];
  }

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        background:
          "linear-gradient(135deg,#667eea,#764ba2,#6dd5ed)",
        color: "white",
      }}
    >
      {/* Welcome */}
      <h2
        style={{
          textAlign: "center",
          marginBottom: "25px",
          fontSize: "32px",
        }}
      >
        Welcome Back 👋
      </h2>

      {/* Header Card */}
      <div
        style={{
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(15px)",
          borderRadius: "25px",
          padding: "35px",
          marginBottom: "50px",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}
      >
        <div
          style={{
            width: "90px",
            height: "90px",
            borderRadius: "50%",
            background:
              "linear-gradient(135deg,#ff6b6b,#feca57)",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "40px",
            color: "white",
          }}
        >
          👤
        </div>

        <h1
          style={{
            marginTop: "20px",
            marginBottom: "10px",
            fontSize: "45px",
          }}
        >
          RBAC Dashboard
        </h1>

        <h2>{user.name}</h2>

        <p
          style={{
            color: "#e2e8f0",
          }}
        >
          {user.email}
        </p>

        <div
          style={{
            marginTop: "15px",
          }}
        >
          <span
            style={{
              background: "#22c55e",
              padding: "10px 20px",
              borderRadius: "30px",
              fontWeight: "bold",
            }}
          >
            {user.role}
          </span>
        </div>

        <button
          onClick={logout}
          style={{
            marginTop: "25px",
            padding: "12px 30px",
            border: "none",
            borderRadius: "12px",
            background:
              "linear-gradient(90deg,#ef4444,#f97316)",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "15px",
          }}
        >
          Logout
        </button>
      </div>

      {/* Menu Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "25px",
        }}
      >
        {cards.map((card, index) => (
          <Link
            key={index}
            to={card.path}
            style={{
              textDecoration: "none",
            }}
          >
            <div
              style={{
                background:
                  "rgba(255,255,255,0.18)",
                backdropFilter: "blur(15px)",
                borderRadius: "25px",
                padding: "30px",
                color: "white",
                border:
                  "1px solid rgba(255,255,255,0.2)",
                boxShadow:
                  "0 10px 25px rgba(0,0,0,0.15)",
                transition: "0.3s",
              }}
            >
              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: "700",
                }}
              >
                {card.title}
              </h2>

              <p
                style={{
                  marginTop: "15px",
                  opacity: "0.8",
                }}
              >
                Open Module →
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Statistics */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "25px",
          marginTop: "60px",
        }}
      >
        <div style={statCard}>
          <h1>15</h1>
          <p>📚 Courses</p>
        </div>

        <div style={statCard}>
          <h1>25</h1>
          <p>👨‍🎓 Students</p>
        </div>

        <div style={statCard}>
          <h1>3</h1>
          <p>👥 User Roles</p>
        </div>

        <div style={statCard}>
          <h1>98%</h1>
          <p>🚀 Performance</p>
        </div>
      </div>
    </div>
  );
}

const statCard = {
  background: "rgba(255,255,255,0.15)",
  backdropFilter: "blur(12px)",
  padding: "25px",
  borderRadius: "22px",
  textAlign: "center",
  color: "white",
  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
};
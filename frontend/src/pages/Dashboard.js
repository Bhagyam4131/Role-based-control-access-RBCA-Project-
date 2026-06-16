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

        color: "#3b82f6"

      },

      {

        title: "👨‍🏫 Manage Instructors",

        path: "/instructors",

        color: "#8b5cf6"

      },

      {

        title: "📚 Courses",

        path: "/courses",

        color: "#06b6d4"

      },

      {

        title: "👤 Profile",

        path: "/profile",

        color: "#f59e0b"

      },

      {

        title: "📈 Progress",

        path: "/progress",

        color: "#22c55e"

      },

      {

        title: "⚙️ Settings",

        path: "/settings",

        color: "#ef4444"

      }

    ];

  }



  // INSTRUCTOR

  else if (user.role === "Instructor") {

    cards = [

      {

        title: "📚 My Courses",

        path: "/courses",

        color: "#8b5cf6"

      },

      {

        title: "👨‍🎓 Students",

        path: "/students",

        color: "#10b981"

      },

      {

        title: "⚙️ Settings",

        path: "/settings",

        color: "#ef4444"

      }

    ];

  }



  // STUDENT

  else {

    cards = [

      {

        title: "👤 Profile",

        path: "/profile",

        color: "#3b82f6"

      },

      {

        title: "📚 Courses",

        path: "/courses",

        color: "#8b5cf6"

      },

      {

        title: "📈 Progress",

        path: "/progress",

        color: "#22c55e"

      }

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

          "linear-gradient(135deg,#0f172a,#1e293b,#334155)",

        color: "white"

      }}

    >



      {/* Header */}



      <div

        style={{

          textAlign: "center",

          marginBottom: "50px"

        }}

      >

        <h1

          style={{

            fontSize: "50px",

            marginBottom: "10px"

          }}

        >

          RBAC Dashboard

        </h1>



        <h2>

          Welcome, {user.name}

        </h2>



        <p

          style={{

            color: "#cbd5e1"

          }}

        >

          {user.email}

        </p>



        <h3>

          Role :

          <span

            style={{

              color: "#22c55e",

              marginLeft: "10px"

            }}

          >

            {user.role}

          </span>

        </h3>



        <button

          onClick={logout}

          style={{

            background: "#ef4444",

            color: "white",

            border: "none",

            padding: "12px 25px",

            borderRadius: "10px",

            cursor: "pointer",

            marginTop: "15px",

            fontWeight: "bold"

          }}

        >

          Logout

        </button>

      </div>





      {/* Cards */}



      <div

        style={{

          display: "grid",

          gridTemplateColumns:

            "repeat(auto-fit,minmax(250px,1fr))",

          gap: "30px"

        }}

      >

        {

          cards.map((card, index) => (

            <Link

              key={index}

              to={card.path}

              style={{

                textDecoration: "none"

              }}

            >

              <div

                style={{

                  background: card.color,

                  padding: "35px",

                  borderRadius: "22px",

                  color: "white",

                  boxShadow:

                    "0 10px 30px rgba(0,0,0,0.3)",

                  cursor: "pointer"

                }}

              >

                <h2>

                  {card.title}

                </h2>



                <p

                  style={{

                    marginTop: "15px",

                    opacity: "0.9"

                  }}

                >

                  Click to Open

                </p>

              </div>

            </Link>

          ))

        }

      </div>





      {/* Stats */}



      <div

        style={{

          display: "flex",

          justifyContent: "center",

          gap: "25px",

          flexWrap: "wrap",

          marginTop: "60px"

        }}

      >



        <div style={statCard}>

          <h1>15</h1>

          <p>Total Courses</p>

        </div>



        <div style={statCard}>

          <h1>25</h1>

          <p>Total Students</p>

        </div>



        <div style={statCard}>

          <h1>3</h1>

          <p>User Roles</p>

        </div>



        <div style={statCard}>

          <h1>98%</h1>

          <p>Performance</p>

        </div>

      </div>



    </div>

  );

}



const statCard = {

  background: "#1e293b",

  width: "200px",

  padding: "25px",

  borderRadius: "18px",

  textAlign: "center",

  color: "white",

  boxShadow:

    "0 5px 20px rgba(0,0,0,0.3)"

};


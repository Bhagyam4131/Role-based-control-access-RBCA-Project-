import React, { useState } from "react";

export default function Progress() {

  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  const [selected, setSelected] = useState("courses");

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#f1f5f9",
        padding: "40px"
      }}
    >

      <h1
        style={{
          textAlign: "center",
          color: "#0f172a",
          fontSize: "40px"
        }}
      >

        Student Progress Dashboard

      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#64748b",
          marginBottom: "40px"
        }}
      >

        Welcome {user.name}

      </p>


      <div

        style={{

          display: "grid",

          gridTemplateColumns:

          "repeat(auto-fit,minmax(250px,1fr))",

          gap: "25px"

        }}

      >

        <div

          style={blueCard}

          onClick={() => setSelected("courses")}

        >

          <h2>📚 Courses</h2>

          <h1>8</h1>

          <p>Completed Courses</p>

        </div>



        <div

          style={greenCard}

          onClick={() => setSelected("score")}

        >

          <h2>🏆 Score</h2>

          <h1>92%</h1>

          <p>Overall Performance</p>

        </div>



        <div

          style={orangeCard}

          onClick={() => setSelected("attendance")}

        >

          <h2>🔥 Attendance</h2>

          <h1>96%</h1>

          <p>Current Attendance</p>

        </div>



        <div

          style={pinkCard}

          onClick={() => setSelected("skills")}

        >

          <h2>⭐ Skills</h2>

          <h1>15</h1>

          <p>Skills Learned</p>

        </div>

      </div>



      {

        selected === "courses" && (

          <div style={detailBox}>

            <h2>

              Completed Courses

            </h2>

            <table style={tableStyle}>

              <thead>

                <tr>

                  <th>Course</th>

                  <th>Status</th>

                  <th>Progress</th>

                </tr>

              </thead>

              <tbody>

                <tr>

                  <td>Java Full Stack</td>

                  <td>Completed</td>

                  <td>85%</td>

                </tr>

                <tr>

                  <td>React JS</td>

                  <td>Completed</td>

                  <td>75%</td>

                </tr>

                <tr>

                  <td>PostgreSQL</td>

                  <td>Completed</td>

                  <td>90%</td>

                </tr>

              </tbody>

            </table>

          </div>

        )

      }



      {

        selected === "score" && (

          <div style={detailBox}>

            <h2>

              Overall Score

            </h2>

            <h1>

              92%

            </h1>

            <progress

              value="92"

              max="100"

              style={progressBar}

            />

            <p>

              Excellent Academic Performance

            </p>

          </div>

        )

      }



      {

        selected === "attendance" && (

          <div style={detailBox}>

            <h2>

              Attendance Details

            </h2>

            <p>

              Student :

              {user.name}

            </p>

            <p>

              Email :

              {user.email}

            </p>

            <p>

              Attendance :

              96%

            </p>

            <progress

              value="96"

              max="100"

              style={progressBar}

            />

          </div>

        )

      }



      {

        selected === "skills" && (

          <div style={detailBox}>

            <h2>

              Skills Learned

            </h2>

            <ul>

              <li>Java</li>

              <li>React JS</li>

              <li>Node JS</li>

              <li>PostgreSQL</li>

              <li>HTML</li>

              <li>CSS</li>

              <li>JavaScript</li>

            </ul>

          </div>

        )

      }

    </div>

  );

}



const detailBox = {

  background: "white",

  padding: "30px",

  marginTop: "40px",

  borderRadius: "20px",

  boxShadow:

  "0 10px 20px rgba(0,0,0,0.1)"

};



const tableStyle = {

  width: "100%",

  borderCollapse: "collapse",

  textAlign: "center"

};



const progressBar = {

  width: "100%",

  height: "25px"

};



const blueCard = {

  background: "#2563eb",

  color: "white",

  padding: "30px",

  borderRadius: "20px",

  textAlign: "center",

  cursor: "pointer"

};



const greenCard = {

  background: "#16a34a",

  color: "white",

  padding: "30px",

  borderRadius: "20px",

  textAlign: "center",

  cursor: "pointer"

};



const orangeCard = {

  background: "#f59e0b",

  color: "white",

  padding: "30px",

  borderRadius: "20px",

  textAlign: "center",

  cursor: "pointer"

};



const pinkCard = {

  background: "#ec4899",

  color: "white",

  padding: "30px",

  borderRadius: "20px",

  textAlign: "center",

  cursor: "pointer"

};
import React, { useState } from "react";

export default function Students() {

  const [selectedStudent, setSelectedStudent] = useState(null);

  const [students, setStudents] = useState([

    {
      id: 1,
      name: "Bhagya Lakshmi",
      email: "bhagya@gmail.com",
      course: "Java Full Stack",
      progress: "85%",
      status: "Active"
    },

    {
      id: 2,
      name: "Sai Kumar",
      email: "sai@gmail.com",
      course: "React JS",
      progress: "75%",
      status: "Active"
    },

    {
      id: 3,
      name: "Priya",
      email: "priya@gmail.com",
      course: "PostgreSQL",
      progress: "92%",
      status: "Completed"
    }

  ]);


  const changeStatus = (id) => {

    const updatedStudents = students.map((student) => {

      if (student.id === id) {

        return {

          ...student,

          status:

            student.status === "Active"

              ?

              "Completed"

              :

              "Active"

        };

      }

      return student;

    });

    setStudents(updatedStudents);

  };



  return (

    <div

      style={{

        minHeight: "100vh",

        background:

          "linear-gradient(135deg,#0f172a,#1e293b,#334155)",

        padding: "40px"

      }}

    >

      <h1

        style={{

          textAlign: "center",

          color: "white",

          fontSize: "45px"

        }}

      >

        👨‍🏫 Instructor Students

      </h1>



      <p

        style={{

          textAlign: "center",

          color: "#cbd5e1",

          marginBottom: "30px"

        }}

      >

        Manage Students and Track Progress

      </p>





      <div

        style={{

          background: "white",

          borderRadius: "20px",

          padding: "20px",

          boxShadow:

            "0 15px 35px rgba(0,0,0,0.25)"

        }}

      >

        <table

          style={{

            width: "100%",

            borderCollapse: "collapse"

          }}

        >

          <thead>

            <tr>

              <th style={th}>ID</th>

              <th style={th}>Student</th>

              <th style={th}>Email</th>

              <th style={th}>Course</th>

              <th style={th}>Progress</th>

              <th style={th}>Status</th>

              <th style={th}>Action</th>

            </tr>

          </thead>





          <tbody>

            {

              students.map((student) => (

                <tr key={student.id}>

                  <td style={td}>

                    {student.id}

                  </td>



                  <td style={td}>

                    {student.name}

                  </td>



                  <td style={td}>

                    {student.email}

                  </td>



                  <td style={td}>

                    {student.course}

                  </td>





                  <td style={td}>

                    <div

                      style={{

                        width: "120px",

                        background: "#e2e8f0",

                        borderRadius: "20px",

                        margin: "auto"

                      }}

                    >

                      <div

                        style={{

                          width: student.progress,

                          background: "#22c55e",

                          color: "white",

                          borderRadius: "20px",

                          padding: "5px"

                        }}

                      >

                        {student.progress}

                      </div>

                    </div>

                  </td>





                  <td style={td}>

                    <button

                      onClick={() =>

                        changeStatus(student.id)

                      }

                      style={{

                        background:

                          student.status === "Active"

                            ?

                            "#22c55e"

                            :

                            "#3b82f6",

                        color: "white",

                        border: "none",

                        padding: "8px 18px",

                        borderRadius: "20px",

                        cursor: "pointer",

                        fontWeight: "bold"

                      }}

                    >

                      {student.status}

                    </button>

                  </td>





                  <td style={td}>

                    <button

                      style={viewBtn}

                      onClick={() =>

                        setSelectedStudent(student)

                      }

                    >

                      👁 View

                    </button>

                  </td>

                </tr>

              ))

            }

          </tbody>

        </table>

      </div>





      {

        selectedStudent && (

          <div style={detailBox}>

            <div

              style={{

                display: "flex",

                justifyContent: "space-between",

                alignItems: "center"

              }}

            >

              <h2

                style={{

                  color: "#2563eb",

                  margin: 0

                }}

              >

                👨‍🎓 Student Details

              </h2>



              <button

                onClick={() =>

                  setSelectedStudent(null)

                }

                style={{

                  background: "transparent",

                  border: "none",

                  fontSize: "22px",

                  cursor: "pointer"

                }}

              >

                ✖

              </button>

            </div>



            <hr />



            <p>

              <b>Name :</b>

              {selectedStudent.name}

            </p>



            <p>

              <b>Email :</b>

              {selectedStudent.email}

            </p>



            <p>

              <b>Course :</b>

              {selectedStudent.course}

            </p>



            <p>

              <b>Progress :</b>

              {selectedStudent.progress}

            </p>



            <p>

              <b>Status :</b>

              {selectedStudent.status}

            </p>

          </div>

        )

      }

    </div>

  );

}



const th = {

  background:

    "linear-gradient(90deg,#2563eb,#7c3aed)",

  color: "white",

  padding: "15px"

};



const td = {

  padding: "15px",

  textAlign: "center",

  borderBottom:

    "1px solid #e2e8f0"

};



const viewBtn = {

  background:

    "linear-gradient(90deg,#8b5cf6,#6366f1)",

  color: "white",

  border: "none",

  padding: "8px 18px",

  borderRadius: "20px",

  cursor: "pointer",

  fontWeight: "bold"

};



const detailBox = {

  position: "fixed",

  top: "50%",

  left: "50%",

  transform:

    "translate(-50%,-50%)",

  background: "white",

  padding: "30px",

  width: "400px",

  borderRadius: "20px",

  boxShadow:

    "0 20px 45px rgba(0,0,0,0.35)"

};


import React from "react";

export default function Courses() {

const courses=[

{

id:1,

title:"Java Full Stack",

instructor:"Mr. Ramesh",

duration:"6 Months",

students:120,

status:"Active"

},

{

id:2,

title:"React JS",

instructor:"Mrs. Anitha",

duration:"3 Months",

students:80,

status:"Active"

},

{

id:3,

title:"Python Programming",

instructor:"Mr. Suresh",

duration:"4 Months",

students:95,

status:"Completed"

},

{

id:4,

title:"Database Management",

instructor:"Mr. Kiran",

duration:"2 Months",

students:60,

status:"Upcoming"

}

];

return(

<div

style={{

minHeight:"100vh",

background:"#f3f4f6",

padding:"40px"

}}

>

<h1

style={{

textAlign:"center",

fontSize:"40px",

color:"#1e293b",

marginBottom:"10px"

}}

>

📚 Courses Management

</h1>

<p

style={{

textAlign:"center",

color:"gray",

marginBottom:"40px"

}}

>

Manage and Explore Available Courses

</p>


<div

style={{

display:"grid",

gridTemplateColumns:

"repeat(auto-fit,minmax(300px,1fr))",

gap:"30px"

}}

>

{

courses.map((course)=>(

<div

key={course.id}

style={{

background:"white",

padding:"25px",

borderRadius:"20px",

boxShadow:

"0 10px 25px rgba(0,0,0,0.1)",

transition:"0.3s"

}}

>

<h2

style={{

color:"#2563eb",

marginBottom:"20px"

}}

>

{course.title}

</h2>


<p>

👨‍🏫

<b>

Instructor :

</b>

{course.instructor}

</p>


<p>

⏳

<b>

Duration :

</b>

{course.duration}

</p>


<p>

👨‍🎓

<b>

Students :

</b>

{course.students}

</p>


<p>

📌

<b>

Status :

</b>

<span

style={{

color:

course.status==="Active"

?

"green"

:

course.status==="Completed"

?

"#2563eb"

:

"orange",

fontWeight:"bold"

}}

>

{course.status}

</span>

</p>


<button

style={{

width:"100%",

padding:"12px",

marginTop:"20px",

background:"#2563eb",

color:"white",

border:"none",

borderRadius:"10px",

cursor:"pointer",

fontSize:"16px"

}}

onClick={()=>

alert(

"Successfully Enrolled in "

+

course.title

)

}

>

Enroll Now

</button>

</div>

))

}

</div>

</div>

)

}
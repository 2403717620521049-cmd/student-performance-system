import { useEffect,useState } from "react";
import axios from "axios";

function Dashboard(){

 const [students,setStudents]=useState([]);

 useEffect(()=>{
   axios
   .get("http://localhost:5000/api/students")
   .then(res=>setStudents(res.data));
 },[]);

 return (
  <>
   <h1>Student Performance</h1>

   {students.map((s)=>(
     <div key={s._id}>
       <h3>{s.name}</h3>
       <p>{s.subject}</p>
       <p>{s.marks}</p>
     </div>
   ))}
  </>
 );
}

export default Dashboard;
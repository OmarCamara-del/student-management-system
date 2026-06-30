import { useEffect,useState } from "react";
import API from "../services/api";

export default function Students(){

    const [students,setStudents]=useState([]);

    useEffect(()=>{

        loadStudents();

    },[]);

    const loadStudents=async()=>{

        try{

            const res=await API.get("/students");

            setStudents(res.data.data);

        }catch(err){

            console.log(err);

        }

    }

    return (

<Layout>

...

            <h2>Students</h2>

            <table className="table">

                <thead>

                    <tr>

                        <th>Name</th>
                        <th>Email</th>
                        <th>Program</th>

                    </tr>

                </thead>

                <tbody>

                    {students.map(student=>(

                        <tr key={student.id}>

                            <td>

                                {student.firstName} {student.lastName}

                            </td>

                            <td>{student.email}</td>

                            <td>{student.program}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </Layout>
);

}
import {useEffect,useState} from "react";
import API from "../services/api";

export default function Enrollments(){

    const [enrollments,setEnrollments]=useState([]);

    useEffect(()=>{

        loadEnrollments();

    },[]);

    const loadEnrollments=async()=>{

        const res=await API.get("/enrollments");

        setEnrollments(res.data.data);

    }

    return(

        <div className="container mt-5">

            <h2>Enrollments</h2>

            <table className="table">

                <thead>

                    <tr>

                        <th>Student ID</th>
                        <th>Course ID</th>

                    </tr>

                </thead>

                <tbody>

                    {enrollments.map(item=>(

                        <tr key={item.id}>

                            <td>{item.studentId}</td>

                            <td>{item.courseId}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}
import {useEffect,useState} from "react";
import API from "../services/api";

export default function Courses(){

    const [courses,setCourses]=useState([]);

    useEffect(()=>{

        loadCourses();

    },[]);

    const loadCourses=async()=>{

        const res=await API.get("/courses");

        setCourses(res.data.data);

    }

    return(

        <div className="container mt-5">

            <h2>Courses</h2>

            <table className="table">

                <thead>

                    <tr>

                        <th>Code</th>
                        <th>Title</th>
                        <th>Credits</th>

                    </tr>

                </thead>

                <tbody>

                    {courses.map(course=>(

                        <tr key={course.id}>

                            <td>{course.courseCode}</td>

                            <td>{course.courseTitle}</td>

                            <td>{course.creditHours}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}
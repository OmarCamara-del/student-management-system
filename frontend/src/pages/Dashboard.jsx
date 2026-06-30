import Layout from "../components/Layout";
import { useEffect,useState } from "react";
import API from "../services/api";

export default function Dashboard(){

    const [profile,setProfile]=useState({});

    useEffect(()=>{

        loadProfile();

    },[]);

    const loadProfile=async()=>{

        const res=await API.get("/auth/profile");

        setProfile(res.data.data);

    }

    return(

        <Layout>

            <h2 className="mb-4">

                Welcome,

                {" "}

                {profile.firstName}

            </h2>

            <div className="row">

                <div className="col-md-4">

                    <div className="card shadow">

                        <div className="card-body">

                            <h5>Total Students</h5>

                            <h2>1</h2>

                        </div>

                    </div>

                </div>

                <div className="col-md-4">

                    <div className="card shadow">

                        <div className="card-body">

                            <h5>Total Courses</h5>

                            <h2>1</h2>

                        </div>

                    </div>

                </div>

                <div className="col-md-4">

                    <div className="card shadow">

                        <div className="card-body">

                            <h5>Enrollments</h5>

                            <h2>1</h2>

                        </div>

                    </div>

                </div>

            </div>

        </Layout>

    );

}
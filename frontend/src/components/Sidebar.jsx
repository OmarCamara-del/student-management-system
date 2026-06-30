import { Link } from "react-router-dom";

export default function Sidebar() {

    return (

        <div
            className="bg-dark text-white p-3"
            style={{
                width: "250px",
                minHeight: "100vh"
            }}
        >

            <h3 className="mb-4">

                🎓 SMS

            </h3>

            <ul className="nav flex-column">

                <li className="nav-item">

                    <Link className="nav-link text-white" to="/dashboard">

                        <i className="bi bi-speedometer2"></i> Dashboard

                    </Link>

                </li>

                <li>

                    <Link className="nav-link text-white" to="/students">

                        <i className="bi bi-people"></i> Students

                    </Link>

                </li>

                <li>

                    <Link className="nav-link text-white" to="/courses">

                        <i className="bi bi-book"></i> Courses

                    </Link>

                </li>

                <li>

                    <Link className="nav-link text-white" to="/enrollments">

                        <i className="bi bi-journal-check"></i> Enrollments

                    </Link>

                </li>

            </ul>

        </div>

    );

}
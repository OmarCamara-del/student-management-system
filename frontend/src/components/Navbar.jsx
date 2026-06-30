export default function Navbar() {

    const logout = () => {

        localStorage.removeItem("token");

        window.location.href="/";

    }

    return (

        <nav className="navbar navbar-light bg-light shadow-sm">

            <div className="container-fluid">

                <h4>

                    Student Management System

                </h4>

                <button
                    onClick={logout}
                    className="btn btn-danger"
                >

                    Logout

                </button>

            </div>

        </nav>

    );

}
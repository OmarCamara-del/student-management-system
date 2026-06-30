import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Grades() {
  return (
    <>
      <Navbar />

      <div className="d-flex">

        <Sidebar />

        <div className="container mt-4">
          <h2>Grades</h2>
          <p>Grades management page.</p>
        </div>

      </div>
    </>
  );
}

export default Grades;
import { Link, useNavigate } from "react-router-dom";

import "../styles/navbar.css";

function Navbar() {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");

        navigate("/");

    };

    return (

        <div className="navbar">

            <div className="nav-links">

                <Link
                    className="nav-link"
                    to="/dashboard"
                >
                    Dashboard
                </Link>

                <Link
                    className="nav-link"
                    to="/projects"
                >
                    Projects
                </Link>

                <Link
                    className="nav-link"
                    to="/tasks"
                >
                    Tasks
                </Link>

            </div>

            <button
                className="logout-btn"
                onClick={logout}
            >
                Logout
            </button>

        </div>

    );

}

export default Navbar;
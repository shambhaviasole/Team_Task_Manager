import { Link } from "react-router-dom";

import "../styles/home.css";

function Home() {

    return (

        <div className="home-container">

            <div className="overlay">

                <div className="home-content">

                    <h1 className="home-title">
                        Team Task Management System
                    </h1>

                    <p className="home-description">

                        Manage projects, assign tasks,
                        track progress, and collaborate
                        efficiently with your team.

                    </p>

                    <div className="home-buttons">

                        <Link
                            to="/login"
                            className="home-btn login-btn"
                        >
                            Login
                        </Link>

                        <Link
                            to="/signup"
                            className="home-btn signup-btn"
                        >
                            Signup
                        </Link>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Home;
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import API from "../services/api";

import "../styles/auth.css";

function Login() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await API.post(
                "/api/auth/login",
                formData
            );

            localStorage.setItem(
                "token",
                response.data.token
            );

            alert("Login Successful");

            navigate("/dashboard");

        } catch(error){

            alert(error.response.data.message);

        }

    };

    return (

        <div className="auth-container">

            <div className="auth-card">

                <h1 className="auth-title">
                    Login
                </h1>

                <form onSubmit={handleSubmit}>

                    <input
                        className="auth-input"
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        onChange={handleChange}
                    />

                    <input
                        className="auth-input"
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        onChange={handleChange}
                    />

                    <button
                        className="auth-button"
                        type="submit"
                    >
                        Login
                    </button>

                </form>

                <div className="auth-link">

                    <Link to="/signup">
                        Create New Account
                    </Link>

                </div>

            </div>

        </div>

    );

}

export default Login;
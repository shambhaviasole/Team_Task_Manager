import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import API from "../services/api";

import "../styles/auth.css";

function Signup() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({

        name: "",
        email: "",
        password: "",
        role: "member"

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

            await API.post(
                "/api/auth/signup",
                formData
            );

            alert("Signup Successful");

            navigate("/");

        } catch(error){

            alert(error.response.data.message);

        }

    };

    return (

        <div className="auth-container">

            <div className="auth-card">

                <h1 className="auth-title">
                    Signup
                </h1>

                <form onSubmit={handleSubmit}>

                    <input
                        className="auth-input"
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        onChange={handleChange}
                    />

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

                    <select
                        className="auth-input"
                        name="role"
                        onChange={handleChange}
                    >

                        <option value="member">
                            Member
                        </option>

                        <option value="admin">
                            Admin
                        </option>

                    </select>

                    <button
                        className="auth-button"
                        type="submit"
                    >
                        Signup
                    </button>

                </form>

                <div className="auth-link">

                    <Link to="/login">
                        Already have account?
                    </Link>

                </div>

            </div>

        </div>

    );

}

export default Signup;
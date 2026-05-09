import { useEffect, useState } from "react";

import API from "../services/api";

import Navbar from "../components/Navbar";

import "../styles/projects.css";

function Projects() {

    const [projects, setProjects] = useState([]);

    const [formData, setFormData] = useState({
        title: "",
        description: ""
    });

    useEffect(() => {

        fetchProjects();

    }, []);

    const fetchProjects = async () => {

        try {

            const response =
                await API.get("/api/projects");

            setProjects(response.data);

        } catch(error){

            console.log(error);

        }

    };

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
                "/api/projects",
                formData
            );

            alert("Project Created");

            setFormData({
                title: "",
                description: ""
            });

            fetchProjects();

        } catch(error){

            console.log(error);

        }

    };

    return (

        <>

            <Navbar />

            <div className="projects-container">

                <h1>Projects</h1>

                <form
                    className="project-form"
                    onSubmit={handleSubmit}
                >

                    <input
                        className="project-input"
                        type="text"
                        name="title"
                        placeholder="Project Title"
                        value={formData.title}
                        onChange={handleChange}
                    />

                    <input
                        className="project-input"
                        type="text"
                        name="description"
                        placeholder="Project Description"
                        value={formData.description}
                        onChange={handleChange}
                    />

                    <button
                        className="project-btn"
                        type="submit"
                    >
                        Create Project
                    </button>

                </form>

                {

                    projects.map((project) => (

                        <div
                            className="project-card"
                            key={project._id}
                        >

                            <h2>{project.title}</h2>

                            <p>{project.description}</p>

                        </div>

                    ))

                }

            </div>

        </>

    );

}

export default Projects;
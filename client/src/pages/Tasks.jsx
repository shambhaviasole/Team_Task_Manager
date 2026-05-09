import { useEffect, useState } from "react";

import API from "../services/api";

import Navbar from "../components/Navbar";

import "../styles/tasks.css";

function Tasks() {

    const [tasks, setTasks] = useState([]);

    const [projects, setProjects] = useState([]);

    const [users, setUsers] = useState([]);

    const [formData, setFormData] = useState({

        title: "",
        description: "",
        project: "",
        assignedTo: "",
        deadline: "",
        priority: "Medium"

    });

    useEffect(() => {

        fetchTasks();

        fetchProjects();

        fetchUsers();

    }, []);

    const fetchTasks = async () => {

        try {

            const response =
                await API.get("/api/tasks");

            setTasks(response.data);

        } catch(error){

            console.log(error);

        }

    };

    const fetchProjects = async () => {

        try {

            const response =
                await API.get("/api/projects");

            setProjects(response.data);

        } catch(error){

            console.log(error);

        }

    };

    const fetchUsers = async () => {

        try {

            const response =
                await API.get("/api/users");

            setUsers(response.data);

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
                "/api/tasks",
                formData
            );

            alert("Task Created");

            setFormData({

                title: "",
                description: "",
                project: "",
                assignedTo: "",
                deadline: "",
                priority: "Medium"

            });

            fetchTasks();

        } catch(error){

            console.log(error);

        }

    };

    const updateStatus = async (id, status) => {

        try {

            await API.put(

                `/api/tasks/${id}/status`,

                { status }

            );

            fetchTasks();

        } catch(error){

            console.log(error);

        }

    };

    return (

        <>

            <Navbar />

            <div className="tasks-container">

                <h1 className="tasks-title">
                    Task Management
                </h1>

                <form
                    className="task-form"
                    onSubmit={handleSubmit}
                >

                    <input
                        className="task-input"
                        type="text"
                        name="title"
                        placeholder="Task Title"
                        value={formData.title}
                        onChange={handleChange}
                    />

                    <textarea
                        className="task-input"
                        name="description"
                        placeholder="Task Description"
                        value={formData.description}
                        onChange={handleChange}
                    />

                    <select
                        className="task-input"
                        name="project"
                        value={formData.project}
                        onChange={handleChange}
                    >

                        <option value="">
                            Select Project
                        </option>

                        {

                            projects.map((project) => (

                                <option
                                    key={project._id}
                                    value={project._id}
                                >

                                    {project.title}

                                </option>

                            ))

                        }

                    </select>

                    <select
                        className="task-input"
                        name="assignedTo"
                        value={formData.assignedTo}
                        onChange={handleChange}
                    >

                        <option value="">
                            Select Member
                        </option>

                        {

                            users.map((user) => (

                                <option
                                    key={user._id}
                                    value={user._id}
                                >

                                    {user.name}

                                </option>

                            ))

                        }

                    </select>

                    <input
                        className="task-input"
                        type="date"
                        name="deadline"
                        value={formData.deadline}
                        onChange={handleChange}
                    />

                    <select
                        className="task-input"
                        name="priority"
                        value={formData.priority}
                        onChange={handleChange}
                    >

                        <option value="Low">
                            Low
                        </option>

                        <option value="Medium">
                            Medium
                        </option>

                        <option value="High">
                            High
                        </option>

                    </select>

                    <button
                        className="task-btn"
                        type="submit"
                    >
                        Create Task
                    </button>

                </form>

                <div className="tasks-grid">

                    {

                        tasks.map((task) => (

                            <div
                                className="task-card"
                                key={task._id}
                            >

                                <h2>
                                    {task.title}
                                </h2>

                                <p>
                                    {task.description}
                                </p>

                                <p>

                                    <strong>
                                        Project:
                                    </strong>

                                    {

                                        task.project?.title

                                    }

                                </p>

                                <p>

                                    <strong>
                                        Assigned To:
                                    </strong>

                                    {

                                        task.assignedTo?.name

                                    }

                                </p>

                                <p>

                                    <strong>
                                        Priority:
                                    </strong>

                                    {task.priority}

                                </p>

                                <p>

                                    <strong>
                                        Deadline:
                                    </strong>

                                    {

                                        new Date(
                                            task.deadline
                                        ).toLocaleDateString()

                                    }

                                </p>

                                <p
                                    className={`status ${
                                        task.status === "Pending"
                                        ? "pending"
                                        : task.status === "In Progress"
                                        ? "progress"
                                        : "completed"
                                    }`}
                                >

                                    {task.status}

                                </p>

                                <button
                                    className="task-btn"
                                    onClick={() =>
                                        updateStatus(
                                            task._id,
                                            "Completed"
                                        )
                                    }
                                >
                                    Mark Completed
                                </button>

                            </div>

                        ))

                    }

                </div>

            </div>

        </>

    );

}

export default Tasks;
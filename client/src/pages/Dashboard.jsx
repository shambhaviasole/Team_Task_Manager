import { useEffect, useState } from "react";

import API from "../services/api";

import Navbar from "../components/Navbar";

import "../styles/dashboard.css";

function Dashboard() {

    const [data, setData] = useState({});

    useEffect(() => {

        fetchDashboard();

    }, []);

    const fetchDashboard = async () => {

        try {

            const response =
                await API.get("/api/dashboard");

            setData(response.data);

        } catch(error){

            console.log(error);

        }

    };

    return (

        <>

            <Navbar />

            <div className="dashboard-container">

                <h1 className="dashboard-title">
                    Dashboard
                </h1>

                <div className="stats-grid">

                    <div className="stat-card">
                        <h2>Total Projects</h2>
                        <p>{data.totalProjects}</p>
                    </div>

                    <div className="stat-card">
                        <h2>Total Tasks</h2>
                        <p>{data.totalTasks}</p>
                    </div>

                    <div className="stat-card">
                        <h2>Completed</h2>
                        <p>{data.completedTasks}</p>
                    </div>

                    <div className="stat-card">
                        <h2>Pending</h2>
                        <p>{data.pendingTasks}</p>
                    </div>

                    <div className="stat-card">
                        <h2>In Progress</h2>
                        <p>{data.inProgressTasks}</p>
                    </div>

                    <div className="stat-card">
                        <h2>Overdue</h2>
                        <p>{data.overdueTasks}</p>
                    </div>

                    <div className="stat-card">
                        <h2>High Priority</h2>
                        <p>{data.highPriorityTasks}</p>
                    </div>

                </div>

            </div>

        </>

    );

}

export default Dashboard;
import React from "react";
import Navbar from "../components/Navbar";
import "./Dashboard.css";
import BillForm from "../components/BillForm";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <div className="dashboard-content">
          <p>Welcome to the BlinkWash!</p>
          <BillForm />
        </div>
      </div>
    </>
  );
};

export default Dashboard;

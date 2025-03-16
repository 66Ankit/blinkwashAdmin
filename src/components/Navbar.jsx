import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import "./Navbar.css"; // Import Navbar styles

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h2>BlinkWash</h2>
      {/* {user && <span>Welcome, {user.email}</span>} */}
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;

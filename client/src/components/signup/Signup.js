import React, { useState } from "react";
import { Button } from "@mui/material";
import "./signup.css";

const Signup = () => {
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form className="signup-form-container">
        <label>Username</label>
        <input
          type="text"
          placeholder="username"
          onChange={handleInputChange}
          value={userFormData.username}
          required
        ></input>
        <label>Email</label>
        <input
          type="text"
          placeholder="email"
          onChange={handleInputChange}
          value={userFormData.email}
          required
        ></input>
        <label>Password</label>
        <input
          type="password"
          onChange={handleInputChange}
          value={userFormData.password}
          required
        ></input>
        <br></br>
        <Button variant="contained" size="large">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Signup;

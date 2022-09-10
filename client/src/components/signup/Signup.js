import React, { useState } from "react";

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
      <form>
        <h4>Username</h4>
        <input
          type="text"
          placeholder="username"
          onChange={handleInputChange}
          value={userFormData.username}
          required
        ></input>
        <h4>Email</h4>
        <input
          type="text"
          placeholder="email"
          onChange={handleInputChange}
          value={userFormData.email}
          required
        ></input>
        <h4>Password</h4>
        <input
          type="password"
          onChange={handleInputChange}
          value={userFormData.password}
          required
        ></input>
      </form>
    </div>
  );
};

export default Signup;

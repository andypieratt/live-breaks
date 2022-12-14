import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { Button } from "@mui/material";

const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginFormData({ ...loginFormData, [name]: value });
  };

  const navigate = useNavigate();
  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   handleSubmit(async (submitData) => {
  //     // console.log(submitData);
  //     try {
  //       const { data } = await login({
  //         variables: { ...submitData },
  //       });
  //       // console.log(data);
  //       Auth.login(data.login.token);
  //       navigate("/main");
  //     } catch (err) {
  //       console.error(err);
  //     }

  //     setloginFormData({
  //       email: "",
  //       password: "",
  //     });
  //   })(event);
  // };
  return (
    <>
      <form className="login-form-container">
        <label>Email</label>
        <input
          required={true}
          type="text"
          name="email"
          value={loginFormData.email}
          onChange={handleInputChange}
        ></input>
        <label>Password</label>
        <input
          type="password"
          require={true}
          name="password"
          value={loginFormData.password}
          onChange={handleInputChange}
        ></input>
        <br></br>
        <Button variant="contained" size="large">
          Submit
        </Button>
        <div className="signup-router">
          <h4>
            If you don't have an account, please <a href="/signup">Signup!</a>
          </h4>
        </div>
      </form>
    </>
  );
};

export default Login;

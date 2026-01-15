import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [datas, setData] = useState({
    LoginId: 0,
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...datas, [name]: value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const users = JSON.parse(localStorage.getItem("SignupData")) || [];

  //   const existingUser = users.find(
  //     (user) => user.email === data.email && user.password === data.password
  //   );

  //   if (!existingUser) {
  //     alert("Invalid Email or Password");
  //     return;
  //   }

  //   // Save logged-in user (session-like)
  //   localStorage.setItem(
  //     "LoggedInUser",
  //     JSON.stringify({
  //       email: existingUser.email,
  //       username: existingUser.username,
  //     })
  //   );

  //   navigate("/home");
  // };



  const handleSubmit = async (e) => {
    e.preventDefault();

    let api = "http://localhost:3000/signup";
    let res = await axios.get(api);
    let user = await res.data;

    let exsistUser = user.find(
      (e) => e.email == datas.email && e.password == datas.password
    );
    
    if (!exsistUser) {
      alert("Incorrect Credentials");
    }

    let LoginData = {
      LoginId: exsistUser.SignupID,
    };

 localStorage.setItem("LoginID",JSON.stringify(LoginData))
 navigate("/");

    // let api2 = "http://localhost:3000/Login";
    // let storingData = await axios.post(api2, datas);
    // if (storingData) {
    //   // navigate("/");
    // }
  };

  return (
    <div className="login-wrapper">
      <div className="electric-border">
        <form className="login-card" onSubmit={handleSubmit}>
          <h2>Welcome Back</h2>

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          <button type="submit">Login</button>

          <p>
            Don’t have an account?
            <span onClick={() => navigate("/")}> Sign Up</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

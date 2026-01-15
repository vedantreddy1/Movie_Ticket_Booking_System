import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/Signup.css";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    SignupID: 0,
    username: "",
    email: "",
    PNo: "",
    password: "",
    Cpass: "",
  });
  useEffect(() => {
    const storedID = JSON.parse(localStorage.getItem("SignupID")) || 0;
    setForm((e) => ({ ...e, SignupID: storedID }));
  }, []);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (form.password !== form.Cpass) {
  //     return setError("Passwords do not match");
  //   }

  //   const users = JSON.parse(localStorage.getItem("SignupData")) || [];

  //   const emailExists = users.some((u) => u.email === form.email);
  //   if (emailExists) {
  //     return setError("Email already registered");
  //   }

  //   users.push({
  //     id: users.length + 1,
  //     username: form.username,
  //     email: form.email,
  //     phone: form.PNo,
  //     password: form.password,
  //   });

  //   localStorage.setItem("SignupData", JSON.stringify(users));
  //   navigate("/login");
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !form.username ||
      !form.email ||
      !form.PNo ||
      !form.password ||
      !form.Cpass
    ) {
      setError("All fields are required");
      return;
    }

    // 2. Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError("Invalid email format");
      return;
    }

    // 3. Phone number validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(form.PNo)) {
      setError("Phone number must be 10 digits");
      return;
    }

    // 4. Password length validation
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    // 5. Password match validation
    if (form.password !== form.Cpass) {
      setError("Password and Confirm Password do not match");
      return;
    }
    let api = "http://localhost:3000/signup";
    let res = await axios.get(api);
    let user = res.data;
    let existUser = user.find((u) => u.email == form.email);

    if (existUser) {
      setError("email is already exsist or try with new email");
    }

    let newID = Math.floor(Math.random() * 10000);
    const payload = {
      ...form,
      SignupID: newID,
    };
    await axios.post(api, payload);
    localStorage.setItem("SignupID", JSON.stringify(newID));
    navigate("/login");
  };

  return (
    <div className="signup-wrapper">
      {/* <Particles
        className="particles-bg"
        options={{
          background: {
            color: { value: "#050816" },
          },
          fpsLimit: 60,
          particles: {
            color: { value: "#00eaff" },
            links: {
              enable: true,
              color: "#00eaff",
              distance: 150,
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1.2,
            },
            number: {
              value: 80,
              density: { enable: true, area: 800 },
            },
            opacity: { value: 0.6 },
            size: { value: 2 },
          },
        }}
      /> */}
      <div className="electric-borderr">
        <form className="signup-card" onSubmit={handleSubmit}>
          <h2>Create Account</h2>
          {error && <p className="error-text">{error}</p>}

          <input
            name="username"
            placeholder="Username"
            onChange={handleChange}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            name="PNo"
            placeholder="Phone Number"
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <input
            name="Cpass"
            type="password"
            placeholder="Confirm Password"
            onChange={handleChange}
          />

          <button type="submit">Sign Up</button>

          <p>
            Already have an account?
            <span onClick={() => navigate("/login")}> Login</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;

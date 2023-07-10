import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Grid, Paper } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    sessionStorage.clear();
  })

  const [val, setVal] = useState({
    id: new Date().getTime(),
    email: "",
    password: "",
  });

  const handleValue = (e) => {
    const { name, value } = e.target;
    setVal((prevVal) => ({ ...prevVal, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const { email, password } = val;

    if (email === "" || password === "") {
      window.alert("Fill in the email and password.");
    } else {
      fetch("http://localhost:8000/user")
        .then((res) => res.json())
        .then((data) => {
          const user = data.find((user) => user.emailvalue === email);

          if (user) {
            if (user.passwordvalue === password) {
              Swal.fire("Login Success!", "Welcome back to HomePage.", "success");
              sessionStorage.setItem('email',email);
              navigate("/");
            } else {
              window.alert("Please enter the correct password.");
            }
          } else {
            window.alert("Please enter a valid email.");
          }
        })
        .catch((err) => {
          window.alert("Login failed: please run the db.json server " + err.message);
        });
    }
  };

  const gridStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px",
  };

  const paperStyle = {
    backgroundColor: "skyblue",
    padding: "20px",
    height: "80vh",
    width: "60vh",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  };

  const avatarStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const textFieldStyle = {
    margin: "10px",
  };

  return (
    <Grid style={gridStyle}>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle} src="/broken-image.jpg" />
          <h1>Let's Connect</h1>
        </Grid>

        <form>
          <TextField
            style={textFieldStyle}
            name="email"
            id="email"
            onChange={handleValue}
            value={val.email}
            label="email"
            placeholder="Enter the email"
            type="text"
            fullWidth
            required
          />
          <TextField
            style={textFieldStyle}
            name="password"
            id="password"
            onChange={handleValue}
            value={val.password}
            label="Password"
            placeholder="Enter the password"
            type="password"
            fullWidth
            required
          />
          <Button variant="contained" onClick={handleLogin}>
            Login
          </Button>
          <div className="sign my-3">
            <span>Don't have an account?</span>
            <span>
              <NavLink exact to="/register">
                Register Now
              </NavLink>
            </span>
          </div>
        </form>
      </Paper>
    </Grid>
  );
};

export default Login;

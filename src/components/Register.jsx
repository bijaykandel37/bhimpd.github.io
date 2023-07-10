import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Swal from "sweetalert2";
import { Grid, Paper } from "@mui/material";
import "./style.css";

const Register = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    id: new Date().getTime(),
    validationuser: "",
    validationemail: "",
    validationpassword: "",
    validationconfirmpassword: "",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const [visible, setVisible] = useState(true);
  const [visiblebtn, setVisiblebtn] = useState(true);

  const createAccount = () => {
    const {
      validationuser,
      validationemail,
      validationpassword,
      validationconfirmpassword,
    } = inputs;

    if (validationemail === "" || validationuser === "") {
      window.alert("Fill in the username and email.");
    } else if (
      validationpassword !== "" &&
      validationconfirmpassword !== "" &&
      validationpassword === validationconfirmpassword
    ) {
      const allvalues = {
        uservalue: validationuser,
        emailvalue: validationemail,
        passwordvalue: validationpassword,
        confirmpasswordvalue: validationconfirmpassword,
      };

      fetch("http://localhost:8000/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(allvalues),
      })
        .then((res) => res.json())
        .then((data) => {
          Swal.fire("Good job!", "Your account is created.", "success").then(
            () => {
              navigate("/login"); // Redirect to the login page
            }
          );
        })
        .catch((err) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Form failed...",
          });
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Passwords don't match...",
      });
    }
  };

  const formstyle = {
    border: "2px solid black",
  };

  return (
    <>
      <Grid>
        <Paper>
          <div
            className="container d-flex flex-column align-items-center justify-content-center my-5 formstyle"
            style={formstyle}
          >
            <h1 className="reg text-center my-3">Register Details</h1>
            <form className="d-flex flex-column g-3 align-items-center">
              {/* Rest of the form inputs */}
              <div className="col-md-12">
                <label htmlFor="validationuser" className="form-label">
                  User Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationuser"
                  name="validationuser"
                  value={inputs.validationuser}
                  onChange={handleInputs}
                  required
                  autoComplete="true"
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="validationemail" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="validationemail"
                  name="validationemail"
                  value={inputs.validationemail}
                  onChange={handleInputs}
                  required
                  autoComplete="true"
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="validationpassword" className="form-label">
                  Password
                </label>
                <input
                  type={visiblebtn ? "password" : "text"}
                  className="form-control"
                  id="validationpassword"
                  name="validationpassword"
                  value={inputs.validationpassword}
                  onChange={handleInputs}
                  required
                  autoComplete="new-password"
                />
                <div
                  className="visiblebtn"
                  onClick={() => setVisiblebtn(!visiblebtn)}
                >
                  {visiblebtn ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </div>
              </div>
              <div className="col-md-12">
                <label
                  htmlFor="validationconfirmpassword"
                  className="form-label"
                >
                  Confirm Password
                </label>
                <input
                  type={visible ? "password" : "text"}
                  className="form-control"
                  id="validationconfirmpassword"
                  name="validationconfirmpassword"
                  value={inputs.validationconfirmpassword}
                  onChange={handleInputs}
                  required
                  autoComplete="new-password"
                />
                <div
                  className="visiblebtn"
                  onClick={() => setVisible(!visible)}
                >
                  {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </div>
              </div>

              <div className="col-12 my-3">
                <button className="btn btn-primary" onClick={createAccount}>
                  Create Account
                </button>
              </div>
            </form>
            <div className="sign my-3">
              <span>Already have an account?</span>
              <span>
                <NavLink exact to="/login">
                  Sign in
                </NavLink>
             </span>
            </div>
          </div>
        </Paper>
      </Grid>
    </>
  );
};

export default Register;

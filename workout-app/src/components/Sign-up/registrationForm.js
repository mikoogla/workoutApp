import React, { useState, setState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ".//style.css";
function RegistrationForm() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = () => {
    console.log(firstName, lastName, email, password, confirmPassword);
  };

  return (
    <div class="main">
      <div className="form">
        <nav class="bg-dark navbar-dark navbar">
          <div className="row col-12 d-flex justify-content-center text-white">
            <h3>REGISTRATION</h3>
          </div>
        </nav>
        <div className="form-body">
          <TextField
          className="form_input"
            id="firstName"
            label="First name"
            variant="outlined"
            onChange={(e) => handleInputChange(e)}
          />

          <div class="break"></div>

          <TextField
          className="form_input"
           
            id="secondName"
            label="Second name"
            variant="outlined"
            onChange={(e) => handleInputChange(e)}
          />

          <div class="break"></div>

          <TextField 
          className="form_input"
            id="password"
            label="Password"
            variant="outlined"
            onChange={(e) => handleInputChange(e)}
          />

          <div class="break"></div>

          <TextField
          className="form_input"
            id="rePassword"
            label="Re-password"
            variant="outlined"
            onChange={(e) => handleInputChange(e)}
          />
        </div>
      </div>

      <div class="footer">
        <Button
          className="submitting"
          variant="contained"
          color="success"
          onClick={() => handleSubmit()}
        >
          Register
        </Button>
        {/* <button onClick={() => handleSubmit()} type="submit" class="btn">
          Register
        </button> */}
      </div>
    </div>
  );
}

export default RegistrationForm;

import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import styles from "./registrationFormStyle.module.css";

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
    <div>
      <div className={styles.form}>
        <nav class="bg-dark navbar-dark navbar">
          <div className="row col-12 d-flex justify-content-center text-white">
            <div className={styles.title}>Registration</div>
          </div>
        </nav>
        <div className="form-body">
          <TextField
            style={{ margin: "5px 0 5px" }}
            className={styles.form__input}
            id="firstName"
            label="First name"
            variant="outlined"
            onChange={(e) => handleInputChange(e)}
          />

          <div class="break"></div>

          <TextField
            style={{ margin: "5px 0 5px" }}
            className={styles.form__input}
            id="userName"
            label="Username"
            variant="outlined"
            onChange={(e) => handleInputChange(e)}
          />

          <div class="break"></div>

          <TextField
            style={{ margin: "5px 0 5px" }}
            className={styles.form__input}
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            onChange={(e) => handleInputChange(e)}
          />

          <div class="break"></div>

          <TextField
            style={{ margin: "5px 0 5px" }}
            className={styles.form__input}
            id="rePassword"
            label="Re-password"
            type="password"
            variant="outlined"
            onChange={(e) => handleInputChange(e)}
          />
        </div>
      </div>

      <div className={styles.footer}>
        <Button
          variant="contained"
          color="success"
          onClick={() => handleSubmit()}
        >
          Register
        </Button>
      </div>
    </div>
  );
}

export default RegistrationForm;

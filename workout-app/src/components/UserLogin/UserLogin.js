import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import styles from "./UserLogin.module.css";

function UserLogin() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    const { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className={styles.app}>
      <div className={styles.title}>Sign In</div>
      <form onSubmit={handleSubmit}>
        <div className={styles.input__Container}>
          <TextField
            className="form_input"
            id="firstName"
            label="Login"
            variant="outlined"
          />
          {renderErrorMessage("uname")}
        </div>
        <div className={styles.input__Container}>
          <TextField
            className="form_input"
            type="password"
            id="firstName"
            label="Password"
            variant="outlined"
          />
          {renderErrorMessage("uname")}
        </div>
        <div className={`${styles["buttons-container"]}`}>
          <input type="submit" value="Login" />
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
  );

  return (
    <div>
      {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
    </div>
  );
}

export default UserLogin;

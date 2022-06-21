import React, { useState, useEffect } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import styles from "./UserLogin.module.css";
import Card from "../UI/Card/Card";
import { users } from "../DB/Users";

function UserLogin(props) {
  const [IsLoggedin, setIsLoggedin] = useState(props.loginState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [IsValid, setisValid] = useState(true);

  const invalidWarning = (
    <div className={styles.warning}>Invalid email or password</div>
  );

  const emailInputHandler = (event) => {
    setisValid(true);
    setEmail(event.target.value);
    console.log(event.target.value);
  };

  const passwordInputHandler = (event) => {
    setisValid(true);
    setPassword(event.target.value);
    console.log(event.target.value);
  };
  const loginHandler = () => {
    if (
      email.search("@") === -1 ||
      email.search(".") === -1 ||
      password.length <= 0
    ) {
      setisValid(false);
      return;
    }

    setisValid(true);
    props.onLogin();
  };

  useEffect(() => {
    setIsLoggedin(props.loginState);
    return () => {
      setIsLoggedin(props.loginState);
    };
  }, [props.loginState]);
  return (
    <div className={styles.container}>
      {IsLoggedin ? (
        <Card>You are already logged in</Card>
      ) : (
        <Card className={styles.login}>
          <div className={styles.login_title}>Login</div>
          <div
            className={`${styles.login_input} ${!IsValid && styles.invalid}`}
          >
            <Input label="e-mail" type="email" onChange={emailInputHandler} />
            <Input
              label="password"
              type="password"
              onChange={passwordInputHandler}
            />
            {!IsValid && invalidWarning}
          </div>
          <div className={styles.login_buttons}>
            <Button onClick={loginHandler}>LOGIN</Button>
          </div>
          <div className={styles.login_footer}>
            No account?{" "}
            <a className={styles.footer_registerLink} href="/sign-up">
              Register
            </a>
          </div>
        </Card>
      )}
    </div>
  );
}

export default UserLogin;

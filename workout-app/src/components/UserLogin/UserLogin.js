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
  const [IsExisting, setIsExisting] = useState(true);

  const invalidWarning = <div className={styles.warning}>Invalid data</div>;
  const NotExistingWarning = (
    <div className={styles.warning}>Invalid email or password</div>
  );

  let user = { login: "", email: "" };
  const DBcheck = () => {
    const index = users.map((e) => e.email).indexOf(email);
    if (index !== -1 && users[index].password === password) {
      console.log("data OK");
      user.login = users[index].login;
      return 1;
    }
    console.log("data NOT OK");
  };

  const emailInputHandler = (event) => {
    setEmail(event.target.value);
    setIsExisting(true);
  };

  const passwordInputHandler = (event) => {
    setPassword(event.target.value);
    setIsExisting(true);
  };

  const verification = () => {
    if (
      email.search("@") === -1 ||
      email.search(".") === -1 ||
      password.length <= 0
    ) {
      setisValid(false);
      return;
    }

    setisValid(true);
    return 1;
  };

  const loginHandler = () => {
    if (verification() === 1) {
      if (DBcheck() === 1) {
        localStorage.setItem("User", user.login);
        props.onLogin();
      } else {
        setIsExisting(false);
      }
    }
  };

  useEffect(() => {
    setIsLoggedin(props.loginState);
    return () => {
      setIsLoggedin(props.loginState);
    };
  }, [props.loginState]);

  useEffect(() => {
    let identifier = "";
    if (!IsValid) {
      identifier = setTimeout(() => {
        verification();
      }, 1000);
    }
    return () => {
      clearTimeout(identifier);
    };
  }, [email, password, IsValid]);

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
            {!IsExisting && NotExistingWarning}
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

import React, { useState, useEffect, useReducer } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import styles from "./UserLogin.module.css";
import Card from "../UI/Card/Card";
import { users } from "../DB/Users";

function emailIsValid(email) {
  return /\S+@\S+\.\S+/.test(email);
}

const userReducer = (state, action) => {
  if (action.type === "SET_EMAIL") {
    return {
      ...state,
      username: action.val,
      isEmailValid: emailIsValid(action.val.toString()),
    };
  }
  if (action.type === "SET_PASSWORD") {
    return {
      ...state,
      password: action.val,
      isPasswordValid: action.val.length > 0,
    };
  }
  if (action.type === "VALID_CHECK") {
    return {
      ...state,
      isValid: state.isEmailValid && state.isPasswordValid,
    };
  }
  if (action.type === "DB_CHECK") {
    const index = users.map((e) => e.email).indexOf(state.username);
    if (index !== -1 && users[index].password === state.password) {
      console.log("data OK");
      state.login = users[index].login;
      state.isInDB = true;
    } else state.isInDB = false;
    return {
      ...state,
    };
  }
  return {
    username: "",
    login: "",
    password: "",
    isEmailValid: true,
    isPasswordValid: true,
    isValid: true,
  };
};

function UserLogin(props) {
  const [IsLoggedin, setIsLoggedin] = useState(props.loginState);
  const [UserData, dispatchUserData] = useReducer(userReducer, {
    username: "",
    password: "",
    isEmailValid: false,
    isPasswordValid: false,
    isValid: true,
    isInDB: true,
  });

  const invalidWarning = <div className={styles.warning}>Invalid data</div>;
  const NotExistingWarning = (
    <div className={styles.warning}>Invalid email or password</div>
  );

  const emailInputHandler = (event) => {
    dispatchUserData({
      type: "SET_EMAIL",
      val: event.target.value,
    });
  };

  const passwordInputHandler = (event) => {
    dispatchUserData({
      type: "SET_PASSWORD",
      val: event.target.value,
    });
  };

  const loginHandler = () => {
    dispatchUserData({
      type: "VALID_CHECK",
    });
    if (UserData.isValid === false) return;

    dispatchUserData({
      type: "DB_CHECK",
    });

    if (UserData.isInDB === false) return;
    else {
      localStorage.setItem("User", UserData.login);
      props.onLogin();
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
    if (!(UserData.isEmailValid && UserData.isPasswordValid)) {
      identifier = setTimeout(() => {}, 1000);
    }
    return () => {
      clearTimeout(identifier);
    };
  }, [
    UserData.username,
    UserData.password,
    UserData.isEmailValid,
    UserData.isPasswordValid,
  ]);

  return (
    <div className={styles.container}>
      {IsLoggedin ? (
        <Card>You are already logged in</Card>
      ) : (
        <Card className={styles.login}>
          <div className={styles.login_title}>Login</div>
          <div
            className={`${styles.login_input} ${
              !UserData.isValid && styles.invalid
            }`}
          >
            <Input label="e-mail" type="email" onChange={emailInputHandler} />
            <Input
              label="password"
              type="password"
              onChange={passwordInputHandler}
            />
            {!UserData.isValid && invalidWarning}
            {!UserData.isInDB && NotExistingWarning}
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

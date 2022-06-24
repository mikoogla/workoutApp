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
  } else if (action.type === "SET_PASSWORD") {
    return {
      ...state,
      password: action.val,
      isPasswordValid: action.val.length > 0,
    };
  } else if (action.type === "VALID_CHECK") {
    console.log("4 - validity check ");
    return {
      ...state,
      isValid: state.isEmailValid && state.isPasswordValid,
    };
  } else if (action.type === "DB_CHECK") {
    console.log("7 - cheeck in database ");
    const index = users.map((e) => e.email).indexOf(state.username);
    if (index !== -1 && users[index].password === state.password) {
      return {
        ...state,
        isInDB: true,
        login: users[index].login,
      };
    } else return { ...state, isInDB: false };
  } else if (action.type === "SHOW_WARNINGS") {
    console.log("2 - reset warnings");
    return { ...state, hideWarnings: false };
  }
};

function UserLogin(props) {
  const [IsLoggedin, setIsLoggedin] = useState(props.loginState);
  const [UserData, dispatchUserData] = useReducer(userReducer, {
    username: "",
    login: "",
    password: "",
    isEmailValid: false,
    isPasswordValid: false,
    isValid: false,
    isInDB: false,
    hideWarnings: true,
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
    console.log("1 - clicked login");
    dispatchUserData({
      type: "SHOW_WARNINGS",
    });
    console.log("3 - warnings changed");
    dispatchUserData({
      type: "VALID_CHECK",
    });
    console.log("5 - validity checked ");
    if (UserData.isValid === false) {
      return;
    }
    console.log("6 - validitytest passed ");
    dispatchUserData({
      type: "DB_CHECK",
    });
    const d = () => {
      dispatchUserData({
        type: "DB_CHECK",
      });
    };
    d();
    console.log("8 - database checked ");
    if (UserData.isInDB === false) {
      return;
    }
    console.log("9 - database test passed - logging in ");
    debugger;
    localStorage.setItem("User", UserData.login.toString());
    props.onLogin();
  };

  useEffect(() => {
    setIsLoggedin(props.loginState);
    return () => {
      setIsLoggedin(props.loginState);
    };
  }, [props.loginState]);

  useEffect(() => {
    let identifier = "";
    if (!UserData.isValid) {
      identifier = setTimeout(() => {}, 1000);
    }
    return () => {
      clearTimeout(identifier);
    };
  }, [UserData.isValid]);

  return (
    <div className={styles.container}>
      {IsLoggedin ? (
        <Card>You are already logged in</Card>
      ) : (
        <Card className={styles.login}>
          <div className={styles.login_title}>Login</div>
          <div
            className={`${styles.login_input} ${
              !UserData.isValid && !UserData.hideWarnings && styles.invalid
            }`}
          >
            <Input label="e-mail" type="email" onChange={emailInputHandler} />
            <Input
              label="password"
              type="password"
              onChange={passwordInputHandler}
            />

            {!UserData.isValid && !UserData.hideWarnings && invalidWarning}
            {!UserData.isInDB && !UserData.hideWarnings && NotExistingWarning}
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

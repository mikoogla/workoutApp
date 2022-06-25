import React, { useState, useEffect, useReducer, useCallback } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import styles from "./UserLogin.module.css";
import Card from "../UI/Card/Card";
import { users } from "../DB/Users";

const invalidWarning = <div className={styles.warning}>Invalid data</div>;
const NotExistingWarning = (
  <div className={styles.warning}>Invalid email or password</div>
);

function emailIsValid(email) {
  return /\S+@\S+\.\S+/.test(email);
}

const userReducer = (state, action) => {
  if (action.type === "SET_EMAIL") {
    return {
      ...state,
      email: action.val,
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
};

function UserLogin(props) {
  const [IsLoggedin, setIsLoggedin] = useState(props.loginState);
  const [UserData, dispatchUserData] = useReducer(userReducer, {
    email: "",
    login: "",
    password: "",
    isEmailValid: null,
    isPasswordValid: null,
    isInDB: null,
  });
  const [isValid, setisValid] = useState(null);
  const [isInDB, setIsInDB] = useState(null);
  const [click, setClick] = useState(false);

  function SearchInDB() {
    const index = users.map((e) => e.email).indexOf(UserData.email);
    if (index !== -1 && users[index].password === UserData.password) {
      return users[index];
    } else {
      return -1;
    }
  }

  const emailInputHandler = (event) => {
    setIsInDB(true);
    setisValid(true);
    dispatchUserData({
      type: "SET_EMAIL",
      val: event.target.value,
    });
  };

  const passwordInputHandler = (event) => {
    setIsInDB(true);
    setisValid(true);
    dispatchUserData({
      type: "SET_PASSWORD",
      val: event.target.value,
    });
  };

  const loginHandler = () => {
    setClick((e) => !e);
    let user = SearchInDB();
    if (UserData.isEmailValid && UserData.isPasswordValid) {
      if (user !== -1) {
        localStorage.setItem("User", user.login);
        props.onLogin();
      } else {
        setIsInDB(false);
      }
    }
  };

  useEffect(() => {
    setIsLoggedin(props.loginState);
  }, [props.loginState]);

  useEffect(() => {
    setisValid(UserData.isEmailValid && UserData.isPasswordValid);
  }, [click]);

  return (
    <div className={styles.container}>
      {IsLoggedin ? (
        <Card>You are already logged in</Card>
      ) : (
        <Card className={styles.login}>
          <div className={styles.login_title}>Login</div>
          <div
            className={`${styles.login_input} ${
              isValid !== null && !isValid && styles.invalid
            }`}
          >
            <Input label="e-mail" type="email" onChange={emailInputHandler} />
            <Input
              label="password"
              type="password"
              onChange={passwordInputHandler}
            />

            {isValid !== null && !isValid && invalidWarning}
            {isInDB !== null && !isInDB && NotExistingWarning}
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

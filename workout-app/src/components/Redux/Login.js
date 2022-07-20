import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store";
//#region UI IMPORTS
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import styles from "./Login.module.css";
//#endregion

export default function LoginV2() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const loginHandler = () => {
    console.log("loginHandler " + isLoggedIn);

    if (isLoggedIn) {
      dispatch(authActions.logout());
    } else {
      dispatch(authActions.login());
    }
  };
  return (
    <Card className={styles.main}>
      <Button onClick={loginHandler}>
        {!isLoggedIn ? "Ultra Fast Login" : "Logout NOW!!!11"}
      </Button>
    </Card>
  );
}

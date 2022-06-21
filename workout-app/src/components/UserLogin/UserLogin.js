import React, { useState } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import styles from "./UserLogin.module.css";
import Card from "../UI/Card/Card";
function UserLogin(props) {
  const loginHandler = () => {
    props.onLogin();
  };

  const logoutHandler = () => {
    props.onLogout();
  };

  return (
    <div className={styles.container}>
      <Card className={styles.login}>
        <div className={styles.login_title}>Login</div>
        <div className={styles.login_input}>
          <Input label="e-mail" type="email" />
          <Input label="password" type="password" />
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
    </div>
  );
}

export default UserLogin;

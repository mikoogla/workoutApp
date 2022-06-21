import React, { useState } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import styles from "./registrationFormStyle.module.css";
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
        <div className={styles.login_title}>Register</div>
        <div className={styles.login_input}>
          <Input label="e-mail" type="email" />
          <Input label="login" type="email" />
          <Input label="password" type="password" />
          <Input label="re-password" type="password" />
        </div>
        <div className={styles.login_buttons}>
          <Button onClick={loginHandler}>REGISTER</Button>
        </div>
        <div className={styles.login_footer}>
          Already have an account?{" "}
          <a className={styles.footer_registerLink} href="/userlogin">
            Log in
          </a>
        </div>
      </Card>
    </div>
  );
}

export default UserLogin;

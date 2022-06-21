import React, { useState } from "react";
import Button from "../UI/Button/Button";

function UserLogin(props) {
  const loginHandler = () => {
    props.onLogin();
  };

  const logoutHandler = () => {
    props.onLogout();
  };

  return (
    <>
      <Button onClick={loginHandler}>FAST LOGIN</Button>
      <Button onClick={logoutHandler}>LOGOUT</Button>
    </>
  );
}

export default UserLogin;

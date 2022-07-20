import React from "react";
import { useSelector } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Card from "../../UI/Card/Card";

import styles from "./UserNavbar.module.css";
import MenuButton from "../UI/MenuButton";

export default function UserNavbar(props) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <Card className={styles.user}>
      <AccountCircleIcon fontSize="small" />
      {localStorage.getItem("User")}
      <div>{isLoggedIn ? "Logged in" : "Logged out"}</div>
      <MenuButton onClick={props.onLogout} className={styles.logoutstyle}>
        Log Out
      </MenuButton>
    </Card>
  );
}

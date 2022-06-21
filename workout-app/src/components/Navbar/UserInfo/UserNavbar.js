import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Card from "../../UI/Card/Card";

import styles from "./UserNavbar.module.css";
import MenuButton from "../UI/MenuButton";

export default function UserNavbar(props) {
  return (
    <Card className={styles.user}>
      <AccountCircleIcon fontSize="small" />
      {localStorage.getItem("User")}
      <MenuButton onClick={props.onLogout} className={styles.logoutstyle}>
        Log Out
      </MenuButton>
    </Card>
  );
}

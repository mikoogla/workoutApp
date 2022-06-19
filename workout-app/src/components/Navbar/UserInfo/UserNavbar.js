import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Card from "../../UI/Card/Card";

import styles from "./UserNavbar.module.css";
import MenuButton from "../UI/MenuButton";

export default function UserNavbar() {
  return (
    <Card className={styles.user}>
      <AccountCircleIcon fontSize="small" />
      Welcome, User
      <MenuButton className={styles.logout}>Log Out</MenuButton>
    </Card>
  );
}

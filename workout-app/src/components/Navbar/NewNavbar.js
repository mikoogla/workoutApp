import React from "react";
import MenuButton from "./UI/MenuButton";
import Card from "../UI/Card/Card";
import styles from "./NewNavbar.module.css";
import UserNavbar from "./UserInfo/UserNavbar";
import MenuItem from "./UI/MenuItem";
export default function NewNavbar(props) {
  const Userinfo = () =>
    props.userLogged ? (
      <UserNavbar />
    ) : (
      <Card className={styles.userinfo}>
        <MenuButton className={styles.userlogin}>Log In</MenuButton>
        <MenuButton className={styles.userlogin}>Sign Up</MenuButton>
      </Card>
    );

  const Items = () => (
    <div className={styles.menuitems}>
      <MenuItem title={"Dashboard"} link={"/dashboard"}></MenuItem>
      <MenuItem title={"Main"} link={"/landingpage"}></MenuItem>
      <MenuItem title={"Course"} link={"/course"}></MenuItem>
      <MenuItem title={"Styling"} link={"/styling-course"}></MenuItem>
      <MenuItem title={"log"} link={"/userlogin"}></MenuItem>
    </div>
  );

  return (
    <div className={styles.navbar}>
      <Userinfo></Userinfo>
      {props.userLogged && <Items></Items>}
    </div>
  );
}

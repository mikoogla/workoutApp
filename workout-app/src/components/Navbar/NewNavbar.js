import React, { useEffect, useState, useContext } from "react";
import UserNavbar from "./UserInfo/UserNavbar";
import MenuItem from "./UI/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Context from "../../Context";

import styles from "./NewNavbar.module.css";
export default function NewNavbar() {
  const ctx = useContext(Context);
  const [windowSize, setWindowSize] = useState({
    height: window.height,
    width: window.innerWidth,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const Userinfo = () =>
    ctx.isLoggedin ? (
      <UserNavbar onLogout={handleLogout} />
    ) : (
      <div className={styles.menuitems}>
        <MenuItem link={"/sign-up"}>Sign Up</MenuItem>
        <MenuItem link={"/userlogin"}>Login</MenuItem>
      </div>
    );

  const isMobileSize = () => (windowSize.width > 780 ? true : false);

  const Items = () => (
    <div id="navbar-resize" className={styles.menuitems}>
      {isMobileSize() ? (
        <>
          <MenuItem link={"/dashboard"}>Dashboard</MenuItem>
          <MenuItem link={"/landingpage"}>Main</MenuItem>
          <MenuItem link={"/course"}>Course</MenuItem>
          <MenuItem link={"/styling-course"}>Styling</MenuItem>
          <MenuItem link={"/userlogin"}>log</MenuItem>
        </>
      ) : (
        <MenuItem link={"/userlogin"}>
          <MenuIcon />
        </MenuItem>
      )}
    </div>
  );

  const handleLogout = () => {
    ctx.onLogout();
  };
  return (
    <div className={styles.navbar}>
      <Userinfo />
      {ctx.isLoggedin && <Items />}
    </div>
  );
}

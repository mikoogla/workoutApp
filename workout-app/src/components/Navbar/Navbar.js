import React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Card from "../UI/Card/Card";

import styles from "./NavbarStyle.module.css";

function Navbar() {
  const [hideMenu, setHideMenu] = React.useState(true);
  const node = React.useRef();
  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      if (!hideMenu) setHideMenu(true);
      else setHideMenu(false);
      return;
    } else {
      !hideMenu && closeMenu();
    }
  };
  const closeMenu = () => {
    setHideMenu(true);
    document.removeEventListener("click", handleClick);
  };
  const options = [
    {
      name: "Landing Page",
      href: "/landingpage",
    },
    {
      name: "Dashboard",
      href: "/dashboard",
    },
    {
      name: "Ex. List",
      href: "/course",
    },
    {
      name: "Styling",
      href: "/styling-course",
    },
    {
      name: "Login",
      href: "/userlogin",
    },
    {
      name: "Sign Up",
      href: "/sign-up",
    },
  ];

  const NavbarLong = (
    <div>
      <div className={styles.Navbar}>
        <div className={styles.Navbar__left}>
          <Button
            key={Math.random()}
            className={styles.navbar_link}
            href="/landingpage"
            variant="text"
          >
            Landing Page
          </Button>
          <Button
            key={Math.random()}
            className={styles.navbar_link}
            href="/dashboard"
            color="secondary"
            variant="text"
          >
            Dashboard
          </Button>
          <Button
            key={Math.random()}
            className={styles.navbar_link}
            href="/course"
            color="secondary"
            variant="text"
          >
            Ex. list
          </Button>
          <Button
            key={Math.random()}
            className={styles.navbar_link}
            href="/styling-course"
            color="secondary"
            variant="text"
          >
            Styling
          </Button>
        </div>
        <div className={styles.Navbar__right}>
          <Button
            key={Math.random()}
            className={styles.button}
            href="/userlogin"
            color="secondary"
            variant="contained"
          >
            Login
          </Button>
          <Button
            key={Math.random()}
            className={styles.button}
            href="/sign-up"
            color="secondary"
            variant="outlined"
          >
            Signup
          </Button>
        </div>
      </div>
    </div>
  );

  const NavbarShort = (
    <div className={styles.Navbar_short}>
      <div ref={node}>
        {document.addEventListener("click", handleClick)}
        <IconButton aria-label="more" id="long-button" aria-haspopup="true">
          <MoreVertIcon />
        </IconButton>
      </div>
      <div
        style={{
          overflow: "hidden",
          position: "absolute",
          zIndex: "2",
          top: "16px",
          visibility: hideMenu && "hidden",
          height: hideMenu && "0px",
          width: hideMenu && "0px",
          left: hideMenu && "0px",
        }}
      >
        <Card style={{ flexDirection: "column", margin: "30px 20px" }}>
          {options.map((option) => (
            <a href={option.href} className={styles.menu_item}>
              <div key={Math.random()}>{option.name}</div>
            </a>
          ))}
          <div
            style={{ color: "#990033" }}
            className={styles.menu_item}
            onClick={closeMenu}
          >
            <div key={Math.random()}>close</div>
          </div>
        </Card>
      </div>
    </div>
  );

  return (
    <div className={styles.Meta_Navbar}>
      <div key={Math.random()}>{NavbarShort}</div>
      <div key={Math.random()}>{NavbarLong}</div>
    </div>
  );
}

export default Navbar;
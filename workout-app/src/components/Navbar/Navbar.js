import React from "react";
import Button from "@mui/material/Button";
import styles from "./NavbarStyle.module.css";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            // maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {options.map((option) => (
          <a style={{ all: "unset" }} href={option.href}>
            <MenuItem key={Math.random()}>{option.name}</MenuItem>
          </a>
        ))}
      </Menu>
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

import React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Card from "../UI/Card/Card";
import { options } from "./NavbarData";
import styles from "./NavbarStyle.module.css";

function Navbar() {
  const [hideMenu, setHideMenu] = React.useState(true);
  const node = React.useRef();
  const handleClick = (e) => {
    if (node === null) {
      document.removeEventListener("click", handleClick);
      return;
    }
    if (node === undefined) {
      document.removeEventListener("click", handleClick);
      return;
    }
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

  const NavbarLong = (
    <>
      <div className={styles.Navbar}>
        <div className={styles.Navbar__left}>
          <Button
            key={Math.random()}
            className={styles.navbar_link}
            href={options[0].href}
            color="success"
            variant="text"
          >
            {options[0].name}
          </Button>
          <Button
            key={Math.random()}
            className={styles.navbar_link}
            href={options[1].href}
            color="success"
            variant="text"
          >
            {options[1].name}
          </Button>
          <Button
            key={Math.random()}
            className={styles.navbar_link}
            href={options[2].href}
            color="success"
            variant="text"
          >
            {options[2].name}
          </Button>
          <Button
            key={Math.random()}
            className={styles.navbar_link}
            href={options[3].href}
            color="success"
            variant="text"
          >
            {options[3].name}
          </Button>
        </div>
        <div className={styles.Navbar__right}>
          <Button
            key={Math.random()}
            className={styles.button}
            href={options[4].href}
            color="warning"
            variant="contained"
          >
            {options[4].name}
          </Button>
          <Button
            key={Math.random()}
            className={styles.button}
            href={options[5].href}
            color="warning"
            variant="outlined"
          >
            {options[5].name}
          </Button>
        </div>
      </div>
    </>
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
            <a
              key={Math.random()}
              href={option.href}
              className={styles.menu_item}
            >
              <div>{option.name}</div>
            </a>
          ))}
          <div
            style={{ color: "var(--closing_color)" }}
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

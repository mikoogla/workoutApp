import React from "react";
import styles from "./MenuButton.module.css";
export default function MenuButton(props) {
  return (
    <button
      onClick={props.onClick}
      className={` ${props.className} ${styles.Button} `}
    >
      {props.children}
    </button>
  );
}

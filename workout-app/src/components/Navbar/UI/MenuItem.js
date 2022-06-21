import React from "react";
import Card from "../../UI/Card/Card";
import styles from "./MenuItem.module.css";

export default function MenuItem(props) {
  return (
    <a href={props.link}>
      <Card className={`${styles.item} ${props.className}`}>
        {props.children}
      </Card>
    </a>
  );
}

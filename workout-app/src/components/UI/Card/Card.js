import React from "react";

import styles from "./Card.module.css";

export default function Card(props) {
  return (
    <div style={props.style} className={`${styles.Card} ${props.className}`}>
      {props.children}
    </div>
  );
}

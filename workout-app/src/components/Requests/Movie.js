import React from "react";
import styles from "./Styles.module.css";

export default function Movie(props) {
  return <div>{props.movie.title}</div>;
}

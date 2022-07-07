import React, { forwardRef } from "react";
import styles from "./Input.module.css";
const Input = forwardRef((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className={`${styles.input} ${props.className}`}
    />
  );
});

export default Input;

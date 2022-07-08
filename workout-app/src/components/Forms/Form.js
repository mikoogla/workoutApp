import React from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";
import styles from "./Form.module.css";
import useInput from "./hooks/useInput";

function emailIsValid(email) {
  return /\S+@\S+\.\S+/.test(email);
}

export default function Form() {
  const {
    value: text,
    isValid: textValid,
    error: textError,
    handleChange: handleText,
    handleBlur: blurText,
  } = useInput((v) => v.trim() !== "");

  const {
    value: email,
    isValid: emailValid,
    error: emailError,
    handleChange: handleEmail,
    handleBlur: blurEmail,
  } = useInput(emailIsValid);

  const validForm = textValid && emailValid;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validForm) {
      console.log("form invalid");
      return;
    }
    console.log("data ready: " + text + " " + email);
  };
  return (
    <Card className={styles.main}>
      <form className={styles.form}>
        Content:
        <Input onChange={handleText} onBlur={blurText} />
        {textError && <p className={styles.red}>Enter something</p>}
        Mail:
        <Input onChange={handleEmail} onBlur={blurEmail} />
        {emailError && <p className={styles.red}>Enter correct email</p>}
        <Button
          onClick={handleSubmit}
          className={!validForm && styles.disabled}
        >
          Submit
        </Button>
      </form>
    </Card>
  );
}

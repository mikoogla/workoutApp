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
    Valid: textValid,
    handleChange: handleTextChange,
    handleBlur: handleTextBlur,
    Error: textError,
  } = useInput((value) => value.length > 0);
  const {
    value: email,
    Valid: emailValid,
    handleChange: handleEmailChange,
    handleBlur: handleEmailBlur,
    Error: emailError,
  } = useInput((value) => emailIsValid(value));

  const formValid = textValid && emailValid;

  const TextWarning = (props) =>
    textError && <div className={styles.red}>{props.children}</div>;

  const EmailWarning = (props) =>
    emailError && <div className={styles.red}>{props.children}</div>;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formValid) return;
    else console.log(text, email);
  };

  return (
    <Card className={styles.main}>
      <form className={styles.form}>
        Content:
        <Input
          placeholder="type content"
          onBlur={handleTextBlur}
          onChange={handleTextChange}
          className={`${textError && styles.inputError}`}
          defaultValue={text}
        />
        <TextWarning>Enter something</TextWarning>
        Mail:
        <Input
          type="email"
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          className={`${emailError && styles.inputError}`}
          defaultValue={email}
        />
        <EmailWarning>Enter correct email</EmailWarning>
        <Button
          className={!formValid && styles.disabled}
          disabled={!formValid}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </form>
    </Card>
  );
}

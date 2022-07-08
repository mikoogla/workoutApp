import React, { useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";
import styles from "./Form.module.css";

function emailIsValid(email) {
  return /\S+@\S+\.\S+/.test(email);
}

export default function Form() {
  const [enteredText, setEnteredText] = useState({ text: "", email: "" });
  const [Touched, setTouched] = useState({ text: false, email: false });
  const Valid = {
    text: enteredText.text.trim() !== "",
    email: emailIsValid(enteredText.email),
  };
  const FormValid = () => {
    if (Valid.text && Valid.email) return true;
    else return false;
  };

  const handleChange = (event) => {
    if (event.target.type === "text") {
      setTouched({ ...Touched, text: true });
      setEnteredText({ ...enteredText, text: event.target.value });
    }
    if (event.target.type === "email") {
      setTouched({ ...Touched, email: true });
      setEnteredText({ ...enteredText, email: event.target.value });
    }
    // console.log({ ...enteredText, text: event.target.value });
    // console.log(Touched);
  };

  const handleBlur = (event) => {
    setTouched({ ...Touched, [event.target.type]: true });

    if (!FormValid()) return;
  };

  const handleSubmit = (event) => {
    setTouched({ ...Touched, [event.target.type]: true });
    event.preventDefault();

    if (!FormValid()) return;

    setTouched({ text: false, email: false });
    console.log(enteredText);
    setEnteredText({ text: "", email: "" });
  };

  const TextWarning = () =>
    !Valid.text &&
    Touched.text && <div className={styles.red}>Enter some content</div>;

  const EmailWarning = () =>
    !Valid.email &&
    Touched.email && <div className={styles.red}>Enter a valid email</div>;

  return (
    <Card className={styles.main}>
      <form className={styles.form}>
        Content:
        <Input
          placeholder="type content"
          onBlur={handleBlur}
          onChange={handleChange}
          className={`${!Valid.text && Touched.text && styles.inputError}`}
          defaultValue={enteredText.text}
        />
        <TextWarning />
        Mail:
        <Input
          type="email"
          onBlur={handleBlur}
          onChange={handleChange}
          className={`${!Valid.email && Touched.email && styles.inputError}`}
          defaultValue={enteredText.email}
        />
        <EmailWarning />
        <Button
          className={!FormValid() && styles.disabled}
          disabled={!FormValid()}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </form>
    </Card>
  );
}

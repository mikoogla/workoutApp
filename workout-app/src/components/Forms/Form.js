import React, { useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";
import styles from "./Form.module.css";
export default function Form() {
  const [enteredText, setEnteredText] = useState("");
  const [Touched, setTouched] = useState(false);
  const Valid = enteredText.trim() !== "";
  const FormValid = () => {
    if (Valid) return true;
    else return false;
  };

  const handleChange = (event) => {
    setEnteredText(event.target.value);
  };

  const handleBlur = (event) => {
    setTouched(true);
    if (!Valid) return;
  };

  const handleSubmit = (event) => {
    setTouched(true);
    event.preventDefault();

    if (!Valid) return;
    setTouched(false);
    console.log(enteredText);
    setEnteredText(" ");
  };

  const Warning = () =>
    !Valid && Touched && <div className={styles.red}>Enter some content</div>;

  return (
    <Card className={styles.main}>
      <form className={styles.form}>
        Content:
        <Input
          placeholder="type content"
          onBlur={handleBlur}
          onChange={handleChange}
          className={`${!Valid && Touched && styles.inputError}`}
          value={enteredText}
        />
        <Warning />
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

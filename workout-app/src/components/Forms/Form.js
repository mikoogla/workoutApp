import React, { useRef, useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";
import styles from "./Form.module.css";
export default function Form() {
  const [enteredText, setEnteredText] = useState("");
  const [Valid, setValid] = useState(false);
  const [Touched, setTouched] = useState(false);
  const Error = () => !Valid && Touched;
  const content = useRef("");

  const handleChange = (event) => {
    setValid(true);
    setEnteredText(event.target.value);
  };
  const handleBlur = (event) => {
    setTouched(true);
    if (enteredText.trim() === "") {
      setValid(false);
      return;
    }
    setEnteredText(event.target.value);
  };

  const handleSubmit = (event) => {
    setTouched(true);
    event.preventDefault();

    if (content.current.value.trim() === "") {
      setValid(false);
      return;
    }
    setValid(true);
    setEnteredText(content.current.value);
    console.log(content.current.value);
  };
  const Warning = () =>
    Error() && <div className={styles.red}>Enter some content</div>;

  return (
    <Card className={styles.main}>
      <form className={styles.form}>
        Content:
        <Input
          ref={content}
          placeholder="type content"
          onBlur={handleBlur}
          onChange={handleChange}
          className={`${!Error() ? " " : styles.inputError}`}
        />
        <Warning />
        <Button onClick={handleSubmit}>Submit</Button>
      </form>
    </Card>
  );
}

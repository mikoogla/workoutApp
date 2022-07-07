import React from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";
import styles from "./Form.module.css";
export default function Form() {
  return (
    <Card className={styles.main}>
      <form className={styles.form}>
        <Input type="text" placeholder="type content" />
        <Button>Submit</Button>
      </form>
    </Card>
  );
}

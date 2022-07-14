import React from "react";
import { useSelector, useDispatch } from "react-redux";
//#region UI IMPORTS
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import styles from "./Redux.module.css";
//#endregion
//#region OBJECTS DECLARATIONS
const increment_object = { type: "increment" };
const decrement_object = { type: "decrement" };
//#endregion
export default function Redux() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment_object);
  };

  const decrementHandler = () => {
    dispatch(decrement_object);
  };
  return (
    <Card className={styles.main}>
      <div>counter: {counter}</div>
      <div style={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>
        <Button onClick={incrementHandler}>+</Button>
        <Button onClick={decrementHandler}>-</Button>
      </div>
    </Card>
  );
}

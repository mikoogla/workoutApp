import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../../store";
//#region UI IMPORTS
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import styles from "./Redux.module.css";
//#endregion
//#region OBJECTS DECLARATIONS
const increment_object = (value) => {
  console.log("increment_object");
  return { type: "increment", value: value };
};
const decrement_object = (value) => ({ type: "decrement", value: value });
//#endregion
export default function Redux() {
  const counter = useSelector((state) => state.counter);
  const isVisible = useSelector((state) => state.isVisible);
  const dispatch = useDispatch();

  const incrementHandler = (value) => {
    dispatch(counterActions.increment({ value: value })); //{type: some type ID, payload: {value: value}}
  };

  const decrementHandler = (value) => {
    dispatch(counterActions.decrement({ value: value }));
  };

  const visibilityHandler = () => {
    dispatch({ type: "hideAndShow" });
  };
  return (
    <Card className={styles.main}>
      {isVisible ? <div>counter: {counter}</div> : <div>counter: ***</div>}
      <div style={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>
        <Button onClick={() => incrementHandler(1)}>+1</Button>
        <Button onClick={() => decrementHandler(1)}>-1</Button>
      </div>
      <div style={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>
        <Button onClick={() => incrementHandler(5)}>+5</Button>
        <Button onClick={() => decrementHandler(5)}>-5</Button>
      </div>
      <div style={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>
        <Button onClick={() => incrementHandler(10)}>+10</Button>
        <Button onClick={() => decrementHandler(10)}>-10</Button>
      </div>
      <Button onClick={visibilityHandler}>{isVisible ? "Hide" : "Show"}</Button>
    </Card>
  );
}

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../../store";
//#region UI IMPORTS
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import styles from "./Redux.module.css";
//#endregion
export default function Redux() {
  const counter = useSelector((state) => state.counter.counter);
  const isVisible = useSelector((state) => state.counter.isVisible);
  const dispatch = useDispatch();

  const incrementHandler = (value) => {
    dispatch(counterActions.increment({ value: value })); //{type: some type ID, payload: {value: value}}
  };

  const decrementHandler = (value) => {
    dispatch(counterActions.decrement({ value: value }));
  };

  const visibilityHandler = () => {
    console.log("visibilityHandler");
    dispatch(counterActions.hideAndShow());
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

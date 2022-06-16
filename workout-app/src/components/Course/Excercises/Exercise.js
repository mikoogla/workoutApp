import React from "react";
import Button from "@mui/material/Button";
import CalendarItem from "./CalendarItem";
import Card from "../UI/Card";
import styles from "./course.module.css";

function Exercise(props) {
  return (
    <Card className={styles.exercise_item}>
      <div className={styles.exercise_left}>
        <CalendarItem data={props.data} />
        <div className={styles.excercise_item__name}>
          {props.data.exName === "" ? "null" : props.data.exName}
        </div>
      </div>
      <div className={styles.exercise_right}>
        <div className={styles.excercise_item__data}>
          {props.data.exData === "" ? "null" : props.data.exData}
        </div>
        <Button variant="outlined">{props.data.exInfo}</Button>
      </div>
    </Card>
  );
}

export default Exercise;

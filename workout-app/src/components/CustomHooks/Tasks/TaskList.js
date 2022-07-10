import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList(props) {
  console.log("task " + props.tasks[0].text);
  return (
    <>
      {props.tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </>
  );
}

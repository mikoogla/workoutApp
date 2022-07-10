import React from "react";
import TaskItem from "./TaskItem";

export default function TaskList(props) {
  return (
    <>
      {props.tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </>
  );
}

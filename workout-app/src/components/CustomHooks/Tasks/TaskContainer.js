import React from "react";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import Input from "../../UI/Input/Input";
import TaskList from "./TaskList";

export default function TaskContainer() {
  return (
    <Card style={{ flexDirection: "column", gap: "20px" }}>
      <Input label="task" placeholder="task" />
      <Button>Add Task</Button>
      <TaskList />
    </Card>
  );
}

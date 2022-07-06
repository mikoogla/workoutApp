import React, { useState, useCallback, useEffect, useRef } from "react";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import Input from "../../UI/Input/Input";
import TaskList from "./TaskList";
import useFetch from "../hooks/useFetch";
import { DatabaseURL } from "../../../private/WorkoutApp-private/Private";

export default function TaskContainer() {
  const { IsLoading, error, DataAdded, addData } = useFetch(
    `${DatabaseURL}/tasks.json`
  );
  const contentRef = useRef("");

  const Content = () => {
    if (IsLoading) {
      return <p>Loading...</p>;
    }
    if (!IsLoading && DataAdded.length === 0) {
      return <div>No tasks</div>;
    }
    if (!IsLoading && !error) {
      return <TaskList tasks={DataAdded} />;
    }
    if (!IsLoading && error) {
      return <div>{error}</div>;
    }
  };
  const addTaskHandler = () => {
    const content = contentRef.current.value;
    if (content) {
      addData({ content });
      contentRef.current.value = "";
    }
  };
  return (
    <Card style={{ flexDirection: "column", gap: "20px" }}>
      <Input label="task" placeholder="task" ref={contentRef} />
      <Button onClick={addTaskHandler}>Add Task</Button>
      <Content />
    </Card>
  );
}

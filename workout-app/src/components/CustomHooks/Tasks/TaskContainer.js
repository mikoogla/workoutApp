import React, { useState, useCallback, useEffect, useRef } from "react";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import Input from "../../UI/Input/Input";
import TaskList from "./TaskList";
import { DatabaseURL } from "../../../private/WorkoutApp-private/Private";

export default function TaskContainer() {
  const [IsLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [Tasks, setTasks] = useState([]);
  const contentRef = useRef("");
  const fetchTasks = useCallback(async () => {
    setTasks([]);
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${DatabaseURL}/tasks.json`);
      if (!response.ok) throw new Error("Error: " + response.status);
      const data = await response.json();

      const loadedTasks = [];
      for (const key in data) {
        loadedTasks.push({
          id: key,
          content: data[key].content,
        });
      }
      setTasks(loadedTasks);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  async function addTask(task) {
    console.log(task);
    const response = await fetch(`${DatabaseURL}/tasks.json`, {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setTasks([...Tasks, data]);
    console.log(data);
    fetchTasks();
  }
  const Content = () => {
    if (IsLoading) {
      return <p>Loading...</p>;
    }
    if (!IsLoading && Tasks.length === 0) {
      return <div>No tasks</div>;
    }
    if (!IsLoading && !error) {
      return <TaskList tasks={Tasks} />;
    }
    if (!IsLoading && error) {
      return <div>{error}</div>;
    }
  };
  const addTaskHandler = () => {
    const content = contentRef.current.value;
    if (content) {
      addTask({ content });
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

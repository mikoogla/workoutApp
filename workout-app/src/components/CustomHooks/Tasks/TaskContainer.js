import React, { useRef, useEffect, useState } from "react";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";
import Input from "../../UI/Input/Input";
import TaskList from "./TaskList";
import useHttp from "../../hooks/useFetch";
import { DatabaseURL } from "../../../private/WorkoutApp-private/Private";

export default function TaskContainer() {
  const { isLoading, error, sendRequest } = useHttp();
  const [tasks, setTasks] = useState([]);
  const contentRef = useRef("");

  useEffect(() => {
    sendRequest({ url: `${DatabaseURL}/tasks.json` }, transformTasks);
  }, [sendRequest]);

  const transformTasks = async (tasksObj) => {
    const loadedTasks = [];

    for (const taskKey in tasksObj) {
      loadedTasks.push({ id: taskKey, content: tasksObj[taskKey].content });
    }

    setTasks(loadedTasks);
  };

  const Content = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    }
    if (!isLoading && tasks.length === 0) {
      return <div>No tasks</div>;
    }
    if (!isLoading && !error) {
      return <TaskList tasks={tasks} />;
    }
    if (!isLoading && error) {
      return <div>{error}</div>;
    }
  };
  const createTask = (taskText, taskData) => {
    const generatedId = taskData.name;
    const task = { id: generatedId, content: taskText };
  };

  const addTaskHandler = async () => {
    const content = contentRef.current.value;
    if (content) {
      sendRequest(
        {
          url: `${DatabaseURL}/tasks.json`,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: { content: content },
        },
        createTask.bind(null, content)
      );
    }
    sendRequest({ url: `${DatabaseURL}/tasks.json` }, transformTasks);
    contentRef.current.value = "";
  };

  const addAndFetch = async () => {
    addTaskHandler();
    sendRequest({ url: `${DatabaseURL}/tasks.json` }, transformTasks);
  };

  return (
    <Card style={{ flexDirection: "column", gap: "20px" }}>
      <Input label="task" placeholder="task" ref={contentRef} />
      <Button onClick={addAndFetch}>Add Task</Button>
      <Content />
    </Card>
  );
}

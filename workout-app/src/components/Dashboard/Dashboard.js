import React, { useState } from "react";
import Card from "../UI/Card/Card";
import styles from "./Dashboard.module.css";
import Button from "../UI/Button/Button";
import AddIcon from "@mui/icons-material/Add";
import Input from "../UI/Input/Input";
import Select from "../UI/Select/Select";

const exerciseTemplates = [
  {
    id: Math.random,
    name: "Treadmill",
    dataTypes: [
      ["time", "min"],
      ["distance", "km"],
    ],
  },
  { id: Math.random, name: "Pullups", dataTypes: [["reps", ""]] },
  {
    id: Math.random,
    name: "Bench press",
    dataTypes: [
      ["weight", "kg"],
      ["reps", ""],
    ],
  },
  {
    id: Math.random,
    name: "Barebells",
    dataTypes: [
      ["weight", "kg"],
      ["reps", ""],
    ],
  },
  { id: Math.random, name: "Plank", dataTypes: [["time", "min"]] },
];

const workoutTemplates = [
  {
    id: Math.random,
    type: "Trening 1",
    exercises: [
      exerciseTemplates[0],
      exerciseTemplates[3],
      exerciseTemplates[4],
    ],
  },
  {
    id: Math.random,
    type: "Trening 2",
    exercises: [
      exerciseTemplates[1],
      exerciseTemplates[2],
      exerciseTemplates[3],
      exerciseTemplates[4],
      exerciseTemplates[0],
      exerciseTemplates[1],
    ],
  },
];

const archiveTemplate = [
  {
    id: Math.random,
    name: "My workout 1",
    date: new Date(2022, 7, 7),
    notes: "my note about workout",
    exercises: [
      {
        type: exerciseTemplates[2],
        units: exerciseTemplates[2].dataTypes,
        series: [
          [
            [40, 10],
            [40, 7],
            [40, 7],
            [40, 6],
          ],
        ],
      },
      {
        type: exerciseTemplates[1],
        units: exerciseTemplates[1].dataTypes,
        series: [[[10], [9], [8], [7]]],
      },
      {
        type: exerciseTemplates[4],
        units: exerciseTemplates[4].dataTypes,
        series: [[[1], [1], [1]]],
      },
    ],
  },
  {
    id: Math.random,
    name: "Some other workout",
    date: new Date(2021, 11, 12),
    notes: "my note about workout",
    exercises: [
      {
        type: exerciseTemplates[2],
        units: exerciseTemplates[2].dataTypes,
        series: [
          [
            [40, 10],
            [40, 7],
            [40, 7],
            [40, 6],
          ],
        ],
      },
      {
        type: exerciseTemplates[1],
        units: exerciseTemplates[1].dataTypes,
        series: [[[10], [9], [8], [7]]],
      },
      {
        type: exerciseTemplates[4],
        units: exerciseTemplates[4].dataTypes,
        series: [[[1], [1], [1]]],
      },
    ],
  },
];

const lightCardStyle = { backgroundColor: "#1b1b1b" };
const columnCardStyle = { flexDirection: "column" };

const Dashboard = () => {
  const [NewWorkout, setNewWorkout] = useState(false);
  const [NewPlan, setNewPlan] = useState(false);
  const [NewType, setNewType] = useState(false);
  return (
    <div className={styles.Dashboard}>
      <Card>Hi, User! Start your training now:</Card>
      <Card style={{ ...columnCardStyle }}>
        <Card className={styles.CreatorPanel}>
          <Button
            onClick={() => {
              NewWorkout ? setNewWorkout(false) : setNewWorkout(true);
            }}
            className={styles.CreatorButtons}
          >
            <AddIcon />
            New workout
          </Button>
          <Button
            onClick={() => {
              NewPlan ? setNewPlan(false) : setNewPlan(true);
            }}
            className={styles.CreatorButtons}
          >
            <AddIcon />
            New plan
          </Button>
          <Button
            onClick={() => {
              NewType ? setNewType(false) : setNewType(true);
            }}
            className={styles.CreatorButtons}
          >
            <AddIcon />
            New exercise type
          </Button>
        </Card>
        {NewWorkout && (
          <Card className={styles.CreatorPanel} style={lightCardStyle}>
            New workout window
            <Input label="workout name" />
            <Select list={workoutTemplates.map((ex) => ex.type)}></Select>
            <Button>ADD</Button>
          </Card>
        )}
        {NewPlan && (
          <Card className={styles.CreatorPanel} style={lightCardStyle}>
            New plan window
            <Button>SUBMIT</Button>
          </Card>
        )}
        {NewType && (
          <Card className={styles.CreatorPanel} style={lightCardStyle}>
            New exercise window
            <Button>SUBMIT</Button>
          </Card>
        )}
      </Card>
      <Card style={{ ...columnCardStyle }}>
        <Card style={{ ...lightCardStyle, ...columnCardStyle }}>
          New exercise card
        </Card>
        <Card style={lightCardStyle}>Podkarta 2</Card>
        <Card style={lightCardStyle}>Podkarta 3</Card>
        <Button>CLICK ME</Button>
      </Card>

      {archiveTemplate.map((workout) => (
        <Card key={Math.random}>
          {workout.name}
          <Card style={lightCardStyle}>
            {workout.date.toLocaleString("en-US", { day: "numeric" }) +
              "/" +
              (workout.date.getUTCMonth() === 0
                ? 12
                : workout.date.getUTCMonth()) +
              "/" +
              workout.date.getFullYear()}
          </Card>
        </Card>
      ))}
    </div>
  );
};

export default Dashboard;

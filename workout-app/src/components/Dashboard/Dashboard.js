import React from "react";
import Card from "../UI/Card/Card";
import styles from "./Dashboard.module.css";
import Button from "../UI/Button/Button";
import AddIcon from "@mui/icons-material/Add";
import Add from "@mui/icons-material/Add";
import { ButtonBase } from "@mui/material";

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
];

const lightCardStyle = { backgroundColor: "#1b1b1b" };
const columnCardStyle = { flexDirection: "column" };

const Dashboard = () => (
  <div className={styles.Dashboard}>
    <Card>Hi, User! Start your training now:</Card>
    <Card style={{ ...columnCardStyle }}>
      <Card className={styles.CreatorPanel}>
        <Button className={styles.CreatorButtons}>
          <AddIcon />
          New workout
        </Button>
        <Button className={styles.CreatorButtons}>
          <AddIcon />
          New plan
        </Button>
        <Button className={styles.CreatorButtons}>
          <AddIcon />
          New exercise type
        </Button>
      </Card>
      <Card className={styles.CreatorPanel} style={lightCardStyle}>
        New workout window
        <Button>SUBMIT</Button>
      </Card>
      <Card className={styles.CreatorPanel} style={lightCardStyle}>
        New plan window
        <Button>SUBMIT</Button>
      </Card>
      <Card className={styles.CreatorPanel} style={lightCardStyle}>
        New exercise window
        <Button>SUBMIT</Button>
      </Card>
    </Card>
    <Card style={{ ...columnCardStyle }}>
      <Card style={{ ...lightCardStyle, ...columnCardStyle }}>
        New exercise card
      </Card>
      <Card style={lightCardStyle}>Podkarta 2</Card>
      <Card style={lightCardStyle}>Podkarta 3</Card>
      <Button>CLICK ME</Button>
    </Card>
    <Card>Sample text</Card>
  </div>
);

export default Dashboard;

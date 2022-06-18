import React, { useState } from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import AddIcon from "@mui/icons-material/Add";
import NewWorkoutComponent from "./NewData/NewWorkoutComponent";
import NewPlanComponent from "./NewData/NewPlanComponent";
import NewTypeComponent from "./NewData/NewTypeComponent";
import { exerciseTemplates, workoutTemplates, archiveTemplate } from "./DB";
import styles from "./Dashboard.module.css";

const lightCardStyle = { backgroundColor: "var(--background_medium)" };
const accentCardStyle = { backgroundColor: "var(--accent_main)" };
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
          <NewWorkoutComponent
            className={styles.CreatorPanel}
            style={lightCardStyle}
            list={workoutTemplates}
          />
        )}
        {NewPlan && (
          <NewPlanComponent
            className={styles.CreatorPanel}
            style={lightCardStyle}
          />
        )}
        {NewType && (
          <NewTypeComponent
            className={styles.CreatorPanel}
            style={lightCardStyle}
          />
        )}
      </Card>

      {archiveTemplate.map((workout) => (
        <Card key={Math.random()}>
          {workout.name}
          <Card style={accentCardStyle}>
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

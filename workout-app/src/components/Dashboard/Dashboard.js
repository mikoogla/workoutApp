import React, { useState, useContext } from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import AddIcon from "@mui/icons-material/Add";
import NewWorkoutComponent from "./NewData/NewWorkoutComponent";
import NewPlanComponent from "./NewData/NewPlanComponent";
import NewTypeComponent from "./NewData/NewTypeComponent";
import ListLogs from "./SavedData/ListLogs";
import Context from "../../Context";

import {
  exerciseTemplates,
  workoutTemplates,
  archiveTemplate,
} from "./SavedData/DB";
import styles from "./Dashboard.module.css";

const lightCardStyle = { backgroundColor: "var(--background_medium)" };

const columnCardStyle = { flexDirection: "column" };

const Dashboard = () => {
  const ctx = useContext(Context);
  const [NewWorkout, setNewWorkout] = useState(false);
  const [NewPlan, setNewPlan] = useState(false);
  const [NewType, setNewType] = useState(false);

  return (
    <div className={styles.Dashboard}>
      <Card>{`Hi, ${ctx.user} Start your training now:`}</Card>
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
      {<ListLogs data={archiveTemplate} />}
    </div>
  );
};

export default Dashboard;

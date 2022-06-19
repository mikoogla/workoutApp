import React, { useState } from "react";
import Card from "../../UI/Card/Card";
import styles from "./ListLogs.module.css";

export default function ListLogs(props) {
  return props.data !== undefined ? (
    props.data.map((workout) => (
      <Card key={Math.random()} className={styles.workout}>
        <div className={styles.MainElement}>
          {workout.name}
          <Card className={styles.date}>
            {workout.date.toLocaleString("en-US", { day: "numeric" }) +
              "/" +
              (workout.date.getUTCMonth() === 0
                ? 12
                : workout.date.getUTCMonth()) +
              "/" +
              workout.date.getFullYear()}
          </Card>
        </div>
        {workout.exercises.map((exercise) => (
          <Card className={styles.exercise}>
            <Card className={styles.name}>{exercise.type.name}</Card>
            <Card className={styles.Allseries}>
              {exercise.series.map((AllSeries, i) => (
                <Card className={styles.series}>
                  {"Series " + (i + 1)}
                  {AllSeries.map((SingleSerie) => (
                    <Card className={styles.singleData}>
                      {SingleSerie.map((Unit, i) => (
                        <div className={styles.singleUnit}>
                          {Unit +
                            " " +
                            (exercise.units[i][1] === ""
                              ? exercise.units[i][0]
                              : exercise.units[i][1])}
                        </div>
                      ))}
                    </Card>
                  ))}
                </Card>
              ))}
            </Card>
          </Card>
        ))}
      </Card>
    ))
  ) : (
    <Card>Nothing to show</Card>
  );
}

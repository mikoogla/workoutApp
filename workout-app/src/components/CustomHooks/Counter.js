import React from "react";
import Card from "../UI/Card/Card";
import useCounter from "./hooks/useCounter";

export default function Counter() {
  const counter1 = useCounter(0, 1);
  const counter2 = useCounter(100, -1);
  return (
    <div style={{ display: "flex" }}>
      <Card>{counter1}</Card>
      <Card>{counter2}</Card>
    </div>
  );
}

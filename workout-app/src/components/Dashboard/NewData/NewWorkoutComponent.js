import React from "react";
import Input from "../../UI/Input/Input";
import Select from "../../UI/Select/Select";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";

export default function NewWorkoutComponent(props) {
  return (
    <Card className={props.className} style={props.style}>
      New workout window
      <Input label="workout name" />
      <Select list={props.list.map((ex) => ex.type)}></Select>
      <Button>SUBMIT</Button>
    </Card>
  );
}

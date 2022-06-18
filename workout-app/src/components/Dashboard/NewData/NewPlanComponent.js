import React from "react";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";

export default function NewPlanComponent(props) {
  return (
    <Card className={props.className} style={props.style}>
      New plan window
      <Button>SUBMIT</Button>
    </Card>
  );
}

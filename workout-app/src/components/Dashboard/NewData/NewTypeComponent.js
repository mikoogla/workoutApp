import React from "react";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";

export default function NewTypeComponent(props) {
  return (
    <Card className={props.className} style={props.style}>
      New Type
      <Button>SUBMIT</Button>
    </Card>
  );
}

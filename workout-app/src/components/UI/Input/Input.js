import React from "react";
import TextField from "@mui/material/TextField";

export default function Input(props) {
  return (
    <TextField
      type={props.type}
      min={props.min}
      max={props.max}
      onChange={props.onChange}
      value={props.value}
      style={props.style}
      label={props.label}
    />
  );
}

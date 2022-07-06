import React, { forwardRef } from "react";
const Input = forwardRef((props, ref) => {
  return (
    <input
      type={props.type}
      min={props.min}
      max={props.max}
      onChange={props.onChange}
      value={props.value}
      style={props.style}
      label={props.label}
      ref={ref}
    />
  );
});

export default Input;

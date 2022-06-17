import React from "react";
import "./CalendarItem.css";

function CalendarItem(props) {
  const year = props.data.exDate.toLocaleString("en-US", { year: "numeric" });
  const month = props.data.exDate.toLocaleString("en-US", { month: "long" });
  const day = props.data.exDate.toLocaleString("en-US", { day: "numeric" });
  if (year === "Invalid Date") {
    return <div className="date-item">Null</div>;
  }
  return (
    <div className="date-item">
      <div className="date-item__month">{month}</div>
      <div className="date-item__year">{year}</div>
      <div className="date-item_day">{day}</div>
    </div>
  );
}

export default CalendarItem;

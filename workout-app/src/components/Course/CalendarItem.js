import React from "react";

function CalendarItem(props){
    const year = props.data.exDate.toLocaleString('en-US', { year: 'numeric' })
    const month = props.data.exDate.toLocaleString('en-US', { month: 'long' })
    const day = props.data.exDate.toLocaleString('en-US', { day: 'numeric' })

    return(
        <div className='excercise-item__date'>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
    );
}

export default CalendarItem;
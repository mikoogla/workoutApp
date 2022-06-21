import React from "react"
import ToDoBody from "./ToDoBody"
import ToDoList from "./ToDoList"
import "./ToDoHeader.css"

function ToDoHeader() {
	return (
		<div className='todo--main'>
			<div className='todo'>
				<div className='header'>
					<h1>ToDo List</h1>
					<input
						type='text'
						className='todo--input'
						placeholder='Wpisz treść zadania...'
					/>
					<button className='btn--add'>Add</button>
				</div>
				<ToDoBody />
				<ToDoList />
			</div>
		</div>
	)
}

export default ToDoHeader

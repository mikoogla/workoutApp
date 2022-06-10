import React from "react"
import "./ToDoList.css"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"

function ToDoList() {
	return (
		<div className='todolist'>
			<ul>
				<li data-id='test1'>
					Wypić kawę
					<div className='tools'>
						<button className='complete'>
							<AddIcon fontSize='small' />
						</button>
						<button className='edit'>EDIT</button>
						<button className='delete'>
							<RemoveIcon fontSize='small' />
						</button>
					</div>
				</li>

				<li data-id='test2'>
					Zjeść śniadanie
					<div className='tools'>
						<button className='complete'>
							<AddIcon fontSize='small' />
						</button>
						<button className='edit'>EDIT</button>
						<button className='delete'>
							<RemoveIcon fontSize='small' />
						</button>
					</div>
				</li>

				<li data-id='test3'>
					Umyć okna
					<div className='tools'>
						<button className='complete'>
							<AddIcon fontSize='small' />
						</button>
						<button className='edit'>EDIT</button>
						<button className='delete'>
							<RemoveIcon fontSize='small' />
						</button>
					</div>
				</li>
			</ul>
		</div>
	)
}

export default ToDoList

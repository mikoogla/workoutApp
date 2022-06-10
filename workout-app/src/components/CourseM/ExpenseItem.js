import React from "react"
import "./ExpenseItem.css"

function ExpenseItem() {
	return (
		<div className='todo--main'>
			<div className='todo'>
				<div className='header'>
					<h1>ToDo List</h1>
					<input
						type='text'
						className='todo-input'
						placeholder='Wpisz treść zadania...'
					/>
					<button className='btn-add'>Add</button>
				</div>
				<div className='todolist'>
					<h3>Lista zadań:</h3>
					<p className='error-info'>Brak zadań na liście.</p>
					<ul>
						<li data-id='test1'>
							Wypić kawę
							<div className='tools'>
								<button className='complete'>
									<i className='fas fa-check'></i>
								</button>
								<button className='edit'>EDIT</button>
								<button className='delete'>
									<i className='fas fa-times'></i>
								</button>
							</div>
						</li>

						<li data-id='test2'>
							Zjeść śniadanie
							<div className='tools'>
								<button className='complete'>
									<i className='fas fa-check'></i>
								</button>
								<button className='edit'>EDIT</button>
								<button className='delete'>
									<i className='fas fa-times'></i>
								</button>
							</div>
						</li>

						<li data-id='test3'>
							Umyć okna
							<div className='tools'>
								<button className='complete'>
									<i className='fas fa-check'></i>
								</button>
								<button className='edit'>EDIT</button>
								<button className='delete'>
									<i className='fas fa-times'></i>
								</button>
							</div>
						</li>
					</ul>
				</div>
			</div>

			<div className='popup'>
				<h3>Edytuj zadanie:</h3>
				<div className='popup-body'>
					<p className='popup-info'></p>
					<input
						type='text'
						className='popup-input'
						placeholder='Wprowadź nową treść zadania...'
					/>
					<button className='popup-btn accept'>Zatwierdź</button>
					<button className='popup-btn cancel'>Anuluj</button>
				</div>
			</div>
		</div>
	)
}

export default ExpenseItem

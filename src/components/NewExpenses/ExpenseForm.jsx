import './ExpenseForm.css'
import { useState } from 'react'

const ExpenseFrom = (props) => {
	const [title, setTitle] = useState('') // 3 состояние для 3 инпутов
	const [amount, setAmount] = useState('')
	const [date, setDate] = useState('')

	const inputChangeHandler = (e) => { // чтобы получить данные, нам нужен обработчик. Он возвращает event, а он приходит от onChange
		const currentInput = e.target.name //доступ к name
		if (currentInput === 'title') {
			setTitle(e.target.value)
		} else if (currentInput === 'amount') {
			setAmount(e.target.value)
		} else if (currentInput === 'date') {
			setDate(e.target.value)
		}
	}

	const submitHandler = (e) => {
		e.preventDefault()                //отменяет действие браузера
		const currentInput = {            
			title,
			amount,
			date: new Date(date),
		}
		props.onSaveExpenseData(currentInput)  //данные которые пришли с фукнции saveExpenseDataHandler
	}

	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input
						name='title'
						type='text'
						onChange={inputChangeHandler} //сработает когда мы нажмем клавишу
						value={title} //высвечивает
					/>
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input
						name='amount'
						type='number'
						min='0.1'
						step='1'
						value={amount}
						onChange={inputChangeHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input
						name='date'
						type='date'
						min='2022-01-01'
						value={date}
						onChange={inputChangeHandler}
					/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	)
}

export default ExpenseFrom
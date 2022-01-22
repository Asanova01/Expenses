import './ExpenseForm.css'
import { useState } from 'react'

const ExpenseFrom = (props) => {
	const [title, setTitle] = useState('')
	const [amount, setAmount] = useState('')
	const [date, setDate] = useState('')

	const inputChangeHandler = (e) => {
		const currentInput = e.target.name
		if (currentInput === 'title') {
			setTitle(e.target.value)
		} else if (currentInput === 'amount') {
			setAmount(e.target.value)
		} else if (currentInput === 'date') {
			setDate(e.target.value)
		}
	}

	const submitHandler = (e) => {
		e.preventDefault()
		const currentInput = {
			title,
			amount,
			date: new Date(date),
		}
		props.onSaveExpenseData(currentInput)
	}

	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input
						name='title'
						type='text'
						onChange={inputChangeHandler} //берет
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

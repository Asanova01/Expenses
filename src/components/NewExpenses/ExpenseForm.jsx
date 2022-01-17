import './ExpenseForm.css'
import { useState } from 'react'

const ExpenseFrom = () => {
	// const [title, setTitle] = useState('')
	// const [amount, setAmount] = useState('')
	// const [date, setDate] = useState('')

	const [userInput, setUserInput] = useState({
		title: '',
		//to many times amount changed
		amount: '',
		date: '',
	})

	//-----------------VERSION 1

	// const inputChangeHadler = (event) => {
	//     const currenInput = event.target.name
	//     if(currenInput=== 'title'){
	//         setTitle(event.target.value)
	//     }else if (currenInput === 'amount'){
	//         setAmount(event.target.value)
	//     }else if(currenInput==='date'){
	//         setDate(event.target.value)
	//     }
	// }

	//----------------VERSION 2

	// const inputChangeHadler = (event) => {
	// 	const currenInput = event.target.name
	//     setUserInput({
	//         ...userInput,
	//         [currenInput] : event.target.value
	//     })
	// }

	const titleChangeHandler = (event) => {
		// setUserInput({
		// 	...userInput,
		// 	title: event.target.value,
		// })
		setUserInput((prevState) => {
			return {
				...prevState,
				title: event.target.value,
			}
		})
	}
	const amountChangeHandler = (event) => {
		setUserInput({
			...userInput,
			amount: event.target.value,
		})
	}
	const dateChangeHandler = (event) => {
		setUserInput({
			...userInput,
			date: event.target.value,
		})
	}

	const submitHandler = (event) => {
		event.preventDefault()
		console.log(userInput)
		// console.log(title)
		// console.log(amount)
		// console.log(date)
	}
	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input
						name='title'
						type='text'
						onChange={titleChangeHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input
						name='amount'
						type='number'
						min='0.1'
						step='1'
						onChange={amountChangeHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input
						name='date'
						type='date'
						min='2022-01-01'
						onChange={dateChangeHandler}
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

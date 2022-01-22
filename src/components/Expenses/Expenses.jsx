import React from 'react'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
import { useState } from 'react'

function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState('2022')

	const filteredChangeInput = (selectedYear) => {
		setFilteredYear(selectedYear)
	}

	const filteredExpenses = props.data.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear
	})
	return (
		<Card className='expenses'>
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={filteredChangeInput}
			/>
			{filteredExpenses.map((element) => {
				return (
					<ExpenseItem
						key={element.id}
						title={element.title}
						amount={element.amount}
						date={element.date}
					/>
				)
			})}
			{/* <ExpenseItem
				title={props.data[0].title}
				amount={props.data[0].amount}
				date={props.data[0].date}
			/>
			<ExpenseItem
				title={props.data[1].title}
				amount={props.data[1].amount}
				date={props.data[1].date}
			/>
			<ExpenseItem
				title={props.data[2].title}
				amount={props.data[2].amount}
				date={props.data[2].date}
			/>
			<ExpenseItem
				title={props.data[3].title}
				amount={props.data[3].amount}
				date={props.data[3].date}
			/> */}
			{/* {filteredYear === 'all' &&
				props.data.map((element) => {
					return (
						<ExpenseItem
							key={Math.random()}
							title={element.title}
							amount={element.amount}
							date={element.date}
						/>
					)
				})} */}
		</Card>
	)
}

export default Expenses

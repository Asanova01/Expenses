import React from 'react'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'

function Expenses(props) {
	return (
		<Card className='expenses'>
			{props.data.map((element,) => {
				return (
					<ExpenseItem
						key={element.id}
						title={element.title}
						amout={element.amount}
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
		</Card>
	)
}

export default Expenses

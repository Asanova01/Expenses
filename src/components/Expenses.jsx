import React from 'react'
import ExpenseItem from './ExpenseItem'

function Expenses(props) {
// 	const arr = props.data
// 	return (
// 		<div>
// 			{arr.map((el) => {
// 				return (
// 					<ExpenseItem
// 						key={el.id}
// 						title={el.title}
// 						amount={el.amount}
// 						date={el.date}
// 					/>
// 				)
// 			})}
// 		</div>
// 	)
// }

	return (
		<div>
			<ExpenseItem
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
			/>
		</div>
	)
}

export default Expenses

import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'


function ExpenseItem(props) { //этот компонент возвращает карточку, т.е title, date, amount которые мы перебирали с помощью map

	const expenseTitle = props.title
	const expenseAmount = props.amount

	return (
		<div className='expense-item'>
			{/*тут рендерится компонента ExpenseDate, а там дата. Передаем в date элемент date */}
			<ExpenseDate date={props.date} /> 
			<h2 className='expense-item__description'>{expenseTitle} </h2>
			<div className='expense-item__price'>${expenseAmount}</div>
		</div>
	)
}

export default ExpenseItem //экспортируем в Expenses

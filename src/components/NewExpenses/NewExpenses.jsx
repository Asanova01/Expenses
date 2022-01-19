import './NewExpenses.css'
import ExpenseForm from './ExpenseForm'

const NewExpenses = (props) => {
	const SaveExpenseDataHadler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		}
		props.onAddExpense(expenseData)
	}

	return (
		<div className='new-expense'>
			<ExpenseForm onSaveExpenseData={SaveExpenseDataHadler} />
		</div>
	)
}

export default NewExpenses

import './NewExpenses.css'
import ExpenseForm from './ExpenseForm'

const NewExpenses = (props) => {
	const saveExpenseDataHandler = (expenseData) => {
		const dataWithId = {
			...expenseData,
			id: Math.random().toString(),
		}
		props.onAddExpense(dataWithId)
	}

	return (
		<div className='new-expense'>
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
		</div>
	)
}

export default NewExpenses

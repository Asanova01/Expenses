import './NewExpenses.css'
import ExpenseForm from './ExpenseForm'

const NewExpenses = (props) => {
	const saveExpenseDataHandler = (expenseData) => {
		const dataWithId = {                   //данные лежат
			...expenseData,                    //старое значение/деструктуризация
			id: Math.random().toString(),      //добавили свойство id, чтобы когда будет рендеринг, у каждой данной был уникальный id
		}
		props.onAddExpense(dataWithId)        //передаем функцию в качестве props(подъем состояние)
	}
	

	return (
		<div className='new-expense'>
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
		</div>
	)
}

export default NewExpenses

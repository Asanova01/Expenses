import './App.css'
import Expenses from './components/Expenses/Expenses'
import NewExpenses from './components/NewExpenses/NewExpenses'
import { useState } from 'react/cjs/react.development'

const EXPENSES = [
	{
		id: 'e1',
		title: 'Toilet Paper',
		amount: 1.5,
		date: new Date(2022, 7, 14),
	},
	{
		id: 'e2',
		title: 'Flowers shop',
		amount: 1.6,
		date: new Date(2023, 4, 23),
	},
	{
		id: 'e3',
		title: 'Pets shop',
		amount: 1.6,
		date: new Date(2024, 3, 1),
	},
	{
		id: 'e4',
		title: 'Car Insurance',
		amount: 1.6,
		date: new Date(2025, 9, 29),
	},
]
function App() {
	 const [expenses, setExpenses] = useState(EXPENSES)

	const addExpenseDataHandler = (expense) => {
setExpenses(prevState => {
	return [expense, ...prevState]
})
	}

	return (
		<div>
			<NewExpenses onAddExpense = {addExpenseDataHandler}/>
			<Expenses data={expenses} />
		</div>
	)
}
export default App

import './App.css'
import Expenses from './components/Expenses/Expenses'
import NewExpenses from './components/NewExpenses/NewExpenses'
import { useState } from 'react'

const EXPENSES = [
	{
		id: 'e1',
		title: 'Toilet Paper',
		amount: 50,
		date: new Date(2020, 7, 14),
	},
	{
		id: 'e2',
		title: 'Flowers shop',
		amount: 100,
		date: new Date(2021, 4, 23),
	},
	{
		id: 'e3',
		title: 'Pets shop',
		amount: 170,
		date: new Date(2022, 3, 1),
	},
	{
		id: 'e4',
		title: 'Car Insurance',
		amount: 145,
		date: new Date(2021, 9, 29),
	},
]

function App() {
	const [expenses, setExpenses] = useState(EXPENSES)

	const addExpenseHandler = (expense) => {
		setExpenses((prevState) => [...prevState, expense])
	}

	return (
		<div>
			<NewExpenses onAddExpense={addExpenseHandler} />
			<Expenses data={expenses} />
		</div>
	)
}
export default App
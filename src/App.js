import './App.css' 
import Expenses from './components/Expenses/Expenses'
function App() {
	const expenses = [
		{
			id: 'e1',
			title: 'Toilet Paper',
			amount: 1.5,
			date: new Date(2020, 7, 14),
		},
		{
			id: 'e2',
			title: 'Flowers shop',
			amount: 1.6,
			date: new Date(2021, 4, 23),
		},
		{
			id: 'e3',
			title: 'Pets shop',
			amount: 1.6,
			date: new Date(2022, 3, 1),
		},
		{
			id: 'e4',
			title: 'Car Insurance',
			amount: 1.6,
			date: new Date(2021, 9, 29),
		},
	]

	return (
		<div>
			<h1 >Let's get started</h1>
			<h2>Test</h2>
			<Expenses data={expenses} />
		</div>
	)
}
export default App
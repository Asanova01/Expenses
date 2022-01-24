import './App.css' //путь к css
import Expenses from './components/Expenses/Expenses'
import NewExpenses from './components/NewExpenses/NewExpenses' //указали путь и название нашего компонента
import { useState } from 'react'  

//предположим что к нам пришли данные из бекэнд в ввиде массива
//тут в объектах хранятся данные

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
		date: new Date(2021,28,9),
	},
	{
		id: 'e3',
		title: 'Pets shop',
		amount: 1.6,
		date: new Date(2023, 3, 1),
	},
	{
		id: 'e4',
		title: 'Car Insurance',
		amount: 1.6,
		date: new Date(2024, 9, 29),
	},
]
function App() {
	//App собирает в себе все компоненты и потом как интерфейс рендерится

	//как аргумент к useState мы передаем нашу перменную EXPENSES, там хранятся данные
	const [expenses, setExpenses] = useState(EXPENSES) //useState возвращает массив с двумя элементами. 1 - это переменная. Если она будет менятся, 
	//React заново будет рендерить нашу компоненту. 2 - это функция. С ее помощью этой функции мы говорим React, что собираемся изменять переменную expenses

	const addExpenseDataHandler = (expense) => { 
		setExpenses((prevState) => {        //будет возвращать последнюю версию объекта
			return [expense, ...prevState]   //здесь идет деструктуризация, новый expense мы молучаем через подъем состояние
		})
	}
//до return можно писать обычный JS код
	return (
		<div>
			{/* тут рендерится эти два компонента. Мы вызываем их как тег, потому что он возвращает тег(JSX код). Но они перед этим импортировались
			 в вверху. import сработате после export*/}

			<NewExpenses onAddExpense={addExpenseDataHandler} /> 
			<Expenses data={expenses} /> 
		</div>
	)
}
export default App

import React from 'react'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import './Expenses.css' //
import ExpensesFilter from './ExpensesFilter'
import { useState } from 'react'

//так как компоненты это функции которые возвращают JSX код, мы даем этим функциям такое же название какое дали файлу.
//Еще когда мы объявляем компоненту они должны начинатся с большой функции

function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState('2022') 

	const filteredChangeInput = (selectedYear) => {
		setFilteredYear(selectedYear)
	} //метод который используется внутри компоненты expenseFilter вызывается как props для получения данных

	const filteredExpenses = props.data.filter((expense) => {
		//идет фильтрация
		return expense.date.getFullYear().toString() === filteredYear //возвращает год указанной даты по местному времени. От expense
	})

	let expensesContent = <p style={{ textAling: 'center', color: 'white' }}>No Expenses Found</p>
if(filteredExpenses.length>0){
	expensesContent = filteredExpenses.map((element) => {
		//а если не true, то заработает  filteredExpenses
		return (
			<ExpenseItem
				key={element.id}
				title={element.title}
				amount={element.amount}
				date={element.date}
			/>
		)
	})
}else if(filteredExpenses === 'All'){

}
	return (
		<Card className='expenses'>
			<ExpensesFilter
				selected={filteredYear} 
				onChangeFilter={filteredChangeInput} 
			/>
				{expensesContent}
			{/*SECOND VERSION*/}
			{/* {filteredExpenses.length === 0 && props.data.length === 0 && (
				<p style={{ textAling: 'center', color: 'white' }}>
					No Expenses Found
				</p>
			)}

			{filteredExpenses.length > 0 &&
				filteredExpenses.map((element) => {
					//а если не true, то заработает  filteredExpenses
					return (
						<ExpenseItem
							key={element.id}
							title={element.title}
							amount={element.amount}
							date={element.date}
						/>
					)
				})}
			{filteredYear === 'All' &&
				props.data.map((element) => { //перебираем data(он приходит с App)а он возвращает новый массив с данными
					//а если не true, то заработает  filteredExpenses
					return (
						<ExpenseItem
							key={element.id}
							title={element.title}
							amount={element.amount}
							date={element.date}
						/>
					)
				})} */}
			{/*FIRST VERSION*/}

			{/* {filteredExpenses.lengh === 0 ? (
				<p style={{textAling: 'center', color:'white'}}>No Expenses Found</p> //lenght свойство массива которая показывает общий размер.
			) : (
				//Если filteredExpenses равен к 0, пусть заработает <p></p>

				filteredExpenses.map((element) => {
					//а если не true, то заработает  filteredExpenses
					return (
						<ExpenseItem
							key={element.id}
							title={element.title}
							amount={element.amount}
							date={element.date}
						/>
					)
				})
			)} */}
		</Card>
	)
}

export default Expenses

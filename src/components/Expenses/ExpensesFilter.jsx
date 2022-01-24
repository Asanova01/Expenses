import './ExpensesFilter.css'

const ExpensesFilter = (props) => {  
	const selectChangeHandler = (e) => {
		props.onChangeFilter(e.target.value) //функция которая приходит с props/подъем состояние
	}
	return (
		<div className='expenses-filter'>
			<div className='expenses-filter__control'>
				<label>Filter by year</label>
				<select value={props.selected} onChange={selectChangeHandler}> {/**в select происходит двухсторонняя привязка,
				 * потому что свое состояние он дает другому компоненту и обратно принимает ее в value (управляет) */}
                    
					<option value='2025'>2025</option> {/* value должен соответствовать значению внутри option */}
					<option value='2024'>2024</option>
					<option value='2023'>2023</option>
					<option value='2022'>2022</option>
					<option value='All'>Select All</option>
				</select>
			</div>
		</div>
	)
}

export default ExpensesFilter

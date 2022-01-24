import './ExpenseDate.css'

function ExpenseDate(props){
 
    const month = props.date.toLocaleString('en-Us', {month:'long'})  //месяц даты
    const day = props.date.toLocaleString('en-Us', {day:'2-digit'})   //день 
    const year = props.date.getFullYear()                             //целый год

    return(
        //динамическая верстка
        <div className='expense-date'>
        <div className='expense-date__month'>{month}</div> 
        <div className='expense-date__day'>{day}</div>
        <div className='expense-date__year'>{year}</div>
    </div>
    )
}
export default ExpenseDate //экспортируем в ExpenseItem
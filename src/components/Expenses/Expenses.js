import React, { useState } from 'react'
import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'

function Expenses(props) {

  const [filterYear, setFilterYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilterYear(selectedYear);
  }

  return (
    <Card className='expenses'>
            <ExpenseFilter selected={filterYear} onChangeFilter={filterChangeHandler}/>
            {
              props.items.map(expense => <ExpenseItem 
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                />)
            }
    </Card>
  )
}

export default Expenses
import React, { useState } from 'react'
import './Expenses.css'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'
import ExpensesList from './ExpensesList'

function Expenses(props) {

  const [filterYear, setFilterYear] = useState('2023');

  const filterChangeHandler = selectedYear => {
    setFilterYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <li>
      <Card className='expenses'>
            <ExpenseFilter 
              selected={filterYear} 
              onChangeFilter={filterChangeHandler}
            />
            <ExpensesList items={filteredExpenses}/>
      </Card>
    </li>
  )
}

export default Expenses
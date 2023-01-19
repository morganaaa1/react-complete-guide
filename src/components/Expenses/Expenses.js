import React, { useState } from 'react'
import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter'

function Expenses(props) {

  const [filterYear, setFilterYear] = useState('2023');

  const filterChangeHandler = selectedYear => {
    setFilterYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  let expensesContent = <p>No Expenses Found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }

  return (
    <Card className='expenses'>
            <ExpenseFilter 
              selected={filterYear} 
              onChangeFilter={filterChangeHandler}
            />
            {
              expensesContent
            }
    </Card>
  )
}

export default Expenses
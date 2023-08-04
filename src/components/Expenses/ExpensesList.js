import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css'
const ExpensesList = (props) => {
    let expenseContent = <h1 className='expenses-list__fallback'>No data found</h1>
    if (props.items.length != 0) {    
        expenseContent= props.items.map((object) => (
          <ExpenseItem
            title={object.title}
            amount={object.amount}
            date={object.date}
            key={object.id}
          />
        ))    
    }
    return (
        <ul className='expenses-list'>
            {expenseContent}
        </ul>
    );
}

export default ExpensesList;

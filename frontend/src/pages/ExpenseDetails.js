import React from 'react'

function ExpenseDetails({ incomeAmt, expenseAmt }) {
    return (
        <div>
            <div>
                Your Balance is : <h3>₹  {incomeAmt - expenseAmt}</h3>
            </div>
            {/* Show Income & Expense amount */}
            <div className="amounts-container">
                Income this month :
                <span className="income-amount">₹{incomeAmt}</span>
                Expenses this month :
                <span className="expense-amount">₹{expenseAmt}</span>
            </div>
        </div>
    )
}

export default ExpenseDetails
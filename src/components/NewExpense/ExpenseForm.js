import React from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" onChange=""/>
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input type="number" id="amount" min="0.01" step="0.01" onChange=""/>
        </div>
        <div className="new-expense__control">
          <label htmlFor="Date">Date</label>
          <input type="date" id="Date" min="2019-01-01" max="2022-12-31" onChange=""/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
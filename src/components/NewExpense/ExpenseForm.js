import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = ({onSaveData}) => {
  /*const [enteredTittle, setEnteredTittle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");*/

  const [userInput, setUserInput] = useState({
    enteredTittle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  /*const titlrChangeHandler = (e) => {
    //setEnteredTittle(e.target.value);
    setUserInput((previousState) => {
      return {
        ...previousState,
        enteredTittle: e.target.value,
      };
    });
  };

  const amountChangeHandler = (e) => {
    //setEnteredAmount(e.target.value);
    setUserInput((previousState) => {
      return {
        ...previousState,
        enteredAmount: e.target.value,
      };
    });
  };

  const dateChangeHandler = (e) => {
    //setEnteredDate(e.target.value);
    setUserInput((previousState) => {
      return {
        ...previousState,
        enteredDate: e.target.value,
      };
    });
  };*/

  const inputChangeHandler = (identifier, value) => {
    if (identifier === "title") {
      setUserInput((previousState) => {
        return {
          ...previousState,
          enteredTittle: value,
        };
      });
    } else if (identifier === "amount") {
      setUserInput((previousState) => {
        return {
          ...previousState,
          enteredAmount: value,
        };
      });
    } else if (identifier === "Date") {
      setUserInput((previousState) => {
        console.log(previousState.enteredDate);
        return {
          ...previousState,
          enteredDate: value,
        };
      });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault()

    const expenseData = {
      title: userInput.enteredTittle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate)
    }

    onSaveData(expenseData)

    setUserInput({
      enteredTittle: "",
      enteredAmount: "",
      enteredDate: "",
    })

  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={userInput.enteredTittle}
            onChange={(e) => inputChangeHandler("title", e.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            value={userInput.enteredAmount}
            min="0.01"
            max="999999999.99"
            step="0.01"
            onChange={(e) => inputChangeHandler("amount", e.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="Date">Date</label>
          <input
            type="date"
            id="Date"
            value={userInput.enteredDate}
            min="2019-01-01"
            max="2024-12-31"
            onChange={(e) => inputChangeHandler("Date", e.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

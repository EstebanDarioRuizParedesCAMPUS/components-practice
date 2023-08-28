import { useState } from "react";
import ExprenseItem from "./ExprenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter"

import "./Expenses.css";
 
const Expenses = (props) => {
  const [ filteredYear, setFilteredYear ] = useState('2020')

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />


      <ExprenseItem
        title={props.item[0].title}
        amount={props.item[0].amount}
        date={props.item[0].date}
      />
      <ExprenseItem
        title={props.item[1].title}
        amount={props.item[1].amount}
        date={props.item[1].date}
      />
      <ExprenseItem
        title={props.item[2].title}
        amount={props.item[2].amount}
        date={props.item[2].date}
      />
      <ExprenseItem
        title={props.item[3].title}
        amount={props.item[3].amount}
        date={props.item[3].date}
      />
    </Card>
  );
}

export default Expenses;

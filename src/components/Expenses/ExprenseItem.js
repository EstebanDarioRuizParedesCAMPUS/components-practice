import React, { useState } from "react"

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExprenseItem.css";

const ExprenseItem = ({ date, title, amount }) => {

  const [titlle,sertTittlle] = useState(title)

  const clickHandler = ()=>{
    if(titlle == title){
      sertTittlle('Updatedd')
    } else if (titlle == 'Updatedd'){
      sertTittlle(title)
    }
    console.log(titlle);
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{titlle}</h2>
        <div className="expense-item__price">${amount}</div>
        <button onClick={clickHandler}>Change title</button>
      </div>
    </Card>
  );
};

export default ExprenseItem;

import { useState } from "react";
import ExprenseItem from "./ExprenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  let filterInfoText

  if (selectedYear === '2019'){
    filterInfoText = "2020, 2021, 2022 & 2023"
  } else if (selectedYear === '2020') {
    filterInfoText = "2019, 2021, 2022 & 2023"
  } else if (selectedYear === '2021') {
    filterInfoText = "2019, 2020, 2022 & 2023"
  } else if (selectedYear === '2022') {
    filterInfoText = "2019, 2020, 2021 & 2023"
  } else if (selectedYear === '2023') {
    filterInfoText = "2019, 2020, 2021 & 2022"
  } else {
    filterInfoText = "No one Year"
  }

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);

  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      <p>Data for years {filterInfoText} is hidden</p>

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
};

export default Expenses;

import { useState } from "react";
import TotalIncome from "./TotalIncome.js";
import OutgoingList from "./OutgoingList.js";
import BudgetRemaining from "./BudgetRemaining.js";

const Budget = () => {
  const [outgoingData, setOutgoingData] = useState([
    { name: "", money: "", moneyValid: "" },
  ]);
  const [income, setIncome] = useState({ incomeValue: "", incomeValid: "" });

  const showDecimals = () => {
    if (!isNaN(income.incomeValue)) {
      setIncome((currentIncome) => {
        const newIncome = { ...currentIncome };
        newIncome.incomeValue = Number(newIncome.incomeValue).toFixed(2);
        return newIncome;
      });
    }
  };

  const addOutgoing = () => {
    setOutgoingData((outgoingData) => {
      const updatedOutgoingData = [...outgoingData];
      updatedOutgoingData.push({ name: "", money: "" });
      return updatedOutgoingData;
    });
  };

  return (
    <div>
      <TotalIncome
        income={income}
        setIncome={setIncome}
        showDecimals={showDecimals}
      />
      <OutgoingList
        outgoingData={outgoingData}
        setOutgoingData={setOutgoingData}
      />
      <button onClick={addOutgoing}>+</button>
      <p>Budget remaining: </p>
      <BudgetRemaining
        income={income.incomeValue}
        outgoingData={outgoingData}
      />
    </div>
  );
};

export default Budget;

import { useState } from "react";
import OutgoingList from "./OutgoingList.js";

const Budget = () => {
  const [outgoingData, setOutgoingData] = useState([
    { name: "Name of outgoing", money: 0.0 },
  ]);
  const [income, setIncome] = useState("0.00");

  const changeIncomeDisplay = (e) => {
    if (!e.target.value) return;
    const newIncome = e.target.value;
    const incomePara = <p>Total monthly income: £{newIncome}</p>;
    setIncomeDisplay(() => {
      setIncome(() => {
        return newIncome;
      });
      return incomePara;
    });
  };

  const incomeInputField = (
    <form>
      <label>
        Total monthly income: £
        <input
          type="text"
          placeholder={income}
          onBlur={changeIncomeDisplay}
        ></input>
      </label>
    </form>
  );

  const [incomeDisplay, setIncomeDisplay] = useState(incomeInputField);

  const addOutgoing = () => {
    setOutgoingData((outgoingData) => {
      const updatedOutgoingData = [...outgoingData];
      updatedOutgoingData.push({ name: "Name of outgoing", money: 0.0 });
      return updatedOutgoingData;
    });
  };

  return (
    <div>
      {incomeDisplay}
      <OutgoingList outgoingData={outgoingData} />
      <button onClick={addOutgoing}>Add another outgoing</button>
      <p>
        Budget remaining: <BudgetRemaining income={income} />
      </p>
    </div>
  );
};

const BudgetRemaining = ({ income }) => {
  if (income > 0) {
    return <span>£{income}</span>;
  }
  return null;
};

export default Budget;

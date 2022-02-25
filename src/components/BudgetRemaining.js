const BudgetRemaining = ({ income, outgoingData }) => {
  let budget = income;
  if (isNaN(income)) {
    return <span>£</span>;
  }
  outgoingData.forEach((outgoing) => {
    if (outgoing.removed || isNaN(outgoing.money) === true) {
      return;
    } else {
      budget -= outgoing.money;
    }
  });
  return <span>£{budget.toFixed(2)}</span>;
};

export default BudgetRemaining;

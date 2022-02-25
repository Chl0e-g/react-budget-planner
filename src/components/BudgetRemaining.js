const BudgetRemaining = ({ income, outgoingData }) => {
  let budget = income;
  if (isNaN(income)) {
    return <span>£</span>;
  }
  outgoingData.forEach((outgoing) => {
    if (outgoing.removed || isNaN(outgoing.money)) {
      return <span>£</span>;
    } else {
      budget -= outgoing.money;
    }
  });
  return <span className="total-label total-money">£{Number(budget).toFixed(2)}</span>;
};

export default BudgetRemaining;

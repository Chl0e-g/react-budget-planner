const TotalIncome = ({ income, setIncome, showDecimals }) => {
  const changeIncome = (e) => {
    const userIncome = e.target.value;
    setIncome((currentIncome) => {
      const newIncome = { ...currentIncome };
      newIncome.incomeValue = userIncome;
      //class to show error if money invalid
      if (
        newIncome.incomeValue.length > 0 &&
        isNaN(newIncome.incomeValue)
      ) {
        newIncome.incomeValid = "invalid-money";
      } else {
        newIncome.incomeValid = "";
      }
      return newIncome;
    });
  };

  return (
    <form>
      <label>
        Total monthly income: £
        <input
          type="text"
          placeholder="0.00"
          onChange={changeIncome}
          onBlur={showDecimals}
          value={income.incomeValue}
          className={`money-input ${income.incomeValid}`}
        ></input>
      </label>
    </form>
  );
};

export default TotalIncome;

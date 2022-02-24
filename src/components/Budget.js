const Budget = () => {
  return (
    <div>
      <h2>Total monthly income: </h2>
      <p>user supplied income</p>
      {/* <Outgoing /> */}
      <button>Add another outgoing</button>
      <h2>Budget remaining: </h2>
      <p>dynamically calculated remaining budget</p>
    </div>
  );
};

export default Budget;

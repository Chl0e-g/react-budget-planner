import Outgoing from "./Outgoing.js"

const Budget = () => {
  const outgoingData = { name: "test name", money: 10.0 };
  return (
    <div>
      <h2>Total monthly income: </h2>
      <p>user supplied income</p>
      <ul>
        <Outgoing outgoingData={outgoingData} />
      </ul>
      <button>Add another outgoing</button>
      <h2>Budget remaining: </h2>
      <p>dynamically calculated remaining budget</p>
    </div>
  );
};

export default Budget;

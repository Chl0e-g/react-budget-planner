const Outgoing = ({ outgoingData }) => {
  return (
    <div>
      {outgoingData.map((outgoing, i) => {
        return (
          <li key={i}>
            <p>{outgoing.name}:</p>
            <p>£{outgoing.money}</p>
          </li>
        );
      })}
    </div>
  );
};

export default Outgoing;

const Outgoing = ({ outgoingData, setOutgoingData }) => {
  const changeOutgoingMoney = (e) => {
    setOutgoingData((originalData) => {
      if (!e.target.value) return originalData;
      const newOutgoingData = [...originalData].map((outgoing) => {
        return { ...outgoing };
      });
      newOutgoingData[e.target.attributes[2].nodeValue].money = +e.target.value;
      return newOutgoingData;
    });
  };

  return (
    <div>
      {outgoingData.map((outgoing, i) => {
        return (
          <form key={i}>
            <input type="text" placeholder={outgoing.name}></input> - £
            <input
              type="text"
              placeholder={outgoing.money}
              onBlur={changeOutgoingMoney}
              index={i}
            ></input>
          </form>
        );
      })}
    </div>
  );
};

export default Outgoing;

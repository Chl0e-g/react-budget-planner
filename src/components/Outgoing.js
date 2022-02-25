import { useState } from "react";

const Outgoing = ({ outgoingData, setOutgoingData }) => {

  const changeOutgoingMoney = (e) => {
    setOutgoingData((originalData) => {
      const newOutgoingData = [...originalData].map((outgoing) => {
        return { ...outgoing };
      });
      newOutgoingData[e.target.attributes[2].nodeValue].money = e.target.value;
      //adding class for error display
      if (e.target.value.length > 0 && isNaN(e.target.value)) {
        newOutgoingData[e.target.attributes[2].nodeValue].moneyValid = "invalid-money"
      } else {
        newOutgoingData[e.target.attributes[2].nodeValue].moneyValid = ""
      }
      return newOutgoingData;
    });
  };

  const changeOutgoingName = (e) => {
    setOutgoingData((originalData) => {
      const newOutgoingData = [...originalData].map((outgoing) => {
        return { ...outgoing };
      });
      newOutgoingData[e.target.attributes[2].nodeValue].name = e.target.value;
      return newOutgoingData;
    });
  };

  const showDecimals = (e) => {
    if (+e.target.value > 0) {
      setOutgoingData((originalData) => {
        const newOutgoingData = [...originalData].map((outgoing) => {
          return { ...outgoing };
        });
        const inputMoney = e.target.value;
        newOutgoingData[e.target.attributes[2].nodeValue].money =
          Number(inputMoney).toFixed(2);
        return newOutgoingData;
      });
    }
  };

  const removeOutgoing = (e) => {
    setOutgoingData((originalData) => {
      const newOutgoingData = [...originalData].map((outgoing) => {
        return { ...outgoing };
      });
      const indexToRemove = e.target.attributes[1].nodeValue;
      newOutgoingData[indexToRemove].removed = true;
      return newOutgoingData;
    });
  };

  return (
    <div>
      {outgoingData.map((outgoing, i) => {
        if (outgoing.removed) return <div key={`empty${i}`}></div>;
        else {
          return (
            <form key={i} className="outgoing-row">
              <input
                type="text"
                placeholder="Add an outgoing"
                value={outgoing.name}
                onChange={changeOutgoingName}
                index={i}
              ></input>{" "}
              - £
              <input
                type="text"
                placeholder="0.00"
                value={outgoing.money}
                onChange={changeOutgoingMoney}
                onBlur={showDecimals}
                index={i}
                className={`money-input ${outgoing.moneyValid}`}
              ></input>
              <button
                className="delete-button"
                index={i}
                onClick={removeOutgoing}
              >
                X
              </button>
            </form>
          );
        }
      })}
    </div>
  );
};

export default Outgoing;

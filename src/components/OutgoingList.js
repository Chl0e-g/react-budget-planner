import Outgoing from "./Outgoing.js";

const OutgoingList = ({outgoingData, setOutgoingData}) => {
  return (
    <ul>
      <Outgoing outgoingData={outgoingData} setOutgoingData={setOutgoingData} />
    </ul>
  );
};

export default OutgoingList;
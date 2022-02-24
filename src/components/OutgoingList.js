import Outgoing from "./Outgoing.js";

const OutgoingList = ({outgoingData}) => {
  return (
    <ul>
      <Outgoing outgoingData={outgoingData} />
    </ul>
  );
};

export default OutgoingList;
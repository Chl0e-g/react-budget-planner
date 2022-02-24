const Outgoing = ({outgoingData: {name, money}}) => {
    return(
        <li><p>{name}:</p><p>£{money}</p></li>
    )
}

export default Outgoing;
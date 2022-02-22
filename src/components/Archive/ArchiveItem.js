

const ArchiveItem = ({ side, price, instrument, timeStamp, volume }) => {
  return (
    <div className={`arhive__table ${side === 'BUY' ? 'green' : 'red'}`}>
      <span>{side}</span>
      <span>{price}</span>
      <span>{instrument}</span>
      <span>{volume}</span>
      <span>{timeStamp}</span>
    </div>
  )
}

export default ArchiveItem

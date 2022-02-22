import { useSelector } from "react-redux"
import ArchiveItem from "./ArchiveItem"

const Archive = () => {
  const archive = useSelector(state => state.archive)

  return (
    <>
      {
        archive.length > 0 ? (<main className="archive">
          <div className="archive__header">
            <span>Side</span>
            <span>Price</span>
            <span>Instrument</span>
            <span>Volume</span>
            <span>Timestamp</span>
          </div>
          {archive.map((item, i) => <ArchiveItem key={item.id} {...item} />)}
        </main>) : 'Здесь пока ничего нет'
      }
    </>

  )
}

export default Archive

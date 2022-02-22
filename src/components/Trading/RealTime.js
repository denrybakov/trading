import { useEffect, useState } from "react"


const RealTime = () => {

  const [time, setTime] = useState(new Date().toLocaleTimeString())
  const tick = () => {
    setTime(new Date().toLocaleTimeString())
  }

  useEffect(() => {
    const timeId = setInterval(() => tick(), 1000)
    return () => {
      clearInterval(timeId)
    }
  }, [])


  return (
    <div className="time">{time}</div>
  )
}

export default RealTime

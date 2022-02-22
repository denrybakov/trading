import { useState, useEffect } from "react"
import RealTime from "./RealTime"
import { useSelector, useDispatch } from "react-redux"
import { getUsdRub, getUsdCad, getGbrUsd } from "../../Redux/Actions/currencyPairAction"
import Modal from "../Modal/Modal"

const Trading = () => {
  const [price, setPrice] = useState(false)
  const [modal, setModal] = useState(false)
  const [select, setSelect] = useState('')
  const [contentModal, setContentModal] = useState({ valueModal: '', priceModal: 0 })

  useEffect(() => {
    dispatch(getUsdRub())
    dispatch(getUsdCad())
    dispatch(getGbrUsd())
  }, [])

  const priceUsdRub = useSelector(state => state.usdRub)
  const priceUsdCad = useSelector(state => state.usdCad)
  const priceGbrUsd = useSelector(state => state.gbrUsd)
  const dispatch = useDispatch()

  const selectChange = (e) => {
    switch (e.target.value) {
      case 'USD/RUB':
        setSelect(e.target.value)
        return setPrice(priceUsdRub)
      case 'USD/CAD':
        setSelect(e.target.value)
        return setPrice(priceUsdCad)
      case 'GBR/USD':
        setSelect(e.target.value)
        return setPrice(priceGbrUsd)
      case 'null':
        return setPrice(false)
      default:
        return null
    }
  }

  const showModal = (e) => {
    if (price) {
      const parent = e.target.closest('[data-content]')
      console.log(parent)
      const spanText = parent.querySelector('span').textContent
      const strongPrice = parent.querySelector('strong').textContent
      setModal(true)
      setContentModal({
        valueModal: spanText,
        priceModal: strongPrice,
        instrumentModal: select
      })
    }
  }

  const hideModal = () => setModal(false)

  return (
    <main className="trading">
      <RealTime />

      <select name="" id="" onChange={selectChange} className='trading__select'>
        <option value="null" default>Выберите Валютную пару</option>
        <option value="USD/RUB">USD/RUB TOM</option>
        <option value="USD/CAD">USD/CAD TOM</option>
        <option value="GBR/USD">GBR/USD TOM</option>
      </select>

      <div className="trading__price" >
        <div className="trading__buy" onClick={showModal} data-content='buy'>
          {price ? <span className='trading__text'>BUY</span> : null}
          {price ? <strong className="trading__currency">{price[0]}</strong> : 'Не выбрана валютная пара'}
        </div>
        <div className="trading__sell" onClick={showModal} data-content='cell'>
          {price ? <span className='trading__text'>CELL</span> : null}
          {price ? <strong className="trading__currency">{price[1]}</strong> : 'Не выбрана валютная пара'}
        </div>
      </div>

      <Modal
        show={modal}
        hideModal={hideModal}
        contentModal={contentModal}
      />
    </main >
  )
}

export default Trading

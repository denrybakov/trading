import { useEffect, useState } from "react"
import { setArchive } from "../../Redux/Actions/archiveAction"
import { useDispatch, useSelector } from "react-redux"



const Modal = ({ show, hideModal, contentModal }) => {

  const [dataOrder, setDataOrder] = useState({
    volume: '',
  })

  useEffect(() => {
    setDataOrder({
      side: contentModal.valueModal,
      price: contentModal.priceModal,
      instrument: contentModal.instrumentModal,
      timeStamp: new Date().toLocaleString(),
    })
  }, [contentModal])

  const dispatch = useDispatch()

  const changeVolume = (e) => {
    setDataOrder(prev => ({ ...prev, volume: +e.target.value }))
  }

  const createOrder = () => {
    if (dataOrder.volume === undefined) {
      console.log('erer');
      return alert('Поле обязательное для заполнения')
    }
    dispatch(setArchive(dataOrder))
    setDataOrder({ volume: '' })
    hideModal()
  }

  return (
    <>
      {show ? (
        <div className="modal" >
          <div className="modal__content">
            <h2>Make order</h2>
            <div className="modal__order">{contentModal.valueModal} - {contentModal.priceModal}</div>
            <input
              type="number"
              value={dataOrder.volume}
              placeholder='Volume'
              className='modal__input'
              onChange={changeVolume}
            />
            <div className="modal__group-btn">
              <button
                className='btn-secondary'
                onClick={hideModal}
              >Cancel</button>
              <button
                className='btn-primary'
                onClick={createOrder}
              >Ok</button>
            </div>
          </div>
        </div >
      ) : null}
    </>

  )

}

export default Modal

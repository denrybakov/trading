import * as TYPE from '../Types/Types'
import { v4 as uuidv4 } from 'uuid'

export const addArchive = value => ({
  type: TYPE.SET_ARCHIVE,
  payload: value
})

export const setArchive = data => dispatch => {
  const newData = { ...data, id: uuidv4() }
  dispatch(addArchive(newData))
}

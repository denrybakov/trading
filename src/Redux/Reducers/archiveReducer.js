import * as TYPE from '../Types/Types'

export const archiveReducer = (state = [], { type, payload }) => {
  switch (type) {
    case TYPE.SET_ARCHIVE:
      return [payload, ...state]
    default:
      return state
  }
}

import * as TYPE from '../Types/Types'

export const usdCadReducer = (state = [], { type, payload }) => {
  switch (type) {
    case TYPE.GET_USD_CAD:
      return [...payload]
    default:
      return state
  }
}

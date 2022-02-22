import * as TYPE from '../Types/Types'

export const gbrUsdReducer = (state = [], { type, payload }) => {
  switch (type) {
    case TYPE.GET_GBR_USD:
      return [...payload]
    default:
      return state
  }
}



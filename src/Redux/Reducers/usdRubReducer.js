import * as TYPE from '../Types/Types'

export const usdRubReducer = (state = [], { type, payload }) => {
  switch (type) {
    case TYPE.GET_USD_RUB:
      return [...payload]
    default:
      return state
  }
}


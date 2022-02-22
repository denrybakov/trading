import * as TYPE from '../Types/Types'
import { randomGeneratePrice } from '../randomPrices'

export const usdRub = value => ({
  type: TYPE.GET_USD_RUB,
  payload: value
})

export const usdCad = value => ({
  type: TYPE.GET_USD_CAD,
  payload: value
})

export const gbrUsd = value => ({
  type: TYPE.GET_GBR_USD,
  payload: value
})

// Actions

export const getUsdRub = () => dispatch => {
  const currentUsdRub = randomGeneratePrice(78.98)
  dispatch(usdRub(currentUsdRub))
}

export const getUsdCad = () => dispatch => {
  const currentUsdCad = randomGeneratePrice(1.28)
  dispatch(usdCad(currentUsdCad))
}

export const getGbrUsd = () => dispatch => {
  const currentGbrUsd = randomGeneratePrice(1.36)
  dispatch(gbrUsd(currentGbrUsd))
}

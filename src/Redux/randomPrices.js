

export const randomGeneratePrice = currentPrice => {

  let buy = currentPrice + 0.5
  let sell = currentPrice - 0.5

  let resBuy = (currentPrice) - 0.5 + Math.random() * (buy - currentPrice + 1)
  let resSell = (sell) - 0.5 + Math.random() * (currentPrice - sell + 1)

  // eslint-disable-next-line no-unused-expressions
  resBuy === resSell ? resBuy += 0.1 : null

  return [+resBuy.toFixed(4), +resSell.toFixed(4)]
}


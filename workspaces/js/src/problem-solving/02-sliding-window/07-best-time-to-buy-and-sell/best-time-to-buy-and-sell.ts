/*
Statement
	Given an array where the element at the index i represents the price of a stock on day i, find the maximum profit that you can gain by buying the stock once and then selling it.

Constraints
	We can’t sell before buying a stock, that is, the array index at which stock is bought will always be less than the index at which the stock is sold.

Examples

*/
const maxProfitByMe = (prices: number[]): number => {
  const lastDay = prices.length - 1

  let maxProfit = 0
  let buyDay = 0

  for (let day = 1; day <= lastDay; day++) {
    const profit = prices[day] - prices[buyDay]

    if (profit < 0) {
      buyDay = day
    }

    maxProfit = profit > maxProfit ? profit : maxProfit
  }

  return maxProfit
}

export const maxProfit = maxProfitByMe

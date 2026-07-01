import { maxProfit } from './best-time-to-buy-and-sell'

describe('maxProfit', () => {
  it.each([
    {
      prices: [1, 2, 4, 2, 5, 7, 2, 4, 9, 0, 9],
      expected: 9,
    },
    {
      prices: [7, 1, 5, 3, 6, 4],
      expected: 5,
    },
    {
      prices: [7, 6, 4, 3, 1],
      expected: 0,
    },
    {
      prices: [2, 6, 8, 7, 8, 7, 9, 4, 1, 2, 4, 5, 8],
      expected: 7,
    },
    {
      prices: [1, 4, 2],
      expected: 3,
    },
  ])('computes profit for $prices', ({ prices, expected }) => {
    expect(maxProfit(prices)).toBe(expected)
  })
})

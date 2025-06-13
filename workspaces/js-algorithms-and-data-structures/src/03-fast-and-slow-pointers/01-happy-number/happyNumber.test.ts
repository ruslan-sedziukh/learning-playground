import { isHappy } from './happyNumber'

describe('isHappy', () => {
  it.each([
    [2147483646, false],
    [1, true],
    [19, true],
    [8, false],
    [7, true],
  ])('returns %s for %i', (n, expected) => {
    expect(isHappy(n)).toBe(expected)
  })
})

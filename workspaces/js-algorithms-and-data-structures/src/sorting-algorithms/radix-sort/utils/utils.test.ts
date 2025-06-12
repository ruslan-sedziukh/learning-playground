import { getDigit, getDigitsNumber, getMaxDigitsNumber } from './utils'

describe('getDigit', () => {
  it.each([
    { num: 1, position: 0, expected: 1 },
    { num: 30, position: 1, expected: 3 },
    { num: 30, position: 2, expected: 0 },
    { num: 8653, position: 2, expected: 6 },
  ])(
    'returns $expected for number $num and position $position',
    ({ num, position, expected }) => {
      expect(getDigit(num, position)).toBe(expected)
    }
  )
})

describe('getDigitsNumber', () => {
  it.each([
    { num: 1, expected: 1 },
    { num: 30, expected: 2 },
    { num: 8653, expected: 4 },
    { num: 6795963345, expected: 10 },
  ])('returns $expected for number $num', ({ num, expected }) => {
    expect(getDigitsNumber(num)).toBe(expected)
  })
})

describe('getMaxDigitsNumber', () => {
  it.each([
    { arr: [], expected: 0 },
    { arr: [1], expected: 1 },
    { arr: [30, 1], expected: 2 },
    { arr: [8653, 35, 782], expected: 4 },
  ])('returns $expected for arr $arr', ({ arr, expected }) => {
    expect(getMaxDigitsNumber(arr)).toBe(expected)
  })
})

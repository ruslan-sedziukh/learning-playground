import { minSubArrayLen } from './minSubArrayLen'

describe('minSubArrayLen', () => {
  it.each([
    { arr: [2, 3, 1, 2, 4, 3], sum: 7, expected: 2 },
    { arr: [2, 1, 6, 5, 4], sum: 9, expected: 2 },
    { arr: [3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], sum: 52, expected: 1 },
    { arr: [1, 4, 16, 22, 5, 7, 8, 9, 10], sum: 39, expected: 3 },
    { arr: [1, 4, 16, 22, 5, 7, 8, 9, 10], sum: 55, expected: 5 },
    { arr: [4, 3, 3, 8, 1, 2, 3], sum: 11, expected: 2 },
    { arr: [1, 4, 16, 22, 5, 7, 8, 9, 10], sum: 95, expected: 0 },
  ])(
    'returns $expected for array $arr and sum $sum',
    ({ arr, sum, expected }) => {
      expect(minSubArrayLen(arr, sum)).toBe(expected)
    }
  )
})

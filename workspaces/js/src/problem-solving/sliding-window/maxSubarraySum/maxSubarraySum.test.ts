import { maxSubarraySum } from './maxSubarraySum'

describe('maxSubarraySum', () => {
  it.each([
    { arr: [100, 200, 300, 400], length: 2, expected: 700 },
    { arr: [1, 4, 2, 10, 23, 3, 1, 0, 20], length: 4, expected: 39 },
    { arr: [-3, 4, 0, -2, 6, -1], length: 2, expected: 5 },
    { arr: [3, -2, 7, -4, 1, -1, 4, -2, 1], length: 2, expected: 5 },
    { arr: [2, 3], length: 3, expected: null },
  ])(
    'returns $expected for subarray of $arr with a length of $length',
    ({ arr, length, expected }) => {
      expect(maxSubarraySum(arr, length)).toBe(expected)
    }
  )
})

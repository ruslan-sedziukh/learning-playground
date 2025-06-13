import { minSubArrayLen } from '.'

describe('minSubArrayLen', () => {
  it.each([
    {
      target: 7,
      nums: [2, 3, 1, 2, 4, 3],
      expected: 2,
    },
    {
      target: 4,
      nums: [1, 4, 4],
      expected: 1,
    },
    {
      target: 11,
      nums: [1, 1, 1, 1, 1, 1, 1, 1],
      expected: 0,
    },
    {
      target: 10,
      nums: [1, 2, 3, 4],
      expected: 4,
    },
    {
      target: 5,
      nums: [1, 2, 1, 3],
      expected: 3,
    },
    {
      target: 3,
      nums: [3, 1, 1],
      expected: 1,
    },
    {
      target: 5,
      nums: [2, 2, 2, 3, 1],
      expected: 2,
    },
  ])(
    'returns $expected when $nums and $target',
    ({ target, nums, expected }) => {
      expect(minSubArrayLen(target, nums)).toBe(expected)
    }
  )
})

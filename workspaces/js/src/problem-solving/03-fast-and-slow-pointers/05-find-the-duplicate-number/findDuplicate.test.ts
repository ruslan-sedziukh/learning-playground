import { findDuplicate } from './findDuplicate'

describe('findDuplicate', () => {
  it.each([
    { nums: [3, 4, 1, 4, 2], expected: 4 },
    { nums: [1, 1], expected: 1 },
    { nums: [1, 3, 4, 2, 2], expected: 2 },
    { nums: [1, 6, 3, 2, 7, 3, 5, 4], expected: 3 },
    { nums: [1, 2, 2], expected: 2 },
    { nums: [1, 4, 3, 3, 2, 5], expected: 3 },
    { nums: [1, 4, 3, 2, 3, 5], expected: 3 },
    { nums: [1, 3, 3, 4, 2, 5], expected: 3 },
  ])('finds the duplicate number correctly for $nums', ({ nums, expected }) => {
    const result = findDuplicate(nums)
    expect(result).toBe(expected)
  })
})

/*

[1, 3, 4, 2, 2]

nums[0] = 1 | nums[0] = 1
nums[1] = 3 | nums[3] = 2
nums[3] = 2 | nums[4] = 2
nums[2] = 4 | nums[4] = 2
nums[4] = 2 | nums[4] = 2

*/

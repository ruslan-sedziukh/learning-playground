import { findSumOfThree } from './sum-of-three'

describe('findSumOfThree', () => {
  it.each([
    // [[1, -1, 0], -1, false],
    [[3, 1, 7, 8, 4, 200, 198, 108, 5, 2, 20, 56], 19, true], // Use to check number of iterations
    // [[3, 1, 7, 8, 4, 5, 2], 20, true],
    // [[3, 7, 1, 2, 8, 4, 5], 21, false],
    // [[-1, 2, 1, -4, 5, -3], -8, true],
    // [[-1, 2, 1, -4, 5, -3], 0, true],
  ])('returns %s for %j and target %s', (nums, target, expected) => {
    expect(findSumOfThree(nums, target)).toBe(expected)
  })
})

/*

Problem with Adonis's solution. When we have very big number of elements for which sum with other two elements is > target. If we start third right (or high) element from the end of array on each iteration we need to iterate through this elements every time.

Problem with my solution. It is opposite. If we have a lot of elements for which sum is < target we need to iterate through all those elements every time. Plus for each new middle iteration through high is done. It lot more work to do. 

Conclusion. First solution have less issues. Optimal solution should be based on it.

Optimization can be - not iterate from the end of the list every time. 

*/

/*
Statement

	Given an array of positive integers, nums, and a positive integer, target, find the minimum length of a contiguous subarray whose sum is greater than or equal to the target. If no such subarray is found, return 0.

Examples

	nums [1, 2, 7, 3, 4, 5]
	target 10
	min length 2
	------------------------
	nums [1 1, 1, 1, 1, 3]
	target 11
	min length 0
	------------------------
	nums 2 3 1 2 4 3
	target 7
	min length 2
*/
export const minSubArrayLen = (target: number, nums: number[]): number => {
  let windowSum = nums[0]
  let windowStartIndex = 0
  let minLength = windowSum >= target ? 1 : Infinity

  for (let i = 1; i < nums.length; i++) {
    windowSum += nums[i]

    if (windowSum < target) {
      continue
    }

    // move window start to reduce its length
    for (windowStartIndex; true; windowStartIndex++) {
      const newWindowSum = windowSum - nums[windowStartIndex]

      if (newWindowSum < target) {
        break
      }

      windowSum = newWindowSum
    }

    const windowLength = i - windowStartIndex + 1

    if (windowLength < minLength) {
      minLength = windowLength
    }
  }

  return minLength === Infinity ? 0 : minLength
}

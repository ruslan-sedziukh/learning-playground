/*
Statement

	Given an array of positive numbers, nums, such that the values lie in the range [1,n], inclusive, and that there are n+1 numbers in the array, find and return the duplicate number present in nums.

	There is only one repeated number in nums.

	Note: You cannot modify the given array nums. You have to solve the problem using only constant extra space.

Examples

	input [1, 3, 3, 4, 2, 5]
	output 3
	------------------------
	input [1, 5, 3, 4, 2, 5]
	output 5
	------------------------
	input [1, 2, 3, 4, 5, 6, 6, 7]
	output 6
	------------------------
	input [4, 6, 7,  7, 3, 5, 2, 8, 1]
	output 7
*/
export const findDuplicate = (nums: number[]) => {
  let slow = nums[0]
  let fast = nums[0]
  let intersection = false

  while (!intersection) {
    slow = nums[slow]
    fast = nums[nums[fast]]

    intersection = slow === fast
  }

  slow = nums[0]

  while (slow !== fast) {
    slow = nums[slow]
    fast = nums[fast]
  }

  return fast
}

/*
Statement

  Given an array of integers, nums, and an integer value, target, determine if there are any three integers in nums whose sum is equal to the target, that is, nums[i] + nums[j] + nums[k] == target. Return TRUE if three such integers exist in the array. Otherwise, return FALSE.

  Note: A valid triplet consists of elements with distinct indexes. This means, for the triplet nums[i], nums[j], and nums[k], i ≠ j, i ≠ k, j ≠ k

Examples

  target 1
  nums [-1, 2, 1, 4, -2]
  result true
  ----------------------
  target 1
  nums [-1, 2, 1, 4]
  result false
  ----------------------
  target 20
  nums [3, 7, 1, 2, 8, 4, 5]
  result true
*/

const getNumsMap = (nums: number[]) =>
  nums.reduce((acc, num, index) => {
    acc[num] = index
    return acc
  }, {} as Record<number, number>)

const findSumOfThreeWithMap = (nums: number[], target: number): boolean => {
  const numsMap = getNumsMap(nums)
  const numsLength = nums.length

  let i = 0
  let j = 1

  let firstNum = nums[i]

  while (i < numsLength) {
    const thirdNumber = target - firstNum - nums[j]
    const thirdNumberIndex = numsMap[thirdNumber]

    if (thirdNumberIndex && thirdNumberIndex !== j && thirdNumberIndex !== i) {
      return true
    }

    j++

    if (j === numsLength) {
      i++
      j = i + 1
    }
  }

  return false
}

/*

If we try to find all possible combinations of 3 elements, its n^3.
Map object can decrease it to n^2. 

*/

const findSumOfThreeWithSort = (nums: number[], target: number) => {
  const numsLength = nums.length

  if (numsLength < 3) {
    return false
  }

  const sorted = nums.sort((a: number, b: number) => a - b)

  const areAllNegativesAndNoTarget =
    sorted[numsLength - 1] < 0 && (target > 0 || sorted[0] > target)
  const areAllPositivesAndNoTarget = sorted[0] > 0 && target < sorted[0]

  if (areAllNegativesAndNoTarget || areAllPositivesAndNoTarget) {
    return false
  }

  let low = 0
  let middle = low + 1
  let high = numsLength - 1
  let nextHigh = high

  let iterations = 0

  while (low <= numsLength - 3) {
    iterations++

    if (sorted[numsLength - 1] < 0 && sorted[low] < target) {
      low++
    }

    if (sorted[low] > 0 && sorted[low] > target) {
      break
    }

    const sum = nums[middle] + nums[high] + nums[low]

    if (sum === target) {
      console.log('>>> iterations: ', iterations)

      return true
    }

    if (sum < target) {
      middle++
    } else {
      high--
    }

    if (middle === high) {
      low++
      middle = low + 1
      high = nextHigh
    }
  }

  console.log('>>> iterations: ', iterations)

  return false
}

const findSumOfThreeWithSortOptimized = (nums: number[], target: number) => {
  const numsLength = nums.length

  if (numsLength < 3) {
    return false
  }

  const sorted = nums.sort((a: number, b: number) => a - b)

  const areAllNegativesAndNoTarget =
    sorted[numsLength - 1] < 0 && (target > 0 || sorted[0] > target)
  const areAllPositivesAndNoTarget = sorted[0] > 0 && target < sorted[0]

  if (areAllNegativesAndNoTarget || areAllPositivesAndNoTarget) {
    return false
  }

  let low = 0
  let middle = low + 1
  let high = numsLength - 1
  let nextHigh: null | number = null

  let iterations = 0

  while (low <= numsLength - 3) {
    iterations++

    if (sorted[numsLength - 1] < 0 && sorted[low] < target) {
      low++
    }

    if (sorted[low] > 0 && sorted[low] > target) {
      break
    }

    const sum = nums[middle] + nums[high] + nums[low]

    if (sum === target) {
      console.log('>>> iterations: ', iterations)

      return true
    }

    if (sum < target) {
      if (!nextHigh) {
        nextHigh = high
      }
      middle++
    } else {
      high--
    }

    if (middle === high) {
      low++
      middle = low + 1
      high = nextHigh ? nextHigh : numsLength - 1
      nextHigh = null
    }
  }

  console.log('>>> iterations: ', iterations)

  return false
}

const findSumOfThreeByAdonis = (nums: number[], target: number): boolean => {
  nums.sort((a, b) => a - b)

  let stop = nums.length

  let crt = 0
  let left = crt + 1
  let right = stop - 1

  let iterations = 0

  while (crt <= stop - 3) {
    iterations++
    const sum = nums[left] + nums[right] + nums[crt]

    if (sum === target) {
      console.log('>>> iterations: ', iterations)
      return true
    }

    if (sum < target) {
      left++
    } else {
      right--
    }

    if (left === right) {
      crt++
      left = crt + 1
      right = stop - 1
    }
  }

  return false
}

export const findSumOfThree = findSumOfThreeWithSortOptimized
// export const findSumOfThree = findSumOfThreeWithSort
// export const findSumOfThree = findSumOfThreeByAdonis

/*

[1,2,3,4,5,6,7,8,9,10], 5

Case 1 - all numbers are positive. 
- If target is negative we can return false.
- First we should find biggest of three numbers that is <= target. 

[-5,-4,-3,-2,-1,0,1,2,3,4,5]

Case 2 - positive and negative numbers. 
- We cant optimize. 

[-10,-9,-8,-7,-6,-5,-4,-3,-2,-1], -5

Case 3 - only negative numbers. 
- If target is positive we can return false. 
- If target is negative we can find lesser from three numbers that is >= target.

Questions:
- How to determine which case do we have now?
- Can we additionally optimize?

Additional optimization:
- Best possible sum: We can calculate maximum possible sum before iterate through by assuming that all numbers are best possible options that could be. If maximum possible number is less then target we can terminate earlier. 

Plan:
- Add case 1-3
- Add additional optimization with best possible sum

*/

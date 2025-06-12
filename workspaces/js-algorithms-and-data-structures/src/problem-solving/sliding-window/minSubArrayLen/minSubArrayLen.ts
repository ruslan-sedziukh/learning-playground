/**
 * Write a function called minSubArrayLen which accepts two parameters -
 * an array of positive integers and a positive integer. This function
 * should return the minimal length of a contiguous subarray of which
 * the sum is greater than or equal to the integer passed to the function.
 * If there isn't one, return 0 instead.
 */

export const minSubArrayLen = (arr: number[], sum: number): number => {
  let subArrSum = 0
  let length = 0
  let minLength = 0
  let i = 0

  while (i < arr.length) {
    subArrSum += arr[i]

    length++

    if (subArrSum < sum) {
      i++
      continue
    }

    if (minLength === 0) {
      minLength = length
    }

    // Remove tail of subarray
    while (subArrSum - arr[i - length + 1] >= sum && length > 1) {
      subArrSum -= arr[i - length + 1]

      length--
    }

    if (length < minLength) {
      minLength = length
    }

    i++
  }

  return minLength
}

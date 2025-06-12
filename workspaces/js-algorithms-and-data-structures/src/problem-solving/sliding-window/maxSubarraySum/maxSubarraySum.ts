/**
 * https://toptal.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4410590#overview
 *
 * Given an array of integers and a number, write a function
 * called maxSubarraySum, which finds the maximum sum of a
 * subarray with the length of the number passed to the
 * function. Note that a subarray must consist of consecutive
 * elements from the original array.
 */

export const maxSubarraySum = (arr: number[], length: number) => {
  if (arr.length < length) {
    return null
  }

  let maxSum = 0
  let i = length

  for (let j = 0; j < length; j++) {
    maxSum += arr[j]
  }

  let nextSum = maxSum

  while (i < arr.length) {
    nextSum = nextSum + arr[i] - arr[i - length]

    if (nextSum > maxSum) {
      maxSum = nextSum
    }

    i++
  }

  return maxSum
}

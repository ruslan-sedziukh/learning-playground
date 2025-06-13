/*
Statement
Write an algorithm to determine if a number n is a happy number.

We use the following process to check if a given number is a happy number:

Starting with the given number n replace the number with the sum of the squares of its digits.

Repeat the process until:

	The number equals 1 which will depict that the given number is a happy number.

	The number enters a cycle, which will depict that the given number is not a happy number.

Return TRUE if is a happy number, and FALSE if not.
*/

const getSquaredDigitsSum = (num: number) =>
  num
    .toString()
    .split('')
    .reduce((sum, digit) => sum + Number(digit) * Number(digit), 0)

export const isHappy = (num: number) => {
  let slow = getSquaredDigitsSum(num)
  let fast = getSquaredDigitsSum(slow)

  while (slow !== fast && fast !== 1) {
    slow = getSquaredDigitsSum(slow)
    fast = getSquaredDigitsSum(getSquaredDigitsSum(fast))
  }

  return fast === 1
}

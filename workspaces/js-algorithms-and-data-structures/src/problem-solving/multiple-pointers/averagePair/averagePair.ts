/**
 * Write a function called averagePair. Given a sorted array of integers
 * and a target average, determine if there is a pair of values in the
 * array where the average of the pair equals the target average. There
 * may be more than one pair that matches the average target.
 */

export const averagePair = (arr: number[], average: number): boolean => {
  if (arr.length <= 1) {
    return false
  }

  let i = 0
  let j = arr.length - 1

  while (i < j) {
    const currentAverage = (arr[i] + arr[j]) / 2

    if (currentAverage === average) {
      return true
    }

    if (currentAverage < average) {
      i++
    } else {
      j--
    }
  }

  return false
}

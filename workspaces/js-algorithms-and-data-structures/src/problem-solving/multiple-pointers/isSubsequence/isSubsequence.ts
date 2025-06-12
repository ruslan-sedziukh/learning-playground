/**
 * Write a function called isSubsequence which takes in two strings
 * and checks whether the characters in the first string form a
 * subsequence of the characters in the second string. In other words,
 * the function should check whether the characters in the first string
 * appear somewhere in the second string, without their order changing.
 */

export const isSubsequence = (str1: string, str2: string): boolean => {
  if (str1.length === 0 || str2.length === 0) {
    return false
  }

  let i = 0
  let j = 0

  while (j !== str2.length) {
    if (str1[i] === str2[j]) {
      i++
    } else {
      j++
    }

    if (i === str1.length) {
      return true
    }
  }

  return false
}

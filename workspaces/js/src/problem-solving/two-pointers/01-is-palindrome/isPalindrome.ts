/*
Statement

  Write a function that takes a string, s, as an input and determines whether or not it is a palindrome.

  Note: A palindrome is a word, phrase, or sequence of characters that reads the same backward as forward.

Examples

  input: ABCCA
  output: false
  -----------------------
  input: ABCBA
  output: true
  -----------------------
  input: RACECAR
  output: true
*/

export const isPalindrome = (inputString: string): boolean => {
  let i = 0
  let j = inputString.length - 1

  while (i < j) {
    if (inputString[i] !== inputString[j]) {
      return false
    }

    i++
    j--
  }

  return true
}

/*
Statement

	Write a function that takes a string as input and checks whether it can be a valid palindrome by removing at most one character from it.
*/
export const isPalindrome = (str: string): boolean => {
  let isRemoved = false

  let i = 0
  let j = str.length - 1

  while (i < j) {
    if (str[i] !== str[j]) {
      if (isRemoved) {
        return false
      }

      isRemoved = true

      if (str[i] === str[j - 1]) {
        j--
      } else if (str[i + 1] === str[j]) {
        i++
      } else {
        return false
      }
    }

    i++
    j--
  }

  return true
}

import getReverse from '../reverse/getReverse'

const isPalindrome = (str: string): boolean => {
  const reversed = getReverse(str)

  return reversed === str ? true : false
}

export default isPalindrome

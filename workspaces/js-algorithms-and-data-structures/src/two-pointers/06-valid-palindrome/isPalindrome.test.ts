import { isPalindrome } from './isPalindrome'

describe('isPalindrome', () => {
  it.each([
    ['madame', true],
    ['dead', true],
    ['abca', true],
    ['tebbem', false],
    ['eeccccbebaeeabebccceea', false],
  ])('determines if a string is a palindrome', (input, expected) => {
    const result = isPalindrome(input)
    expect(result).toBe(expected)
  })
})

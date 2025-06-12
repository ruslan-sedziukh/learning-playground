import isPalindrome from './isPalindrome'

describe('isPalindrome', () => {
  it.each([
    { str: 'awesome', expected: false },
    { str: 'foobar', expected: false },
    { str: 'tacocat', expected: true },
    { str: 'amanaplanacanalpanama', expected: true },
    { str: 'amanaplanacanalpandemonium', expected: false },
  ])('returns $expected for $str', ({ str, expected }) => {
    expect(isPalindrome(str)).toBe(expected)
  })
})

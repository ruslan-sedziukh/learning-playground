import { findLongestSubstring } from '.'

describe('findLongestSubstring', () => {
  it.each([
    { s: 'abcdbea', expected: 5 },
    { s: 'aba', expected: 2 },
    { s: 'abccabcabcc', expected: 3 },
    { s: 'aaaabaaa', expected: 2 },
    { s: 'pwwkew', expected: 3 },
    { s: 'bbbbb', expected: 1 },
    { s: 'abceaghr', expected: 7 },
    { s: '', expected: 0 },
  ])('computes correct result for $s', ({ s, expected }) => {
    expect(findLongestSubstring(s)).toBe(expected)
  })
})

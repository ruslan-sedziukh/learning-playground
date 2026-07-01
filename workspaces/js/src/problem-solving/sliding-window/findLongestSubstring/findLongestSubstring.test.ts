import { findLongestSubstring } from './findLongestSubstring'

describe('findLongestSubstring', () => {
  it.each([
    { str: '', expected: 0 },
    { str: 'abcde', expected: 5 },
    { str: 'abcdecgh', expected: 5 },
    { str: 'abcdecghojwz', expected: 9 },
    { str: 'rithmschool', expected: 7 },
    { str: 'thisisawesome', expected: 6 },
    { str: 'thecatinthehat', expected: 7 },
    { str: 'bbbbbb', expected: 1 },
    { str: 'longestsubstring', expected: 8 },
    { str: 'thisishowwedoit', expected: 6 },
  ])('returns $expected for string $str', ({ str, expected }) => {
    expect(findLongestSubstring(str)).toBe(expected)
  })
})

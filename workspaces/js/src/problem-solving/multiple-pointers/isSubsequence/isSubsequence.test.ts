import { isSubsequence } from './isSubsequence'

describe('isSubsequence', () => {
  it.each([
    { str1: 'hello', str2: 'hello world', expected: true },
    { str1: 'sing', str2: 'hello sting', expected: true },
    { str1: 'abc', str2: 'abracadabra', expected: true },
    { str1: 'abc', str2: 'acb', expected: false },
    { str1: 'abc', str2: '', expected: false },
    { str1: '', str2: 'abd', expected: false },
  ])('returns $expected for $str1 and $str2', ({ str1, str2, expected }) => {
    expect(isSubsequence(str1, str2)).toBe(expected)
  })
})

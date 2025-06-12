import naiveSubstringSearch from './naiveSubstringSearch'

describe('naiveSubstringSearch', () => {
  it.each([
    { str: 'hello', pattern: 'll', expected: 2 },
    { str: 'hello', pattern: 'el', expected: 1 },
    { str: 'hello', pattern: 'he', expected: 0 },
    { str: 'hello', pattern: 'lo', expected: 3 },
    { str: 'hello', pattern: 'hello', expected: 0 },
    { str: 'hello', pattern: 'hello world', expected: -1 },
    { str: 'hello', pattern: 'world', expected: -1 },
  ])('returns $expected for $pattern in $str', ({ str, pattern, expected }) => {
    expect(naiveSubstringSearch(str, pattern)).toBe(expected)
  })
})

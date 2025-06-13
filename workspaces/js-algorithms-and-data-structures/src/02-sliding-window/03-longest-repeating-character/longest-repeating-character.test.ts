import { longestRepeatingCharacterReplacement } from './longest-repeating-character'

describe('longestRepeatingCharacterReplacement', () => {
  it.each([
    {
      s: 'aabccbb',
      k: 2,
      expected: 5,
    },
    {
      s: 'aaacbbbaabab',
      k: 2,
      expected: 6,
    },
    {
      s: 'aaacbbbaabab',
      k: 1,
      expected: 4,
    },
    {
      s: 'dippitydip',
      k: 4,
      expected: 6,
    },
    {
      s: 'coollooc',
      k: 2,
      expected: 6,
    },
    {
      s: 'aaaaaaaaaa',
      k: 2,
      expected: 10,
    },
    {
      s: '',
      k: 1,
      expected: 0,
    },
    {
      s: 'abcc',
      k: 2,
      expected: 4,
    },
    {
      s: 'abccgdfbcvb',
      k: 2,
      expected: 4,
    },
  ])('returns correct length for $s and $k', ({ s, k, expected }) => {
    expect(longestRepeatingCharacterReplacement(s, k)).toBe(expected)
  })
})

import { minWindowSubstring } from './minimum-window-substring'

describe('minWindowSubstring ', () => {
  it.each([
    {
      s: 'ACBBACA ',
      t: 'ABA',
      expected: 'BACA',
    },
    {
      s: 'ABCD',
      t: 'ABC',
      expected: 'ABC',
    },
    {
      s: 'XYZYX',
      t: 'XYZ',
      expected: 'XYZ',
    },
    {
      s: 'ABXYZJKLSNFC',
      t: 'ABC',
      expected: 'ABXYZJKLSNFC',
    },
    {
      s: 'AAAAAAAAAAA',
      t: 'A',
      expected: 'A',
    },
    {
      s: 'ABDFGDCKAB',
      t: 'ABCD',
      expected: 'DCKAB',
    },
  ])('computes the minimum window substring', ({ s, t, expected }) => {
    expect(minWindowSubstring(s, t)).toBe(expected)
  })
})

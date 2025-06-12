import { sameFrequency } from './sameFrequency'

describe('sameFrequency', () => {
  it.each([
    { n1: 182, n2: 281, expected: true },
    { n1: 34, n2: 14, expected: false },
    { n1: 3589578, n2: 5879385, expected: true },
    { n1: 3589578, n2: 58793856, expected: false },
    { n1: 22, n2: 222, expected: false },
    { n1: 222, n2: 22, expected: false },
  ])('returns $expected for $n1 and $n2', ({ n1, n2, expected }) => {
    expect(sameFrequency(n1, n2)).toBe(expected)
  })
})

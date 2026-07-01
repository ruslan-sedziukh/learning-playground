import { powerOf4 } from './util'

describe('powerOf4', () => {
  it.each([
    {
      exponent: 0,
      expected: 1,
    },
    {
      exponent: 1,
      expected: 4,
    },
    {
      exponent: 2,
      expected: 16,
    },
    {
      exponent: 3,
      expected: 64,
    },
  ])('computes 4 ** $exponent', ({ exponent, expected }) => {
    expect(powerOf4(exponent)).toBe(expected)
  })
})

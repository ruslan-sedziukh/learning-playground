import getReverse from './getReverse'

describe('getReverse', () => {
  it.each([
    { str: 'awesome', expected: 'emosewa' },
    { str: 'rithmschool', expected: 'loohcsmhtir' },
  ])('returns $expected for $str', ({ str, expected }) => {
    expect(getReverse(str)).toBe(expected)
  })
})

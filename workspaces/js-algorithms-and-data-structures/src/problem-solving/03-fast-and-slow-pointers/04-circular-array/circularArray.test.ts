import { circularArrayLoop } from './circularArray'

describe('circularArrayLoop', () => {
  it.each([
    { input: [1, 1, 1], expected: true },
    { input: [3, 3, 3], expected: false },
    { input: [1, 1, 3], expected: false },
    { input: [3, 1, 2], expected: true },
    { input: [1, 3, -2, -4, 1], expected: true },
    { input: [2, 1, -1, -2], expected: false },
    { input: [5, 4, -2, -1, 3], expected: false },
    { input: [1, 2, -3, 3, 4, 7, 1], expected: true },
    { input: [3, 3, 1, -1, 2], expected: true },
  ])(
    'detects circular array loop correctly for $input',
    ({ input, expected }) => {
      const result = circularArrayLoop(input)
      expect(result).toBe(expected)
    }
  )
})

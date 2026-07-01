import { averagePair } from './averagePair'

describe('averagePair', () => {
  it.each([
    { arr: [1, 2, 3], average: 2.5, expected: true },
    { arr: [1, 3, 3, 5, 6, 7, 10, 12, 19], average: 8, expected: true },
    { arr: [-1, 0, 3, 4, 5, 6], average: 4.1, expected: false },
    { arr: [], average: 4, expected: false },
  ])(
    'returns $expected for $arr and $average',
    ({ arr, average, expected }) => {
      expect(averagePair(arr, average)).toBe(expected)
    }
  )
})

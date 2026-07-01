import type { Interval } from '@types'
import { insertInterval } from '.'

/*

[4,5]
[1,3][6,7]

[3,5]
[1,3][6,7]

[3,6]
[1,3][6,7]

[3,11]
[1,3][6,7][8,12]

[3,13]
[1,3][6,7][8,12]

- Find where to put it
  - New interval start is less then interval end
    - Merge with this interval
    - Iterate further to merge with next intervals that are overlaping
  - New interval start is more then current end and is less then next start
    - 

*/

describe('insertInterval', () => {
  it.each<{
    testId: number
    intervals: Interval[]
    newInterval: Interval
    expected: Interval[]
  }>([
    {
      testId: 1,
      intervals: [
        [1, 2],
        [3, 4],
        [5, 8],
        [9, 15],
      ],
      newInterval: [2, 5],
      expected: [
        [1, 8],
        [9, 15],
      ],
    },
    {
      testId: 2,
      intervals: [
        [1, 6],
        [8, 9],
        [10, 15],
        [16, 18],
      ],
      newInterval: [9, 10],
      expected: [
        [1, 6],
        [8, 15],
        [16, 18],
      ],
    },
    {
      testId: 3,
      intervals: [
        [1, 2],
        [3, 4],
        [5, 8],
        [9, 15],
      ],
      newInterval: [16, 17],
      expected: [
        [1, 2],
        [3, 4],
        [5, 8],
        [9, 15],
        [16, 17],
      ],
    },
    {
      testId: 4,
      intervals: [
        [1, 4],
        [5, 6],
        [7, 8],
        [9, 10],
      ],
      newInterval: [1, 5],
      expected: [
        [1, 6],
        [7, 8],
        [9, 10],
      ],
    },
    {
      testId: 5,
      intervals: [
        [1, 3],
        [4, 6],
        [7, 8],
        [9, 10],
      ],
      newInterval: [1, 10],
      expected: [[1, 10]],
    },
    {
      testId: 6,
      intervals: [
        [1, 3],
        [5, 7],
        [8, 9],
        [10, 13],
      ],
      newInterval: [2, 6],
      expected: [
        [1, 7],
        [8, 9],
        [10, 13],
      ],
    },
    {
      testId: 7,
      intervals: [
        [1, 3],
        [6, 9],
      ],
      newInterval: [2, 5],
      expected: [
        [1, 5],
        [6, 9],
      ],
    },
  ])(
    'inserts interval for testId: $testId',
    ({ intervals, newInterval, expected }) => {
      const result = insertInterval(intervals, newInterval)

      expect(result).toEqual(expected)
    }
  )
})

import type { Interval } from '@types'
import { mergeIntervals } from '.'

describe('mergeIntervals', () => {
  it.each<{
    testId: number
    intervals: Interval[]
    expected: Interval[]
  }>([
    {
      testId: 1,
      intervals: [
        [1, 5],
        [3, 7],
        [4, 6],
      ],
      expected: [[1, 7]],
    },
    {
      testId: 2,
      intervals: [
        [1, 5],
        [4, 6],
        [6, 8],
        [11, 15],
      ],
      expected: [
        [1, 8],
        [11, 15],
      ],
    },
    {
      testId: 3,
      intervals: [[1, 5]],
      expected: [[1, 5]],
    },
    {
      testId: 4,
      intervals: [
        [1, 9],
        [3, 8],
        [4, 4],
      ],
      expected: [[1, 9]],
    },
    {
      testId: 5,
      intervals: [
        [1, 2],
        [3, 4],
        [8, 8],
      ],
      expected: [
        [1, 2],
        [3, 4],
        [8, 8],
      ],
    },
    {
      testId: 6,
      intervals: [
        [2, 4],
        [3, 5],
        [4, 5],
        [6, 10],
        [12, 14],
      ],
      expected: [
        [2, 5],
        [6, 10],
        [12, 14],
      ],
    },
    {
      testId: 7,
      intervals: [
        [1, 5],
        [3, 7],
        [4, 8],
        [6, 8],
      ],
      expected: [[1, 8]],
    },
    {
      testId: 8,
      intervals: [
        [10, 12],
        [12, 15],
      ],
      expected: [[10, 15]],
    },
    {
      testId: 9,
      intervals: [
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18],
        [18, 20],
      ],
      expected: [
        [1, 6],
        [8, 10],
        [15, 20],
      ],
    },
    {
      testId: 10,
      intervals: [],
      expected: [],
    },
    {
      testId: 9,
      intervals: [
        [1, 3],
        [1, 7],
        [8, 10],
        [15, 18],
        [18, 20],
      ],
      expected: [
        [1, 7],
        [8, 10],
        [15, 20],
      ],
    },
    {
      testId: 9,
      intervals: [
        [1, 3],
        [15, 18],
        [1, 7],
        [8, 10],
        [18, 20],
      ],
      expected: [
        [1, 7],
        [8, 10],
        [15, 20],
      ],
    },
  ])(
    'merges correctly intervals for testId: $testId',
    ({ intervals, expected }) => {
      const result = mergeIntervals(intervals)

      expect(result).toEqual(expected)
    }
  )
})

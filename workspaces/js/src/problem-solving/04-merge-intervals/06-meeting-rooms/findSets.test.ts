import { Interval } from '@types'
import { findSets } from '.'

describe('findSets', () => {
  it.each<{
    testId: number
    intervals: Interval[]
    expected: number
  }>([
    {
      testId: 1,
      intervals: [
        [2, 8],
        [3, 4],
        [3, 9],
        [5, 11],
        [8, 20],
        [11, 15],
      ],
      expected: 3,
    },
    {
      testId: 2,
      intervals: [
        [1, 7],
        [2, 6],
        [3, 7],
        [4, 8],
        [5, 8],
        [2, 9],
        [1, 8],
      ],
      expected: 7,
    },
    {
      testId: 3,
      intervals: [
        [3, 17],
        [19, 20],
        [20, 22],
        [1, 18],
        [9, 19],
        [21, 22],
        [3, 4],
        [7, 22],
      ],
      expected: 4,
    },
    {
      testId: 4,
      intervals: [
        [1, 3],
        [2, 6],
        [8, 10],
        [9, 15],
        [12, 14],
      ],
      expected: 2,
    },
    {
      testId: 5,
      intervals: [
        [1, 6],
        [1, 6],
        [1, 6],
        [1, 6],
        [1, 6],
        [1, 6],
        [1, 6],
        [1, 6],
      ],
      expected: 8,
    },
    {
      testId: 6,
      intervals: [
        [1, 2],
        [4, 6],
        [3, 4],
        [7, 8],
      ],
      expected: 1,
    },
    {
      testId: 7,
      intervals: [
        [1, 7],
        [2, 6],
        [3, 7],
        [4, 8],
        [5, 8],
      ],
      expected: 5,
    },
  ])('findSets for testId: $testId', ({ intervals, expected }) => {
    const result = findSets(intervals)

    expect(result).toBe(expected)
  })
})

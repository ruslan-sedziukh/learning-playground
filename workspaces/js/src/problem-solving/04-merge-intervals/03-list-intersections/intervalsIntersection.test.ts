import type { Interval } from '@types'
import { intervalIntersection } from '.'

describe('intervalsIntersection', () => {
  it.each<{
    testId: number
    intervalsA: Interval[]
    intervalsB: Interval[]
    expected: Interval[]
  }>([
    {
      testId: 1,
      intervalsA: [
        [1, 4],
        [5, 6],
        [7, 8],
        [9, 15],
      ],
      intervalsB: [
        [2, 4],
        [5, 7],
        [9, 15],
      ],
      expected: [
        [2, 4],
        [5, 6],
        [7, 7],
        [9, 15],
      ],
    },
    {
      testId: 2,
      intervalsA: [
        [1, 3],
        [4, 6],
        [8, 10],
        [11, 15],
      ],
      intervalsB: [
        [2, 3],
        [10, 15],
      ],
      expected: [
        [2, 3],
        [10, 10],
        [11, 15],
      ],
    },
    {
      testId: 3,
      intervalsA: [
        [1, 2],
        [4, 6],
        [7, 8],
        [9, 10],
      ],
      intervalsB: [
        [3, 6],
        [7, 8],
        [9, 10],
      ],
      expected: [
        [4, 6],
        [7, 8],
        [9, 10],
      ],
    },
    {
      testId: 4,
      intervalsA: [
        [1, 3],
        [5, 6],
        [7, 8],
        [9, 10],
        [12, 15],
      ],
      intervalsB: [
        [2, 4],
        [7, 10],
      ],
      expected: [
        [2, 3],
        [7, 8],
        [9, 10],
      ],
    },
    {
      testId: 5,
      intervalsA: [[1, 2]],
      intervalsB: [[1, 2]],
      expected: [[1, 2]],
    },
  ])(
    'computes intervals intersection for $testId',
    ({ intervalsA, intervalsB, expected }) => {
      const result = intervalIntersection(intervalsA, intervalsB)

      expect(result).toEqual(expected)
    }
  )
})

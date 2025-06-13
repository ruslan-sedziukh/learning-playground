import type { Interval } from '@types'
import { employeeFreeTime } from '.'

describe('employeeFreeTime', () => {
  it.each<{
    testId: number
    schedule: Interval[][]
    expected: Interval[]
  }>([
    {
      testId: 1,
      schedule: [
        [
          [1, 2],
          [5, 6],
        ],
        [[1, 3]],
        [[4, 10]],
      ],
      expected: [[3, 4]],
    },
    {
      testId: 2,
      schedule: [
        [
          [1, 3],
          [6, 7],
        ],
        [[2, 4]],
        [
          [2, 5],
          [9, 12],
        ],
      ],
      expected: [
        [5, 6],
        [7, 9],
      ],
    },
    {
      testId: 3,
      schedule: [
        [
          [2, 3],
          [7, 9],
        ],
        [
          [1, 4],
          [6, 7],
        ],
      ],
      expected: [[4, 6]],
    },
    {
      testId: 4,
      schedule: [
        [
          [3, 5],
          [8, 10],
        ],
        [
          [4, 6],
          [9, 12],
        ],
        [
          [5, 6],
          [8, 10],
        ],
      ],
      expected: [[6, 8]],
    },
    {
      testId: 5,
      schedule: [
        [
          [1, 2],
          [3, 4],
          [5, 6],
          [7, 8],
          [9, 10],
          [11, 12],
        ],
        [
          [1, 2],
          [3, 4],
          [5, 6],
          [7, 8],
          [9, 10],
          [11, 12],
        ],
        [
          [1, 2],
          [3, 4],
          [5, 6],
          [7, 8],
          [9, 10],
          [11, 12],
        ],
        [
          [1, 2],
          [3, 4],
          [5, 6],
          [7, 8],
          [9, 10],
          [11, 12],
        ],
      ],
      expected: [
        [2, 3],
        [4, 5],
        [6, 7],
        [8, 9],
        [10, 11],
      ],
    },
  ])('computes free time for testId: $testId', ({ schedule, expected }) => {
    const result = employeeFreeTime(schedule)

    expect(result).toEqual(expected)
  })
})

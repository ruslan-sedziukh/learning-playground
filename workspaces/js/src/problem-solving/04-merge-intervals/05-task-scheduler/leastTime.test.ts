import { leastTime } from '.'

describe('leastTime', () => {
  it.each([
    {
      testId: 1,
      tasks: ['A', 'A', 'B', 'B'],
      n: 2,
      expected: 5,
    },
    {
      testId: 2,
      tasks: ['A', 'B', 'A', 'A', 'B', 'C'],
      n: 3,
      expected: 9,
    },
    {
      testId: 3,
      tasks: ['A', 'C', 'B', 'A'],
      n: 0,
      expected: 4,
    },
    {
      testId: 4,
      tasks: ['A', 'B', 'A', 'A', 'B', 'C'],
      n: 3,
      expected: 9,
    },
    {
      testId: 5,
      tasks: ['A', 'A', 'C', 'C', 'C', 'B', 'E', 'E', 'E'],
      n: 2,
      expected: 9,
    },
    {
      testId: 6,
      tasks: ['A', 'A', 'A', 'B', 'B', 'C', 'C'],
      n: 1,
      expected: 7,
    },
    {
      testId: 7,
      tasks: ['S', 'I', 'V', 'U', 'W', 'D', 'U', 'X'],
      n: 0,
      expected: 8,
    },
    {
      testId: 8,
      tasks: [
        'A',
        'K',
        'X',
        'M',
        'W',
        'D',
        'X',
        'B',
        'D',
        'C',
        'O',
        'Z',
        'D',
        'E',
        'Q',
      ],
      n: 3,
      expected: 15,
    },
    {
      testId: 9,
      tasks: [
        'A',
        'B',
        'C',
        'O',
        'Q',
        'C',
        'Z',
        'O',
        'X',
        'C',
        'W',
        'Q',
        'Z',
        'B',
        'M',
        'N',
        'R',
        'L',
        'C',
        'J',
      ],
      n: 10,
      expected: 34,
    },
  ])('compute the least time for testId: $testId', ({ tasks, n, expected }) => {
    const result = leastTime(tasks, n)

    expect(result).toBe(expected)
  })
})

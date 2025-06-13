import { detectCycle } from './detectCycle'
import { List } from '../../../lib/SinglyLinkedList'

describe('detectCycle', () => {
  it.each([
    {
      data: [2, 4, 6, 8, 10],
      tailIndex: 2,
      expected: true,
    },
    {
      data: [1, 3, 5, 7, 9],
      tailIndex: -1,
      expected: false,
    },
    {
      data: [1, 2, 3, 4, 5],
      tailIndex: 3,
      expected: true,
    },
    {
      data: [0, 2, 3, 5, 6],
      tailIndex: -1,
      expected: false,
    },
    {
      data: [3, 6, 9, 10, 11],
      tailIndex: 0,
      expected: true,
    },
    {
      data: [1],
      tailIndex: -1,
      expected: false,
    },
    {
      data: [1],
      tailIndex: 0,
      expected: true,
    },
  ])('detects cycle correctly for $data', ({ data, tailIndex, expected }) => {
    const list = new List(data)
    list.connectTail(tailIndex)

    const result = detectCycle(list.head)

    expect(result).toBe(expected)
  })
})

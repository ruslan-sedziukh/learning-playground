import { List } from '../../../lib/SinglyLinkedList'
import { getMiddleNode } from './getMiddleNode'

describe('getMiddleNode', () => {
  it.each([
    { input: [1, 2, 3, 4, 5], expected: 3 },
    { input: [1, 2, 3, 4, 5, 6], expected: 4 },
    { input: [3, 2, 1], expected: 2 },
    { input: [10], expected: 10 },
    { input: [1, 2], expected: 2 },
  ])('finds the middle node correctly for $input', ({ input, expected }) => {
    const list = new List(input)

    const middleNode = getMiddleNode(list.head)

    expect(middleNode?.data).toBe(expected)

    expect(true).toBe(true)
  })

  it('finds the middle node correctly for head equals null', () => {
    const list = new List(null)

    const middleNode = getMiddleNode(list.head)

    expect(middleNode?.data).not.toBeDefined()

    expect(true).toBe(true)
  })
})

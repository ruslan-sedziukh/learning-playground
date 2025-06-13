import { List } from './list'
import { ListNode } from './node'
import { removeNthLastNode } from './removeNthLastNode'

describe('removeNthLastNode', () => {
  it.each([
    [2, [23, 28, 10, 5, 67, 39, 70, 28], [23, 28, 10, 5, 67, 39, 28]],
    [
      3,
      [34, 53, 6, 95, 38, 28, 17, 63, 16, 76],
      [34, 53, 6, 95, 38, 28, 17, 16, 76],
    ],
    [
      4,
      [288, 224, 275, 390, 4, 383, 330, 60, 193],
      [288, 224, 275, 390, 4, 330, 60, 193],
    ],
    [1, [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8]],
    [6, [69, 8, 49, 106, 116, 112], [8, 49, 106, 116, 112]],
  ])('removes the %d th node from last', (n, data, expected) => {
    const list = new List()

    list.createLinkedList(data)

    const head = removeNthLastNode(list.head, n)

    let crt = head

    let i = 0

    while (crt !== null && i < expected.length) {
      expect(crt.data).toBe(expected[i])
      crt = crt.next
      i++
    }

    expect(i).toBe(expected.length)
  })
})

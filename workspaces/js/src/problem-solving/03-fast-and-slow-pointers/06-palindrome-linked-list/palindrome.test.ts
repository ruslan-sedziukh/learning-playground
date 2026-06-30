import { List } from '@lib/SinglyLinkedList'
import { isPalindrome } from './palindrome'

describe('isPalindrome', () => {
  it.each([
    { data: [1, 2, 3, 2, 1], expected: true },
    { data: [4, 7, 9, 5, 4], expected: false },
    { data: [2, 3, 5, 5, 3, 2], expected: true },
    { data: [3, 6, 9, 8, 4, 8, 9, 6, 3], expected: true },
  ])(
    'checks if a linked list is a palindrome correctly for $input',
    ({ data, expected }) => {
      const list = new List(data)

      const result = isPalindrome(list.head)

      expect(result).toBe(expected)

      const initial = new List(data)
      expect(initial.isEqual(list)).toBe(true)
    }
  )
})

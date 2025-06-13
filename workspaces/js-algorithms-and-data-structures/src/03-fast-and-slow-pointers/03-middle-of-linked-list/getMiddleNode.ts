import { Node } from '../../lib/BaseNode'

/*
Statement

	Given the head of a singly linked list, return the middle node of the linked list. If the number of nodes in the linked list is even, there will be two middle nodes, so return the second one.

Examples

	input: 1 -> 2 -> 3 -> 4 -> 5 -> null
	output: 3
	------------------------------------
	input: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
	output: 4
	------------------------------------
	input: 1 -> 2 -> null
	output: 2
*/
export const getMiddleNode = (head: Node | null) => {
  if (!head || !head.next) {
    return head
  }

  let slow: Maybe<Node> = head?.next
  let fast = head?.next?.next

  while (fast && fast?.next !== null) {
    slow = slow?.next
    fast = fast?.next?.next
  }

  return slow
}

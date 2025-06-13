import { Node } from '../../../lib/BaseNode'

/*
Statement

	Check whether or not a linked list contains a cycle. If a cycle exists, return true. Otherwise, return false. The cycle means that at least one node can be reached again by traversing the next pointer.
*/

export const detectCycle = (head: Node | null) => {
  if (!head || !head.next) {
    return false
  }

  let slow: Maybe<Node> = head?.next
  let fast: Maybe<Node> = head?.next?.next

  while (slow !== fast && fast?.next !== null) {
    slow = slow?.next
    fast = fast?.next?.next
  }

  return slow === fast
}

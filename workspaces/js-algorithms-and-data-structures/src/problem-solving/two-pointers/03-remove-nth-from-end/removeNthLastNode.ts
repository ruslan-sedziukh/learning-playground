/*
Statement
  Given a singly linked list, remove the nth node from the end of the list and return its head.

Examples
  input
  n = 4
  50->40->30->20->null
  output
  40->30->20->null
  -----------------------
  input
  n = 5
  1->2->3->4->5->6->7->null
  output
  1->2->4->5->6->7->null
  -----------------------
  input
  n = 3
  23->28->10->5->67->39->70->null
  output
  23->28->10->5->39->70->null
*/

import { ListNode } from './node'

export const removeNthLastNode = (
  head: ListNode | null,
  n: number
): ListNode | null => {
  let prevNode = head
  let lastNode = head
  let i = 1

  while (lastNode?.next) {
    lastNode = lastNode.next

    if (i > n) {
      prevNode = prevNode!.next
    }

    i++
  }

  if (i > n) {
    prevNode!.next = prevNode!.next!.next
  }

  if (i === n) {
    return head!.next
  }

  return head
}

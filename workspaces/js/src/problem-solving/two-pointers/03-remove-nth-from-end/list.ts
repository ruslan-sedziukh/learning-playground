import { ListNode } from './node'

export class List {
  head: ListNode | null = null

  insertNodeAtHead(node: ListNode) {
    if (this.head === undefined) {
      this.head = node
    } else {
      node.next = this.head
      this.head = node
    }
  }

  createLinkedList(lst: number[]) {
    for (let i = lst.length - 1; i >= 0; i--) {
      const newNode = new ListNode(lst[i])
      this.insertNodeAtHead(newNode)
    }
  }

  displayLinkedList() {
    let temp = this.head

    console.log("[")

    while (temp !== null) {

      console.log(temp?.data)
      temp = temp?.next

      if (temp !== null) {
        console.log(", ")
      }
    }
    console.log("]")
  }
}

import { node } from 'webpack'

type NodeValue = string

export class Node {
  constructor(val: NodeValue) {
    this.val = val
    this.next = null
  }

  val: NodeValue
  next: Node | null
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  head: Node | null
  tail: Node | null
  length = 0

  // Adds a new node to the list
  push(val: NodeValue) {
    const newNode = new Node(val)

    if (this.tail) {
      this.tail.next = newNode
      this.tail = newNode
    } else {
      this.head = newNode
      this.tail = newNode
    }

    this.length++

    return this
  }

  // Removes last nod
  pop() {
    if (!this.head) {
      return
    }

    const oldTail = this.tail

    if (this.length === 0) {
      this.head = null
      this.tail = null
    }

    // This is just to calm down TypeScript
    if (!this.head) {
      return
    }

    let newTail = this.head

    while (newTail.next && newTail.next.next) {
      newTail = newTail.next
    }

    this.tail = newTail
    this.tail.next = null

    this.length--

    return oldTail?.val
  }

  // Removes first node of the list
  shift() {
    if (!this.head) {
      return undefined
    }

    const oldHead = this.head
    this.head = this.head.next

    if (this.length === 1) {
      this.tail = null
    }

    this.length--

    return oldHead.val
  }

  // Adds new node at the beginning
  unshift(val: NodeValue) {
    this.length++

    const newNode = new Node(val)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode

      return this
    }

    const oldHead = this.head

    this.head = newNode
    newNode.next = oldHead

    return this
  }

  // Return node at the position
  get(index: number) {
    if (index < 0 || index > this.length - 1) {
      return
    }

    if (!this.head) {
      return
    }

    let current = this.head

    if (index === 0) {
      return current
    }

    for (let i = 0; i < index; i++) {
      if (!current.next) {
        continue
      }

      current = current?.next
    }

    return current
  }

  // Change value of a node at the position
  set(val: NodeValue, index: number) {
    const theNode = this.get(index)

    if (!theNode) {
      return false
    }

    theNode.val = val

    return true
  }

  // Add node at the position
  insert(val: NodeValue, index: number) {
    if (index < 0 || index > this.length) {
      return false
    }

    const newNode = new Node(val)
    const prevNode = this.get(index - 1)
    const nextNode = this.get(index)

    if (prevNode) {
      prevNode.next = newNode
    } else {
      this.head = newNode
    }

    if (nextNode) {
      newNode.next = nextNode
    } else {
      this.tail = newNode
    }

    this.length++

    return true
  }

  // Removes node from the list
  remove(index: number) {
    if (this.length === 0 || index >= this.length || index < 0) {
      return undefined
    }

    if (index === 0) {
      return this.shift()
    }

    if (index === this.length - 1) {
      return this.pop()
    }

    const prevNode = this.get(index - 1)
    const removedNode = this.get(index)

    if (!prevNode || !removedNode) {
      return undefined
    }

    prevNode.next = removedNode.next

    this.length--

    return removedNode.val
  }

  // Reverse nodes order
  reverse() {
    let current = this.head

    if (!current) {
      // Empty list
      return
    }

    let next = current.next

    if (!next) {
      // Just 1 element
      return this
    }

    let nextNext = next.next

    while (nextNext) {
      next.next = current

      current = next
      next = nextNext

      nextNext = nextNext.next
    }

    next.next = current
    ;[this.head, this.tail] = [this.tail, this.head]

    return this
  }
}

export default SinglyLinkedList

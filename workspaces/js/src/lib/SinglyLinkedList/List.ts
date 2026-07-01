import { isNode, Node } from '../BaseNode'

export class List {
  head: Node | null = null
  tail: Node | null = null

  _length: number = 0

  /**
   * constructor
   * @param data - array of data values
   */

  constructor(data: number[])

  /**
   * constructor
   * @param data - head node
   */
  constructor(data: Node | null)

  constructor(data: number[] | Node | null) {
    if (Array.isArray(data)) {
      this.fromArray(data)
    } else if (isNode(data)) {
      this.fromNode(data)
    }
  }

  private fromArray(data: number[]) {
    this._length = data.length

    data.reduce((acc, val) => {
      acc.insertNode(new Node(val))

      return acc
    }, this)
  }

  private fromNode(head: Node | null) {
    this.head = head
    this._length = 0

    let crt: Node | null = head

    for (; crt != null; crt = crt.next) {
      this._length++

      if (crt.next === null) {
        this.tail = crt
      }
    }
  }

  /**
   * connect tail node
   * @param index - node index to connect tail
   * @returns
   */
  connectTail(index: number) {
    if (index < 0) {
      return
    }

    // join the tail
    const tail = this.getNode(this.length - 1)

    if (tail) {
      tail.next = this.getNode(index)
    }
  }

  // InsertNodeAtHead method will insert a Node at head
  // of a linked list.
  insertNode(node: Node) {
    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      this.tail!.next = node
      this.tail = node
    }
  }

  // GetLength returns the number of nodes in the linked list
  get length(): number {
    return this._length
  }

  // getNode returns the node at the specified position (index) of the linked list
  getNode(pos: number): Node | null {
    if (pos === -1 || pos >= this._length) {
      return null
    }

    let crt = this.head

    for (let index = 0; crt && index < pos; index++) {
      crt = crt.next
    }

    return crt
  }

  /**
   * checks if the list have the same node values
   * @param other the other list to compare
   * @returns true if the list have same node values or false otherwise
   */
  isEqual(other: List): boolean {
    if (other._length != this.length) {
      return false
    }

    let thisCrt = this.head
    let otherCrt = other.head

    while (thisCrt) {
      if (thisCrt.data !== otherCrt?.data) {
        return false
      }

      thisCrt = thisCrt.next
      otherCrt = otherCrt.next
    }

    return true
  }

  /**
   * log the list to the console for debugging purposes
   * @param description - optional description for the log
   */
  log(description?: string) {
    let buffer = description ? `${description}: ` : ''

    for (let crt = this.head; crt !== null; crt = crt.next) {
      buffer += `${crt.data} ${crt.next ? '-> ' : ''}`
    }

    console.log(buffer)
  }
}

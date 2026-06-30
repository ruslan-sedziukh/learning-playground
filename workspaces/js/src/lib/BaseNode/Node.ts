export class Node {
  data: number
  next: Node | null

  constructor(data: number, next: Node | null = null) {
    this.data = data
    this.next = next
  }

  static reverse(node: Node | null): Node | null{
    if (node === null) {
      return null
    }

    let prev: Node | null = null
    let crt: Node | null = node

    while (crt !== null) {
      prev = new Node(crt.data, prev)
      crt = crt.next
    }

    return prev
  }
}

export const isNode = (val: unknown): val is Node =>
  typeof val === 'object' &&
  val != null &&
  'data' in val &&
  typeof val.data === 'number' &&
  'next' in val &&
  typeof val.next === 'object'

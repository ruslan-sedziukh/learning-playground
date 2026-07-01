import {
  ForwardIterator,
  ReverseIterator,
  NodeIterator,
  isNodeIterator,
} from '../Iterator'
import { ListNode } from '../Node'
import { isIterable } from '../utils'

/**
 * Doubly Linked List
 */
export class List<T = number> {
  public constructor(
    public head: ListNode<T> | null = null,
    public tail: ListNode<T> | null = null,
    private _size: number = 0
  ) {}

  /**
   * Size of the list
   * @returns the size of the list
   */
  get Size() {
    return this._size
  }

  /**
   * Value of the first element
   * @returns the value of the front element or null if the list is empty
   */
  get Front() {
    return this.head?.data || null
  }

  /**
   * Value of the last element
   * @returns the value of the beck element or null if the list is empty
   */
  get Back() {
    return this.tail?.data || null
  }

  /**
   * Adds a value at the end of the list
   * @param val - value to be added
   * @returns the list object
   */
  pushBack(val: T) {
    if (this.Size == 0) {
      this.head = new ListNode(val)

      this.tail = this.head
    } else {
      const node = new ListNode(val)

      // connect the node
      node.prev = this.tail
      this.tail!.next = node

      // update tail
      this.tail = node
    }

    this._size++

    return this // to allow chaining
  }

  /**
   * Adds an element at the end of the list
   * @param val - value to be added
   * @returns the list object
   */
  pushFront(val: T) {
    if (this.Size == 0) {
      this.head = new ListNode(val)

      this.tail = this.head
    } else {
      const node = new ListNode(val)

      // connect the node
      node.next = this.head
      this.head!.prev = node

      // update head
      this.head = node
    }

    this._size++

    return this
  }

  /**
   * Removes the element at the end of the list
   * @returns value of the element at the end of the list or null if the list is empty
   */
  popBack() {
    if (this.Size == 0) {
      return null
    }

    const result = this.tail!.data

    if (this.Size == 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail!.next = null
      this.tail = this.tail!.prev
    }

    this._size--

    return result
  }

  /**
   * Remove element from the front of the list
   * @returns value of the element at the front of the list
   */
  popFront() {
    if (this.Size == 0) {
      return null
    }

    const result = this.head!.data

    if (this.Size == 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = this.head!.next
      this.head!.prev = null
    }

    this._size--

    return result
  }

  /**
   * Gets forward iterator from the head
   * @returns iterable object starting from head
   *
   * @example
   * const list = new List()
   * list.pushBack(1).pushBack(2).pushBack(3)
   *
   * for (const value of list.forward()) {
   *  console.log(value) // 1 2 3
   * }
   */
  begin() {
    return new ForwardIterator(this.head)
  }

  /**
   * Gets the backward iterator from the tail
   * @returns iterable object starting from tail
   * @example
   *
   * const list = new List()
   * list.pushBack(1).pushBack(2).pushBack(3)
   *
   * for (const value of list.backward()) {
   *  console.log(value) // 3 2 1
   * }
   */
  end() {
    return new ReverseIterator(this.tail)
  }

  /**
   * Insert a value after iterator
   * @param iterator position to insert after
   * @param data - value to be inserted
   */
  insertAfter(iterator: NodeIterator<T>, data: T): void

  /**
   * Insert an array of values after the iterator
   * @param iterator - position to insert after
   * @param data - array with values
   */
  insertAfter(iterator: NodeIterator<T>, data: T[]): void

  /**
   * Insert all values from an enumerable collection after iterator
   * @param iterator - position to insert after
   * @param data - enumerable collection
   */
  insertAfter(iterator: NodeIterator<T>, data: Iterable<T>): void

  /**
   * Insert nodes from iterators
   * @param iterator position to insert after
   * @param data - start iterator
   * @param stop - optional stop iterator, if it is not provided it inserts all the values accessible from the data iterator
   */
  insertAfter(
    iterator: NodeIterator<T>,
    data: NodeIterator<T>,
    stop?: NodeIterator<T>
  ): void

  // Implementation for insertAfter
  insertAfter(
    iterator: NodeIterator<T>,
    data: T | T[] | Iterable<T> | NodeIterator<T>,
    end?: NodeIterator<T>
  ): void {
    if (isNodeIterator(data)) {
      this.insertRange(iterator, data, end ?? new ForwardIterator(null))
    } else if (Array.isArray(data)) {
      this.insertArray(iterator, data)
    } else if (isIterable(data)) {
      this.insertArray(iterator, [...data])
    } else {
      this.insertValue(iterator, data)
    }
  }

  /**
   * Insert a value after iterator
   * @param iterator position to insert after
   * @param data - value to be inserted
   */
  insertBefore(iterator: NodeIterator<T>, data: T): void

  /**
   * Insert an array of values after the iterator
   * @param iterator - position to insert after
   * @param data - array with values
   */
  insertBefore(iterator: NodeIterator<T>, data: T[]): void

  /**
   * Insert all values from an enumerable collection after iterator
   * @param iterator - position to insert after
   * @param data - enumerable collection
   */
  insertBefore(iterator: NodeIterator<T>, data: Iterable<T>): void

  /**
   * Insert nodes from iterators
   * @param iterator position to insert after
   * @param data - start iterator
   * @param stop - optional stop iterator, if it is not provided it inserts all the values accessible from the data iterator
   */
  insertBefore(
    iterator: NodeIterator<T>,
    data: NodeIterator<T>,
    end?: NodeIterator<T>
  ): void

  insertBefore(
    iterator: NodeIterator<T>,
    data: T | T[] | Iterable<T> | NodeIterator<T>,
    end?: NodeIterator<T>
  ): void {
    // when iterator is on a head
    if (!iterator.Current?.prev) {
      if (isNodeIterator(data)) {
        if (!data.Current || (end && data.equals(end))) {
          return
        }

        const newBegin = new ForwardIterator(data.Current.next)

        data.Current.next = this.head
        this.head = data.Current
        this._size++

        this.insertRange(
          this.begin(),
          newBegin,
          end ?? new ForwardIterator(null)
        )
      } else if (isIterable(data) || Array.isArray(data)) {
        const dataArr = [...data]

        if (!dataArr.length) {
          return
        }

        this.pushFront(dataArr[0])
        this.insertArray(this.begin(), dataArr, 1)
      } else {
        this.pushFront(data)
      }

      return
    }

    const prevNodeIterator = new ForwardIterator(iterator.Current.prev)

    if (isNodeIterator(data)) {
      this.insertRange(prevNodeIterator, data, end ?? new ForwardIterator(null))
    } else if (Array.isArray(data)) {
      this.insertArray(prevNodeIterator, data)
    } else if (isIterable(data)) {
      this.insertArray(prevNodeIterator, [...data])
    } else {
      this.insertValue(prevNodeIterator, data)
    }
  }

  private insertValue(iterator: NodeIterator<T>, data: T) {
    const node = iterator.Current

    if (node === this.tail || !node) {
      this.pushBack(data)
      return
    }

    const newNode = new ListNode(data)

    newNode.prev = node

    newNode.next = node.next
    node.next = newNode

    this._size++
  }

  private insertArray(iterator: NodeIterator<T>, data: T[], start: number = 0) {
    const length = data.length

    if (!length) {
      return
    }

    const nodes = Array.from(
      { length },
      (_, index) => new ListNode(data[index])
    )

    for (let i = start + 1; i < length; i++) {
      nodes[i].prev = nodes[i - 1]
      nodes[i - 1].next = nodes[i]
    }

    const node = iterator.Current

    // we add to an empty list
    if (!node) {
      this.head = nodes[start]
      this.tail = nodes[length - 1]
      this._size = length - start

      return
    }

    // connect last node
    const lastAdded = nodes[length - 1]

    lastAdded.next = node.next

    if (node.next) {
      node.next.prev = lastAdded
    } else {
      this.tail = lastAdded
    }

    // connect first node
    node.next = nodes[start]
    nodes[start].prev = node

    this._size += length - start
  }

  private insertRange(
    iterator: NodeIterator<T>,
    begin: NodeIterator<T>,
    end: NodeIterator<T>
  ) {
    let crt = iterator.Current
    const next = crt?.next ?? null

    let add = begin.Current

    if (add === null || begin.equals(end)) {
      return
    }

    const stop = end.Current

    let count = 0
    let newNode: ListNode<T> | null = null

    while (add && add !== stop?.next) {
      newNode = new ListNode(add.data, null, crt)

      if (crt === null) {
        this.head = newNode
      } else {
        crt.next = newNode
      }

      crt = newNode
      add = add.next

      count++
    }

    if (count === 0) {
      return
    }

    if (next === null) {
      this.tail = crt
    }

    if (crt) {
      crt.next = next
    }

    this._size += count
  }

  // TODO: Implement insertBefore

  remove(begin: NodeIterator<T>, end?: NodeIterator<T>) {
    let crt = begin.Current
    const stop = end ? end.Current : null

    // nothing to do
    if (crt === null) {
      return
    }
    // disconnect nodes
    if (crt.prev) {
      crt.prev.next = stop?.next ?? null
    }

    if (stop?.next) {
      stop.next.prev = crt.prev
    }

    // update the list
    if (crt === this.head) {
      this.head = stop?.next ?? null
    }

    if (stop === this.tail || stop === null) {
      this.tail = crt.prev
    }

    if (this.head === null) {
      this._size = 0
      return
    }

    while (crt && crt != stop?.next) {
      this._size--
      crt = crt.next
    }
  }
}

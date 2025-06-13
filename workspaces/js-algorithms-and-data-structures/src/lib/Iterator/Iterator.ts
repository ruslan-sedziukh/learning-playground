import { ListNode } from '../Node'
import { hasGetter, hasMethod } from '../utils/utils'

/**
 * Interface for a NodeIterator
 * it extends the Iterator interface and Iterable interface
 * adds methods for getting and setting the data of the current node
 */
export interface NodeIterator<T> extends Iterator<T>, Iterable<T> {
  /**
   * Gets the data of the current node
   * @returns data of the current node or null if the current node is null
   */
  getData(): T | null

  /**
   * Sets the data value for the current node
   * @param newValue - new value to set for the node
   */
  setData(newValue: T): void

  /**
   * Gets the current node
   * @returns the current node or null if the current node is null
   */
  get Current(): ListNode<T> | null

  /**
   * Compares this NodeIterator with another NodeIterator
   * @param other - another NodeIterator to compare with
   * @returns true if the two NodeIterators are referencing the same node, false otherwise
   */
  equals(other: NodeIterator<T>): boolean
}

abstract class NodeIteratorBase<T> implements NodeIterator<T> {
  constructor(protected _current: ListNode<T> | null) {}

  /**
   * Gets the data of the current node
   * @returns data of the current node or null if the current node is null
   */
  getData() {
    if (!this._current) {
      return null
    }

    return this._current.data
  }

  /**
   * Sets the data value for the current node
   * @param newValue - new value to set for the node
   */
  setData(newValue: T) {
    if (this._current) {
      this._current.data = newValue
    }
  }

  /**
   * Gets the current node
   * @returns the current node or null if the current node is null
   */
  get Current() {
    return this._current
  }

  /**
   * Compares this NodeIterator with another NodeIterator
   * @param other - another NodeIterator to compare with
   * @returns true if the two NodeIterators are referencing the same node, false otherwise
   */
  equals(other: NodeIterator<T>): boolean {
    return this._current === other.Current
  }

  // abstract methods
  abstract next(): IteratorResult<T>

  abstract [Symbol.iterator](): NodeIterator<T>
}

export class ForwardIterator<T = number> extends NodeIteratorBase<T> {
  constructor(current: ListNode<T> | null) {
    super(current)
  }

  /**
   * Moves to the next node
   * @returns an object of IteratorResult<T>
   */
  next(): IteratorResult<T> {
    if (!this._current) {
      return { done: true, value: undefined }
    }

    const { data, next } = this._current

    this._current = next

    return { done: false, value: data }
  }

  /**
   * Inserts nodes after the current node
   * @param elements - elements to insert
   */
  insertAfter(...elements: T[]): void {
    if (!this._current) {
      return
    }

    const { next } = this._current

    for (const element of elements) {
      const newNode = new ListNode(element, next, this._current)
      this._current.next = newNode

      if (next) {
        next.prev = newNode
      }
    }
  }

  /**
   * Gets the iterator
   * @returns this the same object
   */
  [Symbol.iterator](): ForwardIterator<T> {
    return this
  }
}

export class ReverseIterator<T = number> extends NodeIteratorBase<T> {
  constructor(current: ListNode<T> | null) {
    super(current)
  }

  next(): IteratorResult<T> {
    if (!this._current) {
      return { done: true, value: undefined }
    }

    const { data, prev } = this._current

    this._current = prev

    return { done: false, value: data }
  }

  [Symbol.iterator](): ReverseIterator<T> {
    return this
  }
}

export const isNodeIterator = <T>(input: any): input is NodeIterator<T> => {
  return (
    hasMethod<NodeIterator<T>>(input, 'getData') &&
    hasMethod<NodeIterator<T>>(input, 'setData') &&
    hasMethod<NodeIterator<T>>(input, 'equals') &&
    hasGetter<NodeIterator<T>>(input, 'Current')
  )
}

/**
 * Compares two elements and returns a number indicating their relative order
 *
 * @template T The type of the elements to be compared
 * @param {T} a The first element to compare.
 * @param {T} b The second element to compare.
 * @returns {number} A negative number if `a` is less than `b`, a positive number if `a` is greater than `b`, or 0 if they are equal.  

 */
interface Comparator<T> {
  (a: T, b: T): number
}

type Maybe<T> = T | undefined

/**
 * Generic heap data structure.
 *
 * @template T The type of elements stored in the heap.
 */
export class Heap<T = number> {
	private data: T[] = []

	/**
	 * Creates a min-heap or max-heap based on the comparator.
	 * @param comparator for the heap elements.
	 */
	constructor(private comparator: Comparator<T>) {}

	/**
	 * Pushes a new element onto the heap.
	 * @param {T} value The element to be pushed.
	 */
	public push(value: T) {
    this.data.push(value)

    this.heapifyUp(this.data.length - 1)
  }

	/**
	 * Removes and returns the root element from the heap.
	 *
	 * @returns {T} The removed element or `undefined` if the heap is empty.
	 * @throws {Error} If the heap is empty.
	 */
  public pop(): T {
    if (this.data.length === 0) {
      throw new Error('The heap is empty')
    }

    const root = this.data[0]

    this.data[0] = this.data[this.data.length - 1]

		this.data.pop()

    this.heapifyDown(0)

    return root
  }

	/**
	 * Returns the root element of the heap without removing it.
	 *
	 * @returns  {T} The value of the root element or undefined if the heap is empty.
	 * @throws {Error} Throws error if the heap is empty.
	 */
  public peek(): T {
		if (this.data.length === 0) {
			throw new Error('The heap is empty')
		}

		return this.data[0]
  }

	/**
	 * Returns the number of elements in the heap.
	 *
	 * @returns {number} The number of elements in the heap.
	 */
  public get size(): number {
    return this.data.length
  }

	/**
	 * Gets the parent index of the node.
	 *
	 * @param {number} index The current node index.
	 * @returns {number} The index of the parent node.
	 */
  private getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2)
  }

	/**
	 * Gets the index of the left child.
	 *
	 * @param {number} index The parent node index.
	 * @returns {number} The index of the left child node.
	 */
  private getLeftChildIndex(index: number): number {
    return 2 * index + 1
  }

	/**
	 * Gets the index of the right child.
	 *
	 * @param {number} index The parent node index.
	 * @returns {number} The index of the right child node.
	 */
	private getRightChildIndex(index: number): number {
    return 2 * index + 2
  }

	/**
	 * Restore the heap property after inserting an element.
	 *
	 * @param {number} index The index of the element to heapify up.
	 */
  private heapifyUp(index: number) {
    while (index > 0) {
      const parentIndex = this.getParentIndex(index)

			// the element is in the correct order
			if (this.comparator(this.data[parentIndex], this.data[index]) < 0) {
				break
			}

			// swap elements
			[this.data[index], this.data[parentIndex]] = [this.data[parentIndex], this.data[index]]

			// update index
			index = parentIndex
    }
  }

	/**
	 * Restore the heap property after removing the root.
	 *
	 * @param {number} index The index of the node to heapify down.
	 */
  private heapifyDown(index: number) {
		const leftChildIndex = this.getLeftChildIndex(index);
    const rightChildIndex = this.getRightChildIndex(index);  


    let crtIndex = index;

		// check the condition the left child
    if (leftChildIndex < this.data.length && 
			 this.comparator(this.data[leftChildIndex], this.data[crtIndex]) < 0) {
      crtIndex = leftChildIndex;
    }

		// check the condition on the right child
    if (rightChildIndex < this.data.length &&
			  this.comparator(this.data[rightChildIndex], this.data[crtIndex]) < 0) {
      crtIndex = rightChildIndex;
    }

		// swap elements and continue searching
		if (crtIndex !== index) {
			[this.data[crtIndex], this.data[index]] = [this.data[index], this.data[crtIndex]]

			this.heapifyDown(crtIndex)
		}
	}
}

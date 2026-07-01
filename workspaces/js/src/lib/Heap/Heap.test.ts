import { Heap } from '.'

describe('Heap', () => {
  describe('Max Heap', () => {
    it('push and pop elements correctly', () => {
      const maxComparator = (a: number, b: number) => b - a

      const heap = new Heap(maxComparator)

      heap.push(10)
      heap.push(5)
      heap.push(15)
      heap.push(20)

      expect(heap.size).toBe(4)
      expect(heap.peek()).toBe(20)

      expect(heap.pop()).toBe(20)
      expect(heap.pop()).toBe(15)
      expect(heap.pop()).toBe(10)
      expect(heap.pop()).toBe(5)

      expect(heap.size).toBe(0)
    })
  })

  describe('Min Heap', () => {
    it('push and pop elements correctly', () => {
      const minComparator = (a: number, b: number) => a - b

      const minHeap = new Heap(minComparator)

      minHeap.push(10)
      minHeap.push(5)
      minHeap.push(15)
      minHeap.push(20)

      expect(minHeap.size).toBe(4)

      expect(minHeap.peek()).toBe(5)

      expect(minHeap.pop()).toBe(5)
      expect(minHeap.pop()).toBe(10)
      expect(minHeap.pop()).toBe(15)
      expect(minHeap.pop()).toBe(20)

      expect(minHeap.size).toBe(0)
    })
  })

  describe('when the heap is empty', () => {
    it('pop throws error', () => {
      const heap = new Heap((a, b) => a - b )

      expect(() => heap.pop()).toThrow()
    })

    it('peek throws error', () => {
      const heap = new Heap((a, b) => a - b )

      expect(() => heap.peek()).toThrow()
    })
  })
})

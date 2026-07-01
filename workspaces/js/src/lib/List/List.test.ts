import { ForwardIterator } from '../Iterator'
import { List } from '.'

describe('List', () => {
  describe('constructor', () => {
    it('initializes the properties', () => {
      const list = new List()

      expect(list.Front).toBeNull()
      expect(list.Back).toBeNull()
      expect(list.Size).toBe(0)
    })
  })

  describe('pushBack', () => {
    it('sets the back value', () => {
      const [first, last] = [1, 2]

      const list = new List()

      list.pushBack(first)
      expect(list.Back).toBe(first)

      list.pushBack(last)
      expect(list.Back).toBe(last)
    })

    it('updates the size', () => {
      const [first, last] = [1, 2]

      const list = new List()

      list.pushBack(first)
      expect(list.Size).toBe(1)

      list.pushBack(last)

      expect(list.Size).toBe(2)
    })

    it('returns the list object', () => {
      const list = new List()

      expect(list.pushBack(1)).toBe(list)
    })

    describe('when the list is empty', () => {
      it('sets the front value', () => {
        const value = 1

        const list = new List()

        list.pushBack(value)

        expect(list.Front).toBe(value)
      })
    })
  })

  describe('pushFront', () => {
    it('sets the front value', () => {
      const [first, last] = [1, 2]

      const list = new List()

      list.pushFront(first)
      expect(list.Front).toBe(first)

      list.pushFront(last)
      expect(list.Front).toBe(last)
    })

    it('updates the size', () => {
      const list = new List()

      list.pushFront(1).pushFront(2)

      expect(list.Size).toBe(2)
    })

    it('returns the list object', () => {
      const list = new List()

      expect(list.pushBack(1)).toBe(list)
    })

    describe('when the list is empty', () => {
      it('sets the back value', () => {
        const val = 1

        const list = new List()

        list.pushFront(val)

        expect(list.Back).toBe(val)
      })
    })
  })

  describe('popBack', () => {
    let list: List
    let values = [1, 2, 3]

    beforeEach(() => {
      list = values.reduce((list, value) => list.pushBack(value), new List())
    })

    it('returns the value of the last element', () => {
      const last = values[values.length - 1]

      expect(list.popBack()).toBe(last)
    })

    it('updates the value for the back', () => {
      list.popBack()

      expect(list.Back).toBe(values[values.length - 2])
    })

    it('updates the size', () => {
      list.popBack()

      expect(list.Size).toBe(values.length - 1)
    })

    describe('when the list remains with a single element', () => {
      it('value of the back is equal with front', () => {
        while (list.Size > 1) {
          list.popBack()
        }

        expect(list.Back).toBe(values[0])
        expect(list.Front).toBe(values[0])
      })
    })

    describe('when the list become empty', () => {
      it('back and front become null', () => {
        while (list.Size > 0) {
          list.popBack()
        }

        expect(list.Front).toBeNull()
        expect(list.Back).toBeNull()
      })
    })
  })

  describe('popFront', () => {
    let list: List
    let values = [1, 2, 3]

    beforeEach(() => {
      list = values.reduce((list, value) => list.pushBack(value), new List())
    })

    it('returns the value of the last element', () => {
      const front = values[0]

      expect(list.popFront()).toBe(front)
    })

    it('updates the value for the back', () => {
      list.popFront()

      expect(list.Front).toBe(values[1])
    })

    it('updates the size', () => {
      list.popFront()

      expect(list.Size).toBe(values.length - 1)
    })

    describe('when the list remains with a single element', () => {
      it('value of the back is equal with front', () => {
        while (list.Size > 1) {
          list.popFront()
        }

        expect(list.Back).toBe(values[values.length - 1])
        expect(list.Front).toBe(values[values.length - 1])
      })
    })

    describe('when the list become empty', () => {
      it('back and front become null', () => {
        while (list.Size > 0) {
          list.popFront()
        }

        expect(list.Front).toBeNull()
        expect(list.Back).toBeNull()
      })
    })
  })

  describe('list traversal', () => {
    const values = [1, 2, 3]
    let list: List

    beforeEach(() => {
      list = values.reduce((acc, value) => acc.pushBack(value), new List())
    })

    describe('begin', () => {
      it('returns values for all nodes', () => {
        const result = [...list.begin()]

        expect(result).toEqual(values)
      })

      describe('when the list is empty', () => {
        it('returns an empty array', () => {
          const result = [...new List().begin()]

          expect(result).toEqual([])
        })
      })
    })

    describe('end', () => {
      it('returns values for all nodes reversed', () => {
        const result = [...list.end()]

        expect(result.reverse()).toEqual(values)
      })

      describe('when the list is empty', () => {
        it('returns an empty array', () => {
          const result = [...new List().end()]

          expect(result).toEqual([])
        })
      })
    })
  })

  describe('insertAfter', () => {
    const values = [1, 2, 3, 4, 5]
    const data = [10, 20, 30]

    const initList = (arr: number[]) =>
      arr.reduce((acc, val) => acc.pushBack(val), new List())

    describe('when data is a single value', () => {
      const value = 100

      describe('when the list is empty', () => {
        it('adds the element', () => {
          const list = new List()

          list.insertAfter(list.begin(), value)
          expect(list.Size).toBe(1)
          expect(list.Front).toBe(value)
          expect(list.Back).toBe(value)
        })
      })

      describe('when the iterator is at the front', () => {
        it('adds the element', () => {
          const list = initList(values)

          list.insertAfter(list.begin(), value)

          expect(list.Size).toBe(values.length + 1)
          expect([...list.begin()]).toEqual([1, value, 2, 3, 4, 5])
        })
      })

      describe('when the iterator is at the end', () => {
        it('adds the element', () => {
          const list = initList(values)

          list.insertAfter(list.end(), value)

          expect(list.Size).toBe(values.length + 1)
          expect([...list.begin()]).toEqual([...values, value])
          expect(list.Back).toBe(value)
        })
      })

      describe('when the iterator is inside', () => {
        it('adds the element', () => {
          const list = initList(values)

          const iterator = list.begin()

          iterator.next()

          list.insertAfter(iterator, value)

          expect(list.Size).toBe(values.length + 1)

          expect([...list.begin()]).toEqual([1, 2, value, 3, 4, 5])
        })
      })
    })

    describe('when data is array', () => {
      describe('when list is empty', () => {
        it('adds elements', () => {
          const list = new List()

          list.insertAfter(list.begin(), data)

          expect([...list.begin()]).toEqual(data)

          expect(list.Size).toBe(data.length)
        })
      })

      describe('when the iterator is on the head', () => {
        it('adds elements', () => {
          const list = initList(values)

          list.insertAfter(list.begin(), data)

          expect(list.Size).toBe(values.length + data.length)

          expect([...list.begin()]).toEqual([1, ...data, 2, 3, 4, 5])
        })
      })

      describe('when the iterator is on the tail', () => {
        it('adds the elements', () => {
          const list = initList(values)

          list.insertAfter(list.end(), data)

          expect(list.Size).toBe(values.length + data.length)

          expect([...list.begin()]).toEqual([1, 2, 3, 4, 5, ...data])
        })
      })

      describe('when the iterator is inside', () => {
        it('adds the elements', () => {
          const list = initList(values)

          const iterator = list.begin()
          iterator.next()

          list.insertAfter(iterator, data)

          expect(list.Size).toBe(values.length + data.length)

          expect([...list.begin()]).toEqual([1, 2, ...data, 3, 4, 5])
        })
      })

      describe('when the array is empty', () => {
        it('the is unchanged', () => {
          const list = initList(values)

          list.insertAfter(list.begin(), [])

          expect(list.Size).toBe(values.length)

          expect([...list.begin()]).toEqual(values)
        })
      })
    })

    describe('when data is enumerable', () => {
      // Note: for simplicty it is only checking if the elements are added
      // the rest is already tested in the array part
      it('adds the elements', () => {
        const collection = new Set(data)
        const list = initList(values)

        const iterator = list.begin()
        iterator.next()

        list.insertAfter(iterator, collection)

        expect(list.Size).toBe(values.length + collection.size)

        expect([...list.begin()]).toEqual([1, 2, 10, 20, 30, 3, 4, 5])
      })
    })

    describe('when data is iterator', () => {
      it('adds the elements', () => {
        const srcList = initList(values)
        const list = initList(data)

        const begin = srcList.begin()

        const end = srcList.end()

        end.next()

        list.insertAfter(list.begin(), begin, end)

        expect(list.Size).toBe(values.length + data.length - 1)

        expect([...list.begin()]).toEqual([10, 1, 2, 3, 4, 20, 30])
      })

      describe('when the range is empty', () => {
        it('the list remains unchanged', () => {
          const srcList = initList(values)
          const list = initList(data)

          const begin = srcList.begin()

          const end = srcList.begin()

          list.insertAfter(list.begin(), begin, end)

          expect(list.Size).toBe(data.length)

          expect([...list.begin()]).toEqual([10, 20, 30])
        })
      })

      describe('when the end is not provided', () => {
        it('adds all the elements', () => {
          const srcList = initList(values)
          const list = initList(data)

          const begin = srcList.begin()

          list.insertAfter(list.begin(), begin)

          expect(list.Size).toBe(values.length + data.length)

          expect([...list.begin()]).toEqual([10, 1, 2, 3, 4, 5, 20, 30])
        })
      })

      describe('when the list is empty', () => {
        it('the list will contain only inserted elements', () => {
          const srcList = initList(values)
          const list = new List()

          const begin = srcList.begin()

          const end = srcList.end()

          list.insertAfter(list.begin(), begin, end)

          expect(list.Size).toBe(values.length)

          expect([...list.begin()]).toEqual(values)
        })
      })
    })
  })

  // TODO: Implement testing for insertBefore
  describe('insertBefore', () => {
    const values = [1, 2, 3, 4, 5]
    const data = [10, 20, 30]

    const initList = (arr: number[]) =>
      arr.reduce((acc, val) => acc.pushBack(val), new List())

    describe('when data is a single value', () => {
      const value = 100

      describe('when the list is empty', () => {
        it('adds the element', () => {
          const list = new List()

          list.insertBefore(list.begin(), value)

          expect(list.Size).toBe(1)
          expect(list.Front).toBe(value)
          expect(list.Back).toBe(value)
        })
      })

      describe('when the iterator is at the front', () => {
        it('adds the element', () => {
          const list = initList(values)

          list.insertBefore(list.begin(), value)

          expect(list.Size).toBe(values.length + 1)
          expect([...list.begin()]).toEqual([value, 1, 2, 3, 4, 5])
          expect(list.Front).toBe(value)
        })
      })

      describe('when the iterator is at the end', () => {
        it('adds the element', () => {
          const list = initList(values)

          list.insertBefore(list.end(), value)

          expect(list.Size).toBe(values.length + 1)
          expect([...list.begin()]).toEqual([1, 2, 3, 4, value, 5])
        })
      })

      describe('when the iterator is inside', () => {
        it('adds the element', () => {
          const list = initList(values)
          const iterator = list.begin()

          iterator.next()
          list.insertBefore(iterator, value)

          expect(list.Size).toBe(values.length + 1)
          expect([...list.begin()]).toEqual([1, value, 2, 3, 4, 5])
        })
      })
    })

    describe('when data is array', () => {
      describe('when list is empty', () => {
        it('adds elements', () => {
          const list = new List()

          list.insertBefore(list.begin(), data)

          expect([...list.begin()]).toEqual(data)
          expect(list.Size).toBe(data.length)
        })
      })

      describe('when the iterator is on the head', () => {
        it('adds elements', () => {
          const list = initList(values)

          list.insertBefore(list.begin(), data)

          expect(list.Size).toBe(values.length + data.length)
          expect([...list.begin()]).toEqual([...data, 1, 2, 3, 4, 5])
        })
      })

      describe('when the iterator is on the tail', () => {
        it('adds the elements', () => {
          const list = initList(values)

          list.insertBefore(list.end(), data)

          expect(list.Size).toBe(values.length + data.length)
          expect([...list.begin()]).toEqual([1, 2, 3, 4, ...data, 5])
        })
      })

      describe('when the iterator is inside', () => {
        it('adds the elements', () => {
          const list = initList(values)
          const iterator = list.begin()

          iterator.next()
          list.insertBefore(iterator, data)

          expect(list.Size).toBe(values.length + data.length)
          expect([...list.begin()]).toEqual([1, ...data, 2, 3, 4, 5])
        })
      })

      describe('when the array is empty', () => {
        it('the is unchanged', () => {
          const list = initList(values)

          list.insertBefore(list.begin(), [])

          expect(list.Size).toBe(values.length)
          expect([...list.begin()]).toEqual(values)
        })
      })
    })

    describe('when data is enumerable', () => {
      // Note: for simplicty it is only checking if the elements are added
      // the rest is already tested in the array part
      it('adds the elements', () => {
        const collection = new Set(data)
        const list = initList(values)
        const iterator = list.begin()

        iterator.next()
        list.insertBefore(iterator, collection)

        expect(list.Size).toBe(values.length + collection.size)
        expect([...list.begin()]).toEqual([1, ...data, 2, 3, 4, 5])
      })
    })

    describe('when data is iterator', () => {
      it('adds the elements', () => {
        const srcList = initList(values)
        const list = initList(data)

        const begin = srcList.begin()
        const end = srcList.end()

        end.next()
        list.insertBefore(list.begin(), begin, end)

        expect(list.Size).toBe(values.length + data.length - 1)
        expect([...list.begin()]).toEqual([1, 2, 3, 4, 10, 20, 30])
      })

      describe('when the range is empty', () => {
        it('the list remains unchanged', () => {
          const srcList = initList(values)
          const list = initList(data)

          const begin = srcList.begin()
          const end = srcList.begin()

          list.insertBefore(list.begin(), begin, end)

          expect(list.Size).toBe(data.length)
          expect([...list.begin()]).toEqual([10, 20, 30])
        })
      })

      describe('when the end is not provided', () => {
        it('adds all the elements', () => {
          const srcList = initList(values)
          const list = initList(data)

          const begin = srcList.begin()
          const iterator = list.begin()

          iterator.next()
          list.insertBefore(iterator, begin)

          expect(list.Size).toBe(values.length + data.length)
          expect([...list.begin()]).toEqual([10, 1, 2, 3, 4, 5, 20, 30])
        })
      })

      describe('when the list is empty', () => {
        it('the list will contain only inserted elements', () => {
          const srcList = initList(values)
          const list = new List()

          const begin = srcList.begin()
          const end = srcList.end()

          list.insertBefore(list.begin(), begin, end)

          expect(list.Size).toBe(values.length)
          expect([...list.begin()]).toEqual(values)
        })
      })
    })
  })

  describe('remove', () => {
    const values = [1, 2, 3, 4, 5, 6]
    let list: List

    const initList = (arr: number[] = values) =>
      arr.reduce((acc, val) => acc.pushBack(val), new List())

    beforeEach(() => (list = initList()))

    it('removes the nodes in the specified range', () => {
      const start = list.begin()
      const stop = list.end()

      start.next()
      stop.next()

      list.remove(start, stop)

      expect(list.Size).toBe(2)
      expect([...list.begin()]).toEqual([1, 6])
    })

    describe('when the end iterator is not provided', () => {
      it('removes all the elements from begin onward', () => {
        const start = list.begin()
        start.next()

        list.remove(start)

        expect(list.Size).toBe(1)

        expect([...list.begin()]).toEqual([1])
      })
    })

    describe('when the begin iterator is has null node', () => {
      it('let the list unchanged', () => {
        list.remove(new ForwardIterator(null), list.end())

        expect(list.Size).toBe(values.length)
        expect([...list.begin()]).toEqual(values)
      })
    })

    describe('when the begin is at head and end is at the tail', () => {
      it('removes all elements', () => {
        list.remove(list.begin(), list.end())

        expect(list.Size).toBe(0)
        expect([...list.begin()]).toEqual([])
      })
    })

    describe('when the begin is at the tail', () => {
      it('removes last element', () => {
        list.remove(list.end())

        expect(list.Size).toBe(values.length - 1)
        expect([...list.begin()]).toEqual([1, 2, 3, 4, 5])
      })
    })
  })
})

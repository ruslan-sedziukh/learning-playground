import { ForwardIterator, isNodeIterator, ReverseIterator } from '.'
import { ListNode } from '../Node'

describe('ForwardIterator', () => {
  const values = [1, 2, 3]
  const first = new ListNode(values[0])
  const second = new ListNode(values[1])
  const last = new ListNode(values[2])

  beforeAll(() => {
    first.next = second
    second.prev = first

    second.next = last
    last.prev = second
  })

  beforeEach(() => {
    first.data = values[0]
    second.data = values[1]
    last.data = values[2]
  })

  describe('getData', () => {
    it('gets the value of the current node', () => {
      const iterator = new ForwardIterator(first)

      expect(iterator.getData()).toBe(values[0])
    })

    describe('when node is null', () => {
      it('returns null', () => {
        const iterator = new ForwardIterator(null)

        expect(iterator.getData()).toBeNull()
      })
    })
  })

  describe('setData', () => {
    it('sets the value of the current node', () => {
      const iterator = new ForwardIterator(first)
      const newValue = 3

      iterator.setData(newValue)

      expect(iterator.getData()).toBe(newValue)
    })

    describe('when node is null', () => {
      it('does not throw an error', () => {
        const iterator = new ForwardIterator(null)

        expect(() => iterator.setData(1)).not.toThrow()
      })
    })
  })

  describe('next', () => {
    it('move to the next node', () => {
      const iterator = new ForwardIterator(first)

      iterator.next()

      expect(iterator.getData()).toBe(values[1])
    })

    describe('when node is null', () => {
      it('next() returns correct object', () => {
        const iterator = new ForwardIterator(null)

        const result = iterator.next()

        expect(result).toEqual({ done: true, value: undefined })
      })
    })
  })

  describe('Iterable interface', () => {
    it('returns itself', () => {
      const iterator = new ForwardIterator(first)

      expect(iterator[Symbol.iterator]()).toBe(iterator)
    })
  })
})

describe('ReverseIterator', () => {
  const values = [1, 2, 3]
  const first = new ListNode(values[0])
  const second = new ListNode(values[1])
  const last = new ListNode(values[2])

  beforeAll(() => {
    first.next = second
    second.prev = first

    second.next = last
    last.prev = second
  })

  beforeEach(() => {
    first.data = values[0]
    second.data = values[1]
    last.data = values[2]
  })

  describe('getData', () => {
    it('gets the value of the current node', () => {
      const iterator = new ReverseIterator(last)

      expect(iterator.getData()).toBe(values[2])
    })

    describe('when node is null', () => {
      it('returns null', () => {
        const iterator = new ReverseIterator(null)

        expect(iterator.getData()).toBeNull()
      })
    })
  })

  describe('setData', () => {
    it('sets the value of the current node', () => {
      const iterator = new ReverseIterator(last)
      const newValue = 3

      iterator.setData(newValue)

      expect(iterator.getData()).toBe(newValue)
    })

    describe('when node is null', () => {
      it('does not throw an error', () => {
        const iterator = new ReverseIterator(null)

        expect(() => iterator.setData(1)).not.toThrow()
      })
    })
  })

  describe('next', () => {
    it('move to the next node', () => {
      const iterator = new ReverseIterator(last)

      iterator.next()

      expect(iterator.getData()).toBe(values[1])
    })

    describe('when node is null', () => {
      it('next() returns correct object', () => {
        const iterator = new ReverseIterator(null)

        const result = iterator.next()

        expect(result).toEqual({ done: true, value: undefined })
      })
    })
  })

  describe('Iterable interface', () => {
    it('returns itself', () => {
      const iterator = new ReverseIterator(first)

      expect(iterator[Symbol.iterator]()).toBe(iterator)
    })
  })
})

describe('isNodeIterator', () => {
  describe.each([
    {
      desc: 'when object is of type NodeIterator',
      input: new ForwardIterator(null),
      expected: true,
    },
    {
      desc: 'when object is not of type NodeIterator',
      input: [1, 2],
      expected: false,
    },
    {
      desc: 'when equals method is missing',
      input: {
        getData() {},
        setData() {},
        get Current() {
          return 1
        },
      },
      expected: false,
    },
    {
      desc: 'when getData method is missing',
      input: {
        setData() {},
        equals() {},
        get Current() {
          return 1
        },
      },
      expected: false,
    },
    {
      desc: 'when setData method is missing',
      input: {
        getData() {},
        equals() {},
        get Current() {
          return 1
        },
      },
      expected: false,
    },
    {
      desc: 'when Current property is missing',
      input: {
        getData() {},
        setData() {},
        equals() {},
      },
      expected: false,
    },
    {
      desc: 'when Current property is not a function',
      input: {
        Current: 0,
        getData() {},
        setData() {},
        equals() {},
      },
      expected: false,
    },
  ])('$desc', ({ input, expected }) => {
    it(`returns ${expected}`, () => {
      expect(isNodeIterator(input)).toBe(expected)
    })
  })
})

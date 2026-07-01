import SinglyLinkedList, { Node } from './SinglyLinkedList'

describe('SinglyLinkedList', () => {
  describe('push', () => {
    it('adds new node to list head and tail if its a first node', () => {
      const list = new SinglyLinkedList()
      const str = 'hello'

      list.push(str)

      expect(list.head?.val).toBe(str)
      expect(list.tail?.val).toBe(str)
    })

    it('adds new node to list tail if its not a first node', () => {
      const list = new SinglyLinkedList()
      const str1 = 'hello'
      const str2 = 'halelujiah'

      list.push(str1)
      list.push(str2)

      expect(list.head?.val).toBe(str1)
      expect(list.tail?.val).toBe(str2)
    })

    it('increases list length', () => {
      const list = new SinglyLinkedList()
      const str = 'hello'

      list.push(str)
      expect(list.length).toBe(1)

      list.push(str)
      expect(list.length).toBe(2)
    })

    it('returns the list', () => {
      const list = new SinglyLinkedList()
      const str = 'hello'

      list.push(str)
      expect(list.push(str)).toBe(list)
    })
  })

  describe('pop', () => {
    it('update tail to be previous node', () => {
      const list = new SinglyLinkedList()
      const str1 = 'hello'
      const str2 = 'yeah booooy'
      const str3 = 'kawabanga'

      list.push(str1)
      list.push(str2)
      list.push(str3)

      list.pop()

      expect(list.tail?.val).toBe(str2)
    })

    it('update tails next to null', () => {
      const list = new SinglyLinkedList()
      const str1 = 'hello'
      const str2 = 'yeah booooy'
      const str3 = 'kawabanga'

      list.push(str1)
      list.push(str2)
      list.push(str3)

      list.pop()

      expect(list.tail?.next).toBe(null)
    })

    it('decrease list length by 1', () => {
      const list = new SinglyLinkedList()
      const str1 = 'hello'
      const str2 = 'yeah booooy'
      const str3 = 'kawabanga'

      list.push(str1)
      list.push(str2)
      list.push(str3)

      list.pop()
      expect(list.length).toBe(2)

      list.pop()
      expect(list.length).toBe(1)
    })

    it('returns removed node value', () => {
      const list = new SinglyLinkedList()
      const str1 = 'hello'
      const str2 = 'yeah booooy'
      const str3 = 'kawabanga'

      list.push(str1)
      list.push(str2)
      list.push(str3)

      expect(list.pop()).toBe(str3)
    })

    it('returns undefined if head is null', () => {
      const list = new SinglyLinkedList()

      expect(list.pop()).not.toBeDefined()
    })
  })

  describe('shift', () => {
    it('returns removed node value', () => {
      const list = new SinglyLinkedList()
      const str1 = 'hello'
      const str2 = 'yeah booooy'
      const str3 = 'kawabanga'

      list.push(str1)
      list.push(str2)
      list.push(str3)

      expect(list.shift()).toBe(str1)
    })

    it('returns undefined if head is null', () => {
      const list = new SinglyLinkedList()

      expect(list.shift()).not.toBeDefined()
    })

    it('decreases length by 1', () => {
      const list = new SinglyLinkedList()
      const str1 = 'hello'
      const str2 = 'yeah booooy'
      const str3 = 'kawabanga'

      list.push(str1)
      list.push(str2)
      list.push(str3)

      list.shift()

      expect(list.length).toBe(2)
    })

    it('assigns tail to null if length update list is 0', () => {
      const list = new SinglyLinkedList()
      const str1 = 'hello'
      const str2 = 'yeah booooy'
      const str3 = 'kawabanga'

      list.push(str1)
      list.push(str2)
      list.push(str3)

      list.shift()
      list.shift()
      list.shift()

      expect(list.tail).toBeNull()
    })
  })

  describe('unshift', () => {
    it('assigns new node to head and tail if list was empty', () => {
      const list = new SinglyLinkedList()
      const str = 'hey'

      list.unshift(str)

      expect(list.head?.val).toBe(str)
      expect(list.tail?.val).toBe(str)
    })

    it('assigns head to new node', () => {
      const list = new SinglyLinkedList()
      const str1 = 'hey'
      const str2 = 'joe'
      const str3 = 'how are you'

      list.unshift(str1)
      expect(list.head?.val).toBe(str1)

      list.unshift(str2)
      expect(list.head?.val).toBe(str2)

      list.unshift(str3)
      expect(list.head?.val).toBe(str3)
    })

    it('increases list length by 1', () => {
      const list = new SinglyLinkedList()
      const str = 'hey'

      list.unshift(str)
      expect(list.length).toBe(1)

      list.unshift(str)
      expect(list.length).toBe(2)
    })

    it('returns the list', () => {
      const list = new SinglyLinkedList()
      const str1 = 'hey'
      const str2 = 'joe'

      expect(list.unshift(str1)).toBe(list)
      expect(list.unshift(str2)).toBe(list)
    })

    it('assigns new heads node next to the old head node', () => {
      const list = new SinglyLinkedList()
      const str1 = 'hey'
      const str2 = 'joe'

      list.unshift(str1)
      list.unshift(str2)

      expect(list.head?.next?.val).toBe(str1)
    })
  })

  describe('get', () => {
    it('returns undefined if index in less then 0 or bigger then list length', () => {
      const list = new SinglyLinkedList()
      const str1 = 'hey'
      const str2 = 'joe'
      const str3 = 'how are you'

      list.push(str1)
      list.push(str2)
      list.push(str3)

      expect(list.get(-1)?.val).not.toBeDefined()
      expect(list.get(10)?.val).not.toBeDefined()
    })

    it('returns node with provided index', () => {
      const list = new SinglyLinkedList()
      const str1 = 'hey'
      const str2 = 'joe'
      const str3 = 'how are you'

      list.push(str1)
      list.push(str2)
      list.push(str3)

      expect(list.get(0)?.val).toBe(str1)
      expect(list.get(1)?.val).toBe(str2)
      expect(list.get(2)?.val).toBe(str3)
    })
  })

  describe('set', () => {
    it('returns false if there is no node with that index', () => {
      const list = new SinglyLinkedList()

      expect(list.set('a', 1)).toBe(false)
    })

    it('returns true if value was changed', () => {
      const list = new SinglyLinkedList()

      list.push('a')
      list.push('a')

      expect(list.set('a', 1)).toBe(true)
    })

    it('changes value of the node', () => {
      const list = new SinglyLinkedList()

      const str1 = 'hey'
      const str2 = 'joe'

      list.push(str1)
      list.push(str1)

      list.set(str2, 1)

      expect(list.get(1)?.val).toBe(str2)
    })
  })

  describe('insert', () => {
    it('correctly insert at the beginning, in the middle and in the end of a list ', () => {
      const list = new SinglyLinkedList()
      const str1 = 'hey'
      const str2 = 'joe'
      const str3 = 'how are you'
      const str4 = 'yeah booooy'

      list.push(str1)
      list.push(str2)
      list.push(str3)

      list.insert(str4, 0)
      expect(list.get(0)?.val).toBe(str4)

      list.insert(str4, 2)
      expect(list.get(2)?.val).toBe(str4)

      list.insert(str4, 5)
      expect(list.get(5)?.val).toBe(str4)
    })

    it('returns true if node was successfully inserted', () => {
      const list = new SinglyLinkedList()
      const str1 = 'hey'

      expect(list.insert(str1, 0)).toBe(true)
    })

    it('changes prev node next to point to new node', () => {
      const list = new SinglyLinkedList()
      const str1 = 'hey'
      const str2 = 'joe'
      const str3 = 'how are you'
      const str4 = 'yeah booooy'

      list.push(str1)
      list.push(str2)
      list.push(str3)

      list.insert(str4, 1)

      expect(list.get(0)?.next?.val).toEqual(str4)
    })

    it('makes inserted node next to point to old node with same index', () => {
      const list = new SinglyLinkedList()
      const str1 = 'hey'
      const str2 = 'joe'
      const str3 = 'how are you'
      const str4 = 'yeah booooy'

      list.push(str1)
      list.push(str2)
      list.push(str3)

      list.insert(str4, 2)

      expect(list.get(2)?.next?.val).toEqual(str3)
    })

    it('returns false if index is less then 0 or > length', () => {
      const list = new SinglyLinkedList()
      const str1 = 'hey'
      const str2 = 'joe'
      const str3 = 'how are you'
      const str4 = 'yeah booooy'

      list.push(str1)
      list.push(str2)
      list.push(str3)

      expect(list.insert(str4, -1)).toEqual(false)
      expect(list.insert(str4, list.length + 1)).toEqual(false)
    })

    it('increases list length by 1', () => {
      const list = new SinglyLinkedList()
      const str1 = 'hey'
      const str2 = 'joe'
      const str3 = 'how are you'
      const str4 = 'yeah booooy'

      list.push(str1)
      list.push(str2)
      list.push(str3)

      list.insert(str4, 2)
      expect(list.length).toBe(4)

      list.insert(str4, 2)
      expect(list.length).toBe(5)
    })
  })

  describe('remove', () => {
    it('returns false if index is >= list length', () => {
      const list = new SinglyLinkedList()
      const str1 = 'hey'

      list.push(str1)

      expect(list.remove(1)).not.toBeDefined()
      expect(list.remove(2)).not.toBeDefined()
    })

    it('returns undefined if list is empty', () => {
      const list = new SinglyLinkedList()

      expect(list.remove(0)).not.toBeDefined()
    })

    it('returns undefined if index is < 0', () => {
      const list = new SinglyLinkedList()
      const str1 = 'hey'

      list.push(str1)

      expect(list.remove(-1)).not.toBeDefined()
    })

    it('decreases list length by 1', () => {
      const list = new SinglyLinkedList()
      const str1 = 'hey'
      const str2 = 'joe'
      const str3 = 'how are you'
      const str4 = 'yeah booooy'

      list.push(str1)
      list.push(str2)
      list.push(str3)
      list.push(str4)

      list.remove(1)
      expect(list.length).toBe(3)

      list.remove(1)
      expect(list.length).toBe(2)
    })

    it('assigns previous node next to node that goes after removed', () => {
      const list = new SinglyLinkedList()
      const str1 = 'hey'
      const str2 = 'joe'
      const str3 = 'how are you'
      const str4 = 'yeah booooy'

      list.push(str1)
      list.push(str2)
      list.push(str3)
      list.push(str4)

      const node1 = list.get(1)
      const node3 = list.get(3)

      list.remove(2)
      expect(node1?.next?.val).toBe(node3?.val)
    })

    it('returns removed node value', () => {
      const list = new SinglyLinkedList()
      const str1 = 'hey'
      const str2 = 'joe'
      const str3 = 'how are you'
      const str4 = 'yeah booooy'

      list.push(str1)
      list.push(str2)
      list.push(str3)
      list.push(str4)

      expect(list.remove(2)).toBe(str3)
      expect(list.remove(0)).toBe(str1)
      expect(list.remove(1)).toBe(str4)
    })
  })

  describe('reverse', () => {
    it('reverses 2 nodes list order', () => {
      const list = new SinglyLinkedList()
      const str1 = 'hey'
      const str2 = 'joe'

      list.push(str1)
      list.push(str2)

      list.reverse()

      expect(list?.head?.val).toBe(str2)
      expect(list?.tail?.val).toBe(str1)
      expect(list?.get(0)?.val).toBe(str2)
      expect(list?.get(1)?.val).toBe(str1)
      expect(list?.head?.val).toBe(str2)
      expect(list?.tail?.val).toBe(str1)
    })

    it('reverses > 2 nodes list order', () => {
      const list = new SinglyLinkedList()
      const str1 = 'hey'
      const str2 = 'joe'
      const str3 = 'how are you'
      const str4 = 'yeah booooy'

      list.push(str1)
      list.push(str2)
      list.push(str3)
      list.push(str4)

      list.reverse()

      expect(list?.head?.val).toBe(str4)
      expect(list?.tail?.val).toBe(str1)
      expect(list?.get(1)?.val).toBe(str3)
      expect(list?.get(2)?.val).toBe(str2)
      expect(list?.head?.val).toBe(str4)
      expect(list?.tail?.val).toBe(str1)
    })
  })
})

import { radixSort } from './radixSort'

const generateUnsortedArray = (size: number) => {
  const arr = []

  for (let i = 0; i < size; i++) {
    arr.push(Math.floor(Math.random() * 100000))
  }

  return arr
}

const sortArray = (arr: number[]) => arr.sort((a, b) => a - b)

const unsortedArray = generateUnsortedArray(10)
const sortedArray = sortArray(unsortedArray)

describe('quickSort', () => {
  it.each([
    {
      arr: [],
      order: 'asc' as const,
      expected: [],
    },
    {
      arr: [1],
      order: 'asc' as const,
      expected: [1],
    },
    {
      arr: [1, 2],
      order: 'asc' as const,
      expected: [1, 2],
    },
    {
      arr: [2, 1, 10, 243],
      order: 'asc' as const,
      expected: [1, 2, 10, 243],
    },
    {
      arr: [8, 1, 12, 4, 10],
      order: 'asc' as const,
      expected: [1, 4, 8, 10, 12],
    },
    {
      arr: [8, 1, 12, 4, -130, -28, 5, 2, 42, 17, 10, 23],
      order: 'asc' as const,
      expected: [-130, -28, 1, 2, 4, 5, 8, 10, 12, 17, 23, 42],
    },
    { arr: [5, 3, 4, 1, 2], order: 'asc' as const, expected: [1, 2, 3, 4, 5] },
    {
      arr: [1, 2, 3, -1, 4, 5],
      order: 'asc' as const,
      expected: [-1, 1, 2, 3, 4, 5],
    },
    { arr: [5, 4, 3, 2, 1], order: 'asc' as const, expected: [1, 2, 3, 4, 5] },
    { arr: [3, 4, 8, 9, 1], order: 'desc' as const, expected: [9, 8, 4, 3, 1] },
    { arr: unsortedArray, order: 'asc' as const, expected: sortedArray },
  ])(
    'returns $expected for $arr with $order order',
    ({ arr, order, expected }) => {
      expect(radixSort(arr, order)).toEqual(expected)
    }
  )
})

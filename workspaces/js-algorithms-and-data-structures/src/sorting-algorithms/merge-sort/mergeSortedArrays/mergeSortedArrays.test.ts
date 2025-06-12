import { mergeSortedArrays } from './mergeSortedArrays'

describe('mergeSortedArrays', () => {
  it.each([
    {
      arr1: [1, 10, 50],
      arr2: [2, 14, 99, 100],
      order: 'asc' as const,
      expected: [1, 2, 10, 14, 50, 99, 100],
    },
    {
      arr1: [1, 3, 5],
      arr2: [0, 4],
      order: 'asc' as const,
      expected: [0, 1, 3, 4, 5],
    },
    {
      arr1: [1, 3],
      arr2: [2, 4, 5],
      order: 'asc' as const,
      expected: [1, 2, 3, 4, 5],
    },
    { arr1: [1, 3], arr2: [2], order: 'asc' as const, expected: [1, 2, 3] },
    { arr1: [1], arr2: [2, 3], order: 'asc' as const, expected: [1, 2, 3] },
    { arr1: [1], arr2: [2], order: 'asc' as const, expected: [1, 2] },
    { arr1: [], arr2: [2], order: 'asc' as const, expected: [2] },
    { arr1: [1], arr2: [], order: 'asc' as const, expected: [1] },
    { arr1: [], arr2: [], order: 'asc' as const, expected: [] },
    {
      arr1: [50, 10, 1],
      arr2: [100, 99, 14, 2],
      order: 'desc' as const,
      expected: [100, 99, 50, 14, 10, 2, 1],
    },
  ])(
    'returns $expected for $arr1 and $arr2 with $order order',
    ({ arr1, arr2, order, expected }) => {
      expect(mergeSortedArrays(arr1, arr2, order)).toEqual(expected)
    }
  )
})

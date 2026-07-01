import { mergeSort } from './mergeSort'

describe('mergeSort', () => {
  it.each([
    { arr: [8, 1, 12, 4], order: 'asc' as const, expected: [1, 4, 8, 12] },
    { arr: [5, 3, 4, 1, 2], order: 'asc' as const, expected: [1, 2, 3, 4, 5] },
    {
      arr: [1, 2, 3, -1, 4, 5],
      order: 'asc' as const,
      expected: [-1, 1, 2, 3, 4, 5],
    },
    { arr: [5, 4, 3, 2, 1], order: 'asc' as const, expected: [1, 2, 3, 4, 5] },
    { arr: [3, 4, 8, 9, 1], order: 'desc' as const, expected: [9, 8, 4, 3, 1] },
  ])(
    'returns $expected for $arr with $order order',
    ({ arr, order, expected }) => {
      expect(mergeSort(arr, order)).toEqual(expected)
    }
  )
})

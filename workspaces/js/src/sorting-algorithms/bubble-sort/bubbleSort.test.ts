import { bubbleSort } from './bubbleSort'

describe('bubbleSort', () => {
  it.each([
    { arr: [5, 3, 4, 1, 2], order: 'asc' as const, expected: [1, 2, 3, 4, 5] },
    {
      arr: [1, 2, 3, -1, 4, 5],
      order: 'asc' as const,
      expected: [-1, 1, 2, 3, 4, 5],
    },
    { arr: [5, 4, 3, 2, 1], order: 'asc' as const, expected: [1, 2, 3, 4, 5] },
    { arr: [1, 4, 5, 2, 3], order: 'desc' as const, expected: [5, 4, 3, 2, 1] },
  ])(
    'returns $expected for $arr with $order order',
    ({ arr, order, expected }) => {
      expect(bubbleSort(arr, order)).toEqual(expected)
    }
  )
})

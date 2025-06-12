import { selectionSort } from './selectionSort'

describe('selectionSort', () => {
  it.each([
    { arr: [5, 3, 4, 1, 2], order: 'asc' as const, expected: [1, 2, 3, 4, 5] },
    {
      arr: [1, 2, 3, -1, 4, 5],
      order: 'asc' as const,
      expected: [-1, 1, 2, 3, 4, 5],
    },
    { arr: [5, 4, 3, 2, 1], order: 'asc' as const, expected: [1, 2, 3, 4, 5] },
    { arr: [2, 3, 4, 5, 1], order: 'desc' as const, expected: [5, 4, 3, 2, 1] },
  ])(
    'returns $expected for $arr with $order order',
    ({ arr, order, expected }) => {
      expect(selectionSort(arr, order)).toEqual(expected)
    }
  )
})

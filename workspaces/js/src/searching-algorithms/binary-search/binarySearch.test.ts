import binarySearch from './binarySearch'

describe('binarySearch', () => {
  it.each([
    { arr: [1, 2, 3, 4, 5], value: 3, index: 2 },
    { arr: [1, 2, 3, 4, 5], value: 1, index: 0 },
    { arr: [1, 2, 3, 4, 5], value: 5, index: 4 },
    { arr: [1, 2, 3, 4, 5], value: 6, index: -1 },
    { arr: [1, 2, 3, 4, 5], value: 0, index: -1 },
  ])('should return $index for $value in $arr', ({ arr, value, index }) => {
    expect(binarySearch(arr, value)).toBe(index)
  })
})

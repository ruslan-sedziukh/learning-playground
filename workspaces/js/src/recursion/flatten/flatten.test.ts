import flatten from './flatten'

describe('flatten', () => {
  it.each([
    { arr: [1, 2, 3, [4, 5]], result: [1, 2, 3, 4, 5] },
    { arr: [1, [2, [3, 4], [[5]]]], result: [1, 2, 3, 4, 5] },
    { arr: [[1], [2], [3]], result: [1, 2, 3] },
    { arr: [[[[1], [[[2]]], [[[[[[[3]]]]]]]]]], result: [1, 2, 3] },
  ])('returns $result for $arr', ({ arr, result }) => {
    expect(flatten(arr)).toStrictEqual(result)
  })
})

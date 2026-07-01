import someRecursive from './someRecursive'

const isOdd = (val: number) => val % 2 !== 0

describe('someRecursive', () => {
  it.each([
    { arr: [1, 2, 3, 4], result: true },
    { arr: [4, 6, 8, 9], result: true },
    { arr: [4, 6, 8], result: false },
  ])('returns $result for $arr', ({ arr, result }) => {
    expect(someRecursive(arr, isOdd)).toBe(result)
  })
})

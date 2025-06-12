import { getDigit, getMaxDigitsNumber } from './utils/utils'

const sort = (
  arr: number[],
  position: number,
  maxDigitsNumber: number
): number[] => {
  const buckets = Array.from({ length: 10 }, (): number[] => [])

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i]
    const digit = getDigit(num, position)

    buckets[digit].push(num)
  }

  const result = buckets.flat()

  if (position < maxDigitsNumber - 1) {
    return sort(result, position + 1, maxDigitsNumber)
  }

  return result
}

export const radixSort = (
  arr: number[],
  order: 'asc' | 'desc' = 'asc'
): number[] => {
  if (arr.length === 0) {
    return arr
  }

  const positives = arr.filter((el) => el >= 0)
  const negatives = arr.filter((el) => el < 0)

  const sorted = [
    ...sort(negatives, 0, getMaxDigitsNumber(negatives)).reverse(),
    ...sort(positives, 0, getMaxDigitsNumber(positives)),
  ]

  return order === 'asc' ? sorted : sorted.reverse()
}

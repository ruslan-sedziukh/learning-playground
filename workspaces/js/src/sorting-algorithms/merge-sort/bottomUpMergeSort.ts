import { mergeSortedArrays } from './mergeSortedArrays/mergeSortedArrays'

const recursiveMerge = (arr: number[][], order: 'asc' | 'desc'): number[] => {
  const mergedArray: number[][] = []

  if (arr.length === 1) {
    return arr[0]
  }

  for (let i = 0; i < arr.length - 1; i = i + 2) {
    mergedArray.push(mergeSortedArrays(arr[i], arr[i + 1], order))
  }

  if (arr.length % 2 === 1) {
    mergedArray.push(arr[arr.length - 1])
  }

  return recursiveMerge(mergedArray, order)
}

export const bottomUpMergeSort = (arr: number[], order: 'asc' | 'desc') =>
  recursiveMerge(
    arr.map((el) => [el]),
    order
  )

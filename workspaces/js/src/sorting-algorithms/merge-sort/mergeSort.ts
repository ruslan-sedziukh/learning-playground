import { mergeSortedArrays } from './mergeSortedArrays/mergeSortedArrays'

export const mergeSort = (arr: number[], order: 'asc' | 'desc'): number[] => {
  if (arr.length <= 1) {
    return arr
  }

  let mid = Math.floor(arr.length / 2)

  let left = mergeSort(arr.slice(0, mid), order)
  let right = mergeSort(arr.slice(mid), order)

  return mergeSortedArrays(left, right, order)
}

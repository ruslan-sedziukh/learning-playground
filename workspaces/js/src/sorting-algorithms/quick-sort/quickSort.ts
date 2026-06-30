const swap = (arr: number[], i: number, j: number) => {
  return ([arr[i], arr[j]] = [arr[j], arr[i]])
}

const sort = (
  arr: number[],
  pivotIndex: number,
  rightIndex: number,
  order: 'asc' | 'desc'
) => {
  const orderCoefficient = order === 'asc' ? 1 : -1

  const initialRightPivotIndex = pivotIndex + 1
  let rightPivotIndex = initialRightPivotIndex

  // Replace elements to the left side
  for (let i = rightPivotIndex; i <= rightIndex; i++) {
    if ((arr[pivotIndex] - arr[i]) * orderCoefficient >= 0) {
      if (i > rightPivotIndex) {
        swap(arr, rightPivotIndex, i)
      }

      rightPivotIndex++
    }
  }

  swap(arr, pivotIndex, rightPivotIndex - 1)

  // Sort left part. Only if more then 1 swapped elements.
  if (rightPivotIndex - initialRightPivotIndex > 1) {
    sort(arr, pivotIndex, rightPivotIndex - 1, order)
  }

  // Sort right part. Only if more then one element was moved to left side.
  if (arr.length - rightPivotIndex > 1) {
    sort(arr, rightPivotIndex, rightIndex, order)
  }
}

export const quickSort = (arr: number[], order: 'asc' | 'desc' = 'asc') => {
  const sortedArr = [...arr]

  sort(sortedArr, 0, arr.length - 1, order)

  return sortedArr
}

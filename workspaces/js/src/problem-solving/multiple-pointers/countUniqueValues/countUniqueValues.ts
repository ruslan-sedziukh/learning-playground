/**
 * countUniqueValues accept sorted array and returns number of unique numbers
 */
export const countUniqueValues1 = (arr: number[]) => {
  if (arr.length === 0) {
    return 0
  }

  if (arr.length === 1) {
    return 1
  }

  let uniqueValues = 1

  let prevLeftValue = arr[0]
  let prevRightValue = arr[arr.length - 1]

  let leftIndex = 0
  let rightIndex = arr.length - 1

  while (true) {
    // Case when pointers are met
    if (rightIndex <= leftIndex) {
      // This is the case when both pointer point to same value and it appears first time
      if (
        arr[leftIndex] !== prevLeftValue &&
        arr[leftIndex] !== prevRightValue
      ) {
        uniqueValues++
      }

      break
    }

    // Case when pointers are not met, but there is no need to move further
    if (arr[leftIndex] === arr[rightIndex]) {
      if (
        arr[leftIndex] !== prevLeftValue &&
        arr[rightIndex] !== prevRightValue
      ) {
        uniqueValues++
      }

      break
    }

    // We should always check if another pointer does not meet this value
    if (arr[leftIndex] !== prevLeftValue && arr[leftIndex] !== prevRightValue) {
      uniqueValues++

      prevLeftValue = arr[leftIndex]
    }

    // We should always check if another pointer does not meet this value
    if (
      arr[rightIndex] !== prevRightValue &&
      arr[rightIndex] !== prevLeftValue
    ) {
      uniqueValues++

      prevRightValue = arr[rightIndex]
    }

    leftIndex++
    rightIndex--
  }

  return uniqueValues
}

export const tests = [
  {
    values: [1, 1, 1, 1, 1, 2],
    result: 2,
  },
  {
    values: [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13],
    result: 7,
  },
  {
    values: [1, 2],
    result: 2,
  },
  {
    values: [1, 1],
    result: 1,
  },
  {
    values: [],
    result: 0,
  },
  {
    values: [-2, -1, -1, 0, 1],
    result: 4,
  },
]

const swap = (arr: number[], i: number, j: number) => {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}

const insert = (arr: number[], i: number, order: 'asc' | 'desc') => {
  const orderCoefficient = order === 'asc' ? 1 : -1

  if (i === 1) {
    swap(arr, 1, 0)

    return
  }

  // j is equal to i - 2 because we already know the result of comparing it with i
  for (let j = i - 2; j >= 0; j--) {
    if (j === 0 && (arr[i] - arr[j]) * orderCoefficient < 0) {
      arr.splice(j, 0, arr[i])
      arr.splice(i + 1, 1)

      break
    }

    if ((arr[i] - arr[j]) * orderCoefficient >= 0) {
      arr.splice(j + 1, 0, arr[i])
      arr.splice(i + 1, 1)

      break
    }
  }
}

export const insertionSort = (arr: number[], order: 'asc' | 'desc' = 'asc') => {
  const sortedArr = [...arr]

  const orderCoefficient = order === 'asc' ? 1 : -1

  for (let i = 0; i < sortedArr.length - 1; i++) {
    if ((sortedArr[i + 1] - sortedArr[i]) * orderCoefficient < 0) {
      insert(sortedArr, i + 1, order)
    }
  }

  return sortedArr
}

// This is implementation of course author which I think is not efficient because he is
// replacing elements in array too often
export const insertionSort2 = (arr: number[], order: 'asc' | 'desc') => {
  const sortedArr = [...arr]

  const orderCoefficient = order === 'asc' ? 1 : -1

  for (let i = 1; i < sortedArr.length; i++) {
    let currentVal = sortedArr[i]
    let j = i - 1

    for (; j >= 0 && (sortedArr[j] - currentVal) * orderCoefficient > 0; j--) {
      sortedArr[j + 1] = sortedArr[j]
    }

    sortedArr[j + 1] = currentVal
  }

  return sortedArr
}

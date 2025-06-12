const swap = (arr: number[], i: number, j: number) => {
  return ([arr[i], arr[j]] = [arr[j], arr[i]])
}

export const selectionSort = (arr: number[], order: 'asc' | 'desc' = 'asc') => {
  const sortedArr = [...arr]

  const orderCoefficient = order === 'asc' ? 1 : -1

  for (let j = 0; j < sortedArr.length - 1; j++) {
    let minI = j
    let shouldSwap = false

    for (let i = j + 1; i <= sortedArr.length - 1; i++) {
      // Check if it is minimal value
      if ((sortedArr[minI] - sortedArr[i]) * orderCoefficient > 0) {
        minI = i

        shouldSwap = true
      }
    }

    // This is an important optimization to terminate earlier
    if (shouldSwap) {
      swap(sortedArr, j, minI)
    } else {
      break
    }
  }

  return sortedArr
}

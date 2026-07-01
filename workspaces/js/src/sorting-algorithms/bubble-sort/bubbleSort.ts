const swap = (arr: number[], i: number, j: number) => {
  return ([arr[i], arr[j]] = [arr[j], arr[i]])
}

export const bubbleSort = (arr: number[], order: 'asc' | 'desc' = 'asc') => {
  const sortedArr = [...arr]

  const orderCoefficient = order === 'asc' ? 1 : -1

  for (let j = sortedArr.length - 1; j > 0; j--) {
    let wasSwaped = false

    for (let i = 0; i < j; i++) {
      if ((sortedArr[i + 1] - sortedArr[i]) * orderCoefficient <= 0) {
        swap(sortedArr, i, i + 1)

        wasSwaped = true
      }
    }

    if (!wasSwaped) {
      break
    }
  }

  return sortedArr
}

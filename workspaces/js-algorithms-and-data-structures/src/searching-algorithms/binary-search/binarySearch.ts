function binarySearch(arr: number[], value: number) {
  let left = 0
  let right = arr.length - 1
  let middle = Math.round((arr.length - 1) / 2)

  while (arr[middle] !== value && right > left) {
    if (value > arr[middle]) {
      left = middle + 1
    } else {
      right = middle - 1
    }

    middle = left + Math.round((right - left) / 2)
  }

  return arr[middle] === value ? middle : -1
}

export default binarySearch

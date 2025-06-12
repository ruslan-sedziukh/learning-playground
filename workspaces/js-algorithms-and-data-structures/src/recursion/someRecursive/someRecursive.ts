const someRecursive = (
  arr: number[],
  callback: (val: number) => boolean
): boolean => {
  if (arr.length === 0) {
    return false
  }

  if (callback(arr[0])) {
    return true
  }

  return someRecursive(arr.slice(1, arr.length), callback)
}

export default someRecursive

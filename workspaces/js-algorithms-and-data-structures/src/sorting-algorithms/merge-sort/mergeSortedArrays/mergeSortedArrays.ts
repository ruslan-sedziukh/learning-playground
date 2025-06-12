/**
 * Merge two sorted arrays
 */
export const mergeSortedArrays = (
  arr1: number[],
  arr2: number[],
  order: 'asc' | 'desc' = 'asc'
) => {
  const mergedArray: number[] = []

  const orderCoefficient = order === 'asc' ? 1 : -1

  let arr1Index = 0
  let arr2Index = 0

  for (let i = 0; i < arr1.length + arr2.length; i++) {
    if (
      arr2Index >= arr2.length ||
      (arr2[arr2Index] - arr1[arr1Index]) * orderCoefficient >= 0
    ) {
      mergedArray.push(arr1[arr1Index])

      arr1Index++
    } else {
      mergedArray.push(arr2[arr2Index])

      arr2Index++
    }
  }

  return mergedArray
}

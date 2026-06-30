/**
 * compute the sum of values
 * @param arr - Array of numbers
 * @returns - Sum of all numbers in the array or 0 if the array is empty
 */
export const sumAll = (arr: number[]): number =>
  arr.length ? arr.reduce((acc, val) => acc + val) : 0

/**
 * compute the sum of even values
 * @param arr - array of numbers
 * @returns sum of all even numbers in the array or 0 if the array is empty
 */
export const sumEven = (arr: number[]): number =>
  arr.length
    ? arr.reduce((acc, val) => (val % 2 === 0 ? acc + val : acc), 0)
    : 0

/**
 * search for a target value in an array
 * @param arr - array of numbers
 * @param target - Value to search for
 * @returns true if the target value is found, false otherwise
 */
export const sequentialSearch = (arr: number[], target: number): boolean => {
  if (!arr.length) {
    return false
  }

  for (const el of arr) {
    if (+el === target) {
      return true
    }
  }

  return false
}

/**
 * search for a target value in a sorted array
 * @param arr - a sorted array of numbers
 * @param target - the value to search for
 * @returns true if the target value is found, false otherwise
 */
export const binarySearch = (
  arr: number[],
  target: number,
  left: number = 0,
  right: number = arr.length - 1
): boolean => {
  const middle = Math.round((right + left) / 2)

  if (arr[middle] === target || right <= left) {
    return arr[middle] === target
  }

  if (target > arr[middle]) {
    return binarySearch(arr, target, middle + 1, right)
  } else {
    return binarySearch(arr, target, left, middle - 1)
  }
}

/**
 * rotate an array k positions to the left
 * @param arr of numbers
 * @param k number of positions to rotate
 * @returns a new array with the values rotated k positions to the left
 *
 * Example:
 * rotateKLeft([1, 2, 3, 4, 5], 2) => [3, 4, 5, 1, 2]
 *
 * rotateKLeft([1, 2, 3, 4, 5], 6) => [2, 3, 4, 5, 1]
 */
export const rotateKLeft = (arr: number[], k: number): number[] => {
  const modulo = k % arr.length

  if (modulo === 0) {
    return arr
  }

  const rotatedArr = [...arr]

  for (let i = modulo; i > 0; i--) {
    rotatedArr.push(rotatedArr[0])
    rotatedArr.shift()
  }

  return rotatedArr
}

/**
 * create a wave array - arrange the array elements such that the element
 * at the odd indices are less than or equal to their neighboring elements
 * at the even indices
 *
 * @param arr - array of numbers
 * @returns a new array with the values in a wave pattern
 *
 * Example:
 * waveArray([8, 1, 2, 3, 4, 5, 6, 4, 2]) => [8, 1, 3, 2, 5, 4, 6, 2, 4 ]
 */
export const waveArray = (arr: number[]): number[] => {
  const tempArr = [...arr]

  for (let oddIndex = 1; oddIndex < tempArr.length; oddIndex += 2) {
    const indexByElement = {
      [tempArr[oddIndex - 1]]: oddIndex - 1,
      [tempArr[oddIndex]]: oddIndex,
      [tempArr[oddIndex + 1]]: oddIndex + 1,
    }

    const smallerEl = Math.min(
      tempArr[oddIndex - 1],
      tempArr[oddIndex],
      tempArr[oddIndex + 1] || Infinity // Infinity for the case when odd element is the last one in array
    )

    if (smallerEl !== tempArr[oddIndex]) {
      const smallerElIndex = indexByElement[smallerEl]

      ;[tempArr[smallerElIndex], tempArr[oddIndex]] = [
        tempArr[oddIndex],
        tempArr[smallerElIndex],
      ]
    }
  }

  return tempArr
}

/**
 * find maximum difference between the indices of two elements
 * @param arr - array of numbers
 * @returns - the maximum difference between the indices of two elements in the array such that the larger
 *
 * @description
 * Find the maximum difference between the indices of two elements such that the larger element
 * appears after the smaller element. The difference between j and i is the maximum among all
 * possible pairs of indices in the array. The element at index j is greater than the element at
 * index i i.e., arr[j] > arr[i].
 *
 * Example:
 * findIndexMaxDifference([33, 9, 10, 3, 2, 60, 30, 33, 1]) => 6
 */
export const findIndexMaxDifference = (arr: number[]): number => {
  let max = -1

  for (let i = 0; arr.length - 1 - i > max && i < arr.length - 1; i++) {
    for (let j = arr.length - 1; j > i; j--) {
      if (arr[j] > arr[i] && arr[j] - arr[i] > (max || 0)) {
        max = j - i

        break
      }
    }
  }

  return max
}

/**
 * 1. Go through each element and compare it to each element after it.
 *    - Start i from first element and j from last element for efficiency.
 * 2. If j element is bigger than i el and j - 1 is bigger than max assign max to j - 1.
 * 3. Return max after looping through all elements.
 *    - Can return earlier if max can be bigger any more. Add a check for this.
 */

/**
 *
 */

/**
 * merge two sorted arrays
 * @param arr1 - first sorted array
 * @param arr2 - second sorted array
 * @returns a new array with the values from arr1 and arr2 merged and sorted
 *
 * Example:
 * mergeArrays([1, 3, 5], [2, 4, 6]) => [1, 2, 3, 4, 5, 6]
 */
export const mergeSorted = (arr1: number[], arr2: number[]): number[] => {
  const mergedArr: number[] = []

  let arr1Index = 0
  let arr2Index = 0

  for (let i = 0; i < arr1.length + arr2.length; i++) {
    if (arr2Index === arr2.length || arr1[arr1Index] <= arr2[arr2Index]) {
      mergedArr.push(arr1[arr1Index])

      arr1Index++
    } else {
      mergedArr.push(arr2[arr2Index])

      arr2Index++
    }
  }

  return mergedArr
}

/**
 * find the missing number in an array of positive numbers
 * @param arr - array of positive numbers
 * @returns the missing number in the array or -1 if no number is missing
 *
 * Example:
 * findMissingNumber([1, 2, 3, 5, 6, 7, 8]) => 4
 */
export const findMissingNumber = (arr: number[]): number => {
  if (arr.length <= 1) {
    return -1
  }

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== 1) {
      return arr[i] + 1
    }
  }

  return -1
}

export type Data = {
  [name: string]: number
}

/**
 * build an object from the given names and values
 * @param names - array with names of the properties
 * @param values - array with values of the properties
 * @returns an object with the names and values
 *
 * Example:
 * buildObject(['a', 'b', 'c'], [1, 2, 3]) => { a: 1, b: 2, c: 3 }
 */
export const buildData = (names: string[], values: number[]): Data => {
  if (names.length != values.length) {
    throw new Error('Arrays length should be the same')
  }

  const data: Data = names.reduce((acc, name, i) => {
    acc[name] = values[i]

    return acc
  }, {} as Data)

  return data
}

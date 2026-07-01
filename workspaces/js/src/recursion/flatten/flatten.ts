type NestedNumberArray = (number | NestedNumberArray)[]

const fillFlatArr = (flatArr: number[], arr: NestedNumberArray) => {
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i]

    if (typeof el === 'number') {
      flatArr.push(el)
    } else {
      fillFlatArr(flatArr, el)
    }
  }
}

const flatten = (arr: NestedNumberArray): number[] => {
  const flatArr: number[] = []

  fillFlatArr(flatArr, arr)

  return flatArr
}

export default flatten

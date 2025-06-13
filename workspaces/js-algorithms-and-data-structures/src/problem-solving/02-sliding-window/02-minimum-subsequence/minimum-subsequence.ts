const getBackwardMinIndexes = ({
  str1,
  str2,
  startIndex,
  endIndex,
}: {
  str1: string
  str2: string
  startIndex: number
  endIndex: number
}): [number, number] => {
  for (
    let str1Index = endIndex, str2Index = str2.length - 1;
    str1Index >= startIndex;
    str1Index--
  ) {
    if (str1[str1Index] === str2[str2Index]) {
      if (str2Index === 0) {
        return [str1Index, endIndex]
      }

      str2Index--
    }
  }

  return [startIndex, endIndex]
}

export const minWindow = (str1: string, str2: string): string => {
  let outputStartIndex = 0
  let outputEndIndex = -1

  if (str2.length > str1.length) {
    return ''
  }

  let subSeqStart = 0

  // The goal of const's is to improve performance
  const str1Length = str1.length
  const str2LastIndex = str2.length - 1

  for (let str1Index = 0, str2Index = 0; str1Index < str1Length; str1Index++) {
    if (str1[str1Index] !== str2[str2Index]) {
      continue
    }

    // Start match
    if (str2Index === 0) {
      subSeqStart = str1Index

      str2Index++

      continue
    }

    // End match
    if (str2Index === str2LastIndex) {
      let outputLength = outputEndIndex - outputStartIndex + 1

      const [backwardMinStart, backwardMinEnd] = getBackwardMinIndexes({
        str1,
        str2,
        startIndex: subSeqStart,
        endIndex: str1Index,
      })

      const backwardMinLength = backwardMinEnd - backwardMinStart + 1

      if (outputLength === 0 || backwardMinLength < outputLength) {
        ;[outputStartIndex, outputEndIndex] = [backwardMinStart, backwardMinEnd]
        outputLength = outputEndIndex - outputStartIndex + 1
      }

      str1Index = str1Index - outputLength + 1
      str2Index = 0

      continue
    }

    // Other matches
    str2Index++
  }

  return str1.slice(outputStartIndex, outputEndIndex + 1)
}

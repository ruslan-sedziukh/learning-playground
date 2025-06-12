const naiveSubstringSearch = (str: string, pattern: string): number => {
  for (let i = 0; i < str.length; i++) {
    let j = 0

    while (j < pattern.length && pattern[j] === str[i + j]) {
      j++
    }

    if (j === pattern.length) {
      return i
    }
  }

  return -1
}

export default naiveSubstringSearch

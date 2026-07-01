/*
Statement

	Given two strings, s and t, find the minimum window substring in s, which has the following properties:

	It is the shortest substring of s that includes all of the characters present in t.

	It must contain at least the same frequency of each character as in t.

	The order of the characters does not matter here.

*/

const getStringFrequencyMap = (str: string) =>
  str.split('').reduce((acc, char) => {
    if (acc[char]) {
      acc[char]++
    } else {
      acc[char] = 1
    }

    return acc
  }, {} as Record<string, number>)

export const minWindowSubstring = (s: string, t: string): string => {
  const sLength = s.length
  const tLength = t.length

  if (tLength > sLength) {
    return ''
  }

  const tCharFrequencyMap = getStringFrequencyMap(t)
  const windowCharFrequencyMap: Record<string, number> = {}

  let windowStartIndex = s
    .split('')
    .findIndex((char) => tCharFrequencyMap[char])

  if (sLength - windowStartIndex < tLength) {
    return ''
  }

  let outputEndIndex = 0
  let outputStartIndex = windowStartIndex
  let charsMissedNum = Object.keys(tCharFrequencyMap).length

  for (let i = windowStartIndex; i < sLength; i++) {
    const char = s[i]

    if (!tCharFrequencyMap[char]) {
      continue
    }

    windowCharFrequencyMap[char] = (windowCharFrequencyMap[char] || 0) + 1

    if (windowCharFrequencyMap[char] === tCharFrequencyMap[char]) {
      charsMissedNum--

      if (charsMissedNum === 0) {
        outputEndIndex = i
      }
    }

    if (charsMissedNum > 0) {
      continue
    }

    // cut window tail
    for (
      let j = windowStartIndex;
      !tCharFrequencyMap[s[j]] ||
      windowCharFrequencyMap[s[j]] - 1 >= tCharFrequencyMap[s[j]];
      j++
    ) {
      windowCharFrequencyMap[s[j]]--
      windowStartIndex++
    }

    const windowLength = i - windowStartIndex + 1
    const outputLength = outputEndIndex - outputStartIndex + 1

    if (windowLength < outputLength) {
      outputEndIndex = i
      outputStartIndex = windowStartIndex
    }

    // terminate if its shortest possible
    if (outputLength === tLength) {
      break
    }
  }

  return s.slice(outputStartIndex, outputEndIndex + 1)
}

/*

There can be case when s don't have all the characters from t at all.

s: 'agbcba', t: 'abca', result: 'agbcba'
s: 'ag bcbaa', t: 'abca', result: 'cbaa'

Need to get all combinations of substrings?

Use sliding window technic. 
Have a registry to count frequency of characters in current window.  
Slide from beginning till the end. Add character to registry if it is in a t. 
Check if registry of a current window have all required characters. 
  - If it have save indexes if this window length is less then previous window length that meet requirements. 
  - Also check if it will have without first window character. If it will - increase window starting index by one.
  - Check length. Save indexes if this window length is less then previous window length that meet requirements. 
*/

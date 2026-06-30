/*
Statement
  Given a string s, find the length of the longest substring without repeating characters.
*/
export const findLongestSubstring = (s: string): number => {
  const windowChars: Record<string, number> = {}
  const sLength = s.length

  let windowStartIndex = 0
  let longestLength = 0

  for (let i = 0; i < sLength; i++) {
    const headChar = s[i]

    if (windowChars[headChar] !== undefined) {
      while (windowStartIndex <= windowChars[headChar]) {
        delete windowChars[s[windowStartIndex]]
        windowStartIndex++
      }
    }

    windowChars[headChar] = i

    longestLength = Math.max(longestLength, i - windowStartIndex + 1)
  }

  return longestLength
}

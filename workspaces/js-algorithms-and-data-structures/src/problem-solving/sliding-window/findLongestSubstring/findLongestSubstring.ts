/**
 * Write a function called findLongestSubstring, which accepts
 * a string and returns the length of the longest substring with
 * all distinct characters.
 */

export const findLongestSubstring = (str: string): number => {
  let maxSubStrLength = 0
  let subStrLength = 0

  let strCharRegistry: Record<string, number> = {}

  let i = 0

  while (i < str.length) {
    // Case when character is in registry
    if (
      Number.isInteger(strCharRegistry[str[i]]) &&
      i - strCharRegistry[str[i]] <= subStrLength
    ) {
      subStrLength = i - strCharRegistry[str[i]]

      strCharRegistry[str[i]] = i

      if (subStrLength > maxSubStrLength) {
        maxSubStrLength = subStrLength
      }

      i++
      continue
    }

    // Case when character is not in registry
    strCharRegistry[str[i]] = i
    subStrLength++
    i++

    if (subStrLength > maxSubStrLength) {
      maxSubStrLength = subStrLength
    }
  }

  return maxSubStrLength
}

// @ts-ignore
export const findLongestSubstringByAuthor = (str) => {
  let longest = 0
  let seen = {}
  let start = 0

  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    // @ts-ignore
    if (seen[char]) {
      // @ts-ignore
      start = Math.max(start, seen[char])
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1)
    // store the index of the next char so as to not double count
    // @ts-ignore
    seen[char] = i + 1
  }
  return longest
}

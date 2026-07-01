const getLongest = (
  s: string,
  k: number,
  direction: 'forward' | 'backward' = 'forward'
) => {
  const sLength = s.length

  let max = 0
  let replacements = 0
  let nextWindowIndex = 0
  let windowChar = direction === 'forward' ? s[0] : s[sLength - 1]
  let windowMax = 1

  const initialIndex = direction === 'forward' ? 1 : sLength - 2
  const isIterationValid = (i: number) =>
    direction === 'forward' ? i < sLength : i >= 0

  for (
    let i = initialIndex;
    isIterationValid(i);
    direction === 'forward' ? i++ : i--
  ) {
    if (s[i] === windowChar) {
      windowMax++

      continue
    }

    if (replacements < k) {
      if (replacements === 0) {
        nextWindowIndex = i
      }

      replacements++
      windowMax++
    } else {
      if (windowMax > max) {
        max = windowMax
      }

      replacements = 0
      windowChar = s[nextWindowIndex]
      i = nextWindowIndex
      windowMax = 1
    }
  }

  return windowMax > max ? windowMax : max
}

const newFunction = (s: string, k: number): number => {
  const sLength = s.length

  const charMap: Record<string, number> = {}

  let max = 0
  let start = 0

  let maxFrequency = 0

  for (let end = 0; end < sLength; end++) {
    const char = s[end]

    charMap[char] = (charMap[char] || 0) + 1

    maxFrequency = Math.max(charMap[char], maxFrequency)

    if (end - start + 1 - maxFrequency > k) {
      charMap[s[start]]--

      start++
    }

    max = Math.max(end - start + 1, max)
  }

  return max
}

export const longestRepeatingCharacterReplacement = (
  s: string,
  k: number
): number => {
  if (s.length === 0) {
    return 0
  }

  // return Math.max(getLongest(s, k), getLongest(s, k, 'backward'))
  return newFunction(s, k)
}

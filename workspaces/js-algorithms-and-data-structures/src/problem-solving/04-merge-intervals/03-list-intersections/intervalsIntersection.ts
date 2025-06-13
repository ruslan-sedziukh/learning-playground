import type { Interval } from '@types'

/*
Statement

	For two arrays of closed intervals given as input, intervalsA and intervalsB, where each interval has its own start and end time, write a function that returns the intersection of the two interval arrays.

	For example, the intersection of [3,8] and [5,10] is [5,8].

Examples

	intervalsA [1,4] [5,6] [7,9]
	intervalsB [3,5] [6,7] [8,9]
	intersection [3,4] [5,5] [6,6][7,7] [8,9]
	----------------------------------
	intervalsA [0,4] [5,7] [8,12] [13,15] [16,18]
	intervalsB [0,18]
	intersection [0,4] [5,7] [8,12] [13,15] [16,18]
	----------------------------------
*/
export const intervalIntersection = (
  intervalsA: Interval[],
  intervalsB: Interval[]
): Interval[] => {
  const result: Interval[] = []

  const intervalsALength = intervalsA.length
  const intervalsBLength = intervalsB.length

  let intervalA = intervalsA[0]
  let intervalB = intervalsB[0]

  let iA = 0
  let iB = 0

  while (iA + iB <= intervalsA.length + intervalsB.length - 2) {
    const aStart = intervalA[0]
    const aEnd = intervalA[1]

    const bStart = intervalB[0]
    const bEnd = intervalB[1]

    if (
      (aStart >= bStart && aStart <= bEnd) ||
      (bStart >= aStart && bStart <= aEnd)
    ) {
      result.push([
        aStart - bStart >= 0 ? aStart : bStart,
        aEnd - bEnd >= 0 ? bEnd : aEnd,
      ])
    }

    if (aEnd <= bEnd || iB >= intervalsBLength) {
      iA++
    } else if (bEnd <= aEnd || iA >= intervalsALength) {
      iB++
    }

    intervalA = iA < intervalsALength ? intervalsA[iA] : intervalA
    intervalB = iB < intervalsBLength ? intervalsB[iB] : intervalB
  }

  return result
}

export const intervalIntersectionByAdonis = (
  intervalsA: Interval[],
  intervalsB: Interval[]
): Interval[] => {
  const result: Interval[] = []

  let i = 0
  let j = 0

  const lenA = intervalsA.length
  const lenB = intervalsB.length

  while (i < lenA && j < lenB) {
    const [start1, end1] = intervalsA[i]
    const [start2, end2] = intervalsB[j]

    const maxStart = Math.max(start1, start2)
    const minEnd = Math.min(end1, end2)

    if (maxStart <= minEnd) {
      result.push([maxStart, minEnd])
    }

    if (end1 < end2) {
      i++
    } else {
      j++
    }
  }

  return result
}

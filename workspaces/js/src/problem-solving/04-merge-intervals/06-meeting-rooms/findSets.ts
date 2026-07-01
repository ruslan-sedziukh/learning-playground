import type { Interval } from '@types'
import { Heap } from '@lib/Heap'

/*
Statement

	We are given an input array of meeting time intervals, intervals, where each interval has a start time and an end time. Your task is to find the minimum number of meeting rooms required to hold these meetings.

	An important thing to note here is that the specified end time for each meeting is exclusive.

Examples

	Intervals [[2,8],[3,4],[3,9],[5,11],[8,20],[11,15]]
	Output 3:

	Meeting room 1 [[2,8],[8,20]]

	Meeting room 2 [[3,4],[5,11]]

	Meeting room 3 [[3,9],[11,15]]
	----------------------------------------------------
	Intervals [[1,7],[2,6],[3,7],[4,8],[5,8],[2,9],[1,8]]
	Output 7

	Meeting room 1 [[1,7]]

	Meeting room 2 [[2,6]]

	Meeting room 3 [[3,7]]

	Meeting room 4 [[4, 8]]

	Meeting room 5 [[5, 8]]

	Meeting room 6 [[2, 9]]

	Meeting room 7 [[1, 8]]
*/
const START = 0
const END = 1

export const findSets = (intervals: Interval[]): number => {
  return -1
}

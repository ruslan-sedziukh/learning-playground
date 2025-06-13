/*
Statement

		We are given a circular array of non-zero integers, nums, where each integer represents 	the number of steps to be taken either forward or backward from its current index. Positive values indicate forward movement, while negative values imply backward movement. When reaching either end of the array, the traversal wraps around to the opposite end.

		The input array may contain a cycle, which is a sequence of indexes characterized by the following:

		The sequence starts and ends at the same index.
		The length of the sequence is at least two.
		The loop must be in a single direction, forward or backward.

		Note: A cycle in the array does not have to originate at the beginning. It may begin from any point in the array.

		Your task is to determine if nums has a cycle. Return TRUE if there is a cycle. Otherwise return FALSE.

		Examples:
		 (index) 0  1  2
		 input: [3, 1, 2]
		 result: true

		 case 0: 0->0->0 not a valid cycle
		 case 1: 1->2->1 valid cycle
		 case 2: 2->1->2 valid cycle
		 -----------------------------------
	   (index)  0   1   2
		 input: [-2, -1, -3]
		 result: true

		 case 0:  0 -> 1 -> 0 valid cycle
	   case 1:  1 -> 0 -> 1 valid cycle
	   case 2:  2 -> 2   not a valid cycle
	   -----------------------------------
	   (index) 0  1   2   3
	   input: [2, 1, -1, -2]
	   result: false

		 case 0: 0->2->1->2  not a valid cycle (change direction)
		 case 1: 1->2->1     not a valid cycle
		 case 2: 2->1->2     not a valid cycle
		 case 3: 3->1->2->1  not a valid cycle
		 -----------------------------------
		 (index) 0   1  2  3
	   input: [3, -3, 1, 1]
	   result: true

	   case 0: 0->3->0  valid cycle
	   case 1: 1->2->3->0->3 not a valid cycle
	   case 2: 2->3->0->3  valid cycle
	   case 3: 3->0->3     valid cycle
*/
const getNextIndex = (currentIndex: number, nums: number[]) => {
  let nextIndex = currentIndex + nums[currentIndex]

  if (nextIndex >= nums.length) {
    while (nextIndex >= nums.length) {
      nextIndex = nextIndex - nums.length
    }
  } else if (nextIndex < 0) {
    while (nextIndex < 0) {
      nextIndex = nums.length + nextIndex
    }
  }

  return nextIndex
}

const getIsSameDirection = (start: number) =>
  start > 0
    ? (num1: number, num2 = num1) => num1 > 0 && num2 > 0
    : (num1: number, num2 = num1) => num1 < 0 && num2 < 0

const isCircular = ({
  start,
  slow,
  fast,
  nums,
  isSameDirection,
}: {
  start: number
  slow: number
  fast: number
  nums: number[]
  isSameDirection: (num1: number, num2: number) => boolean
}) => {
  return (
    start === fast &&
    nums[start] !== nums.length &&
    isSameDirection(nums[slow], nums[fast])
  )
}

export const circularArrayLoop = (nums: number[]) => {
  if (!nums.length) {
    return false
  }

  let start = 0

  let slow = getNextIndex(start, nums)
  let fast = getNextIndex(slow, nums)

  let isSameDirection = getIsSameDirection(nums[start])

  while (
    start < nums.length &&
    !isCircular({ start, slow, fast, nums, isSameDirection })
  ) {
    if (!isSameDirection(nums[slow], nums[fast]) || slow === fast) {
      start++

      slow = getNextIndex(start, nums)
      fast = getNextIndex(slow, nums)

      isSameDirection = getIsSameDirection(nums[start])
    } else {
      slow = getNextIndex(slow, nums)
      fast = getNextIndex(getNextIndex(fast, nums), nums)
    }
  }

  return isCircular({ start, slow, fast, nums, isSameDirection })
}

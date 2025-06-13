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
export const circularArrayLoop = (nums: number[]) => {
  const numsLen = nums.length

  for (let i = 0; i < numsLen; i++) {
    let slow = i
    let fast = i
    let valid = true

    while (valid) {
      [slow, valid] = nextIndex(slow, nums[slow], numsLen)

      if (!valid) {
				break
			}

      [fast, valid] = nextIndex(fast, nums[fast], numsLen)
      if (!valid) {
				break
			}

      [fast, valid] = nextIndex(fast, nums[fast], numsLen)
      if (!valid) {
				break
			}

      if (slow === fast) {
				return true
			}
    }
  }

  return false
}


type IndexResult = [number, boolean]

const nextIndex = (index: number, delta: number, size: number): IndexResult => {
  const changedDir = index * delta < 0

  let result = (index + delta) % size

  if (result < 0) {
		result += size
	}

  const selfCircle = index === result

  return [result, !changedDir && !selfCircle]
}

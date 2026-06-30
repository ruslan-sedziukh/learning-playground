# Merge Intervals Pattern

## Description

The Merge Intervals pattern is a common algorithmic technique used to merge overlapping intervals. An interval is represented as a pair of integers, [start, end], where start is the beginning of the interval and end is the end of the interval. Given a list of intervals, the goal is to merge all overlapping intervals into non-overlapping intervals.

## How it Works

__Sort the Intervals__: Sort the intervals by their start times. This ensures that intervals that can be merged will be adjacent to each other.

__Merge Overlapping Intervals__:

- Initialize a new list to store the merged intervals.

- Iterate through the sorted intervals:

- If the current interval overlaps with the last interval in the merged list:

  - Merge the two intervals by updating the end time of the last interval in the merged list to the maximum of the current interval's end time.

  - Otherwise, add the current interval to the merged list.

## When to Use it

The Merge Intervals pattern is applicable in various scenarios, including:

- __Meeting Room Scheduling__: Determining the minimum number of meeting rooms required to accommodate a given set of meetings.

- __Task Scheduling__: Optimizing task scheduling by merging overlapping tasks.

- __Calendar Events__: Merging overlapping calendar events.

- __Interval Queries__: Answering queries about intervals, such as finding the number of intervals that overlap with a given interval.

## Real-World Examples

__Meeting Room Scheduling__:

- Given a list of meeting start and end times, determine the minimum number of meeting rooms required.

- Sort the meetings by start time.

- Use a priority queue to track the end times of ongoing meetings.

- For each meeting, check the earliest ending meeting.

  - If the current meeting starts after the earliest ending meeting, reuse that room.

  - Otherwise, allocate a new room.

__Calendar Events__:
Given a list of calendar events, merge overlapping events to create a consolidated calendar.

- Sort the events by start time.

- Merge overlapping events by updating the end time of the earlier event.

## Further Study

For a deeper understanding and more advanced applications of the Merge Intervals pattern, consider exploring these resources:

- [LeetCode](https://leetcode.com/problems/merge-intervals/solution/)

- [GeeksforGeeks](https://www.geeksforgeeks.org/merging-intervals/)

- [YouTube Tutorials](https://www.youtube.com/watch?v=oNLayVyU1dc)

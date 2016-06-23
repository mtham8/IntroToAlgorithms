/* Lecture 1: Algorithmic Thinking and Peak Finding

Efficient procedures for solving large-scale problems.
Scalability: be able to track how our algorithms are going to do based on input-size.

Peak finder - one-dimensional version, stored in an array
ex. [a, b, c,   d,     e,      f,     g, h, i]
     1  2    (n/2-1)  (n/2)  (n/2+1)
Position 2 is a peak if and only if b >= a and b >= c
Position 9 is a peak if and only if i >= h

Problem: Find the peak if it exists
// start from left
// look at n/2 elements
// worst-case complexity: O(n)

Divide & Conquer
// look at n/2 position -- look at the left, look at the right

if a[n/2] < a[n/2 -1] then only look at left half (1 - n/2-1) for a peak
else if a[n/2] < a[n/2+1] then look at right half (n/2+1 - n) for a peak

*/

/*
You are given a positive integer n, it is guaranteed that n is even (i.e. divisible by 2).
You want to construct the array a of length n such that:

    The first n/2 elements of a are even (divisible by 2);
    the second n/2 elements of a are odd (not divisible by 2);
    all elements of a are distinct and positive;
    the sum of the first half equals to the sum of the second half.

Input: n (any even positive number)
output: print "NO". if there is no suitable answer for the given test case or "YES" in the first line and any suitable array a1,a2,…,,…,an satisfying conditions from the problem statement on the second line.
Test Case 1:
input: 2
output: "NO"
Test Case 2:
input: 8
output: 2 4 6 8 1 3 5 11
*/
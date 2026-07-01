# Original notes by Adonis

**Statement**

Given a string, dna, that represents a DNA subsequence, and a number k, return all the contiguous subsequences (substrings) of length k that occur more than once in the string. The order of the returned subsequences does not matter. If no repeated substring is found, the function should return an empty set.

The DNA sequence is composed of a series of nucleotides abbreviated as A, C, G, and T. For example, ACGAATTCCG is a DNA sequence. When studying DNA, it is useful to identify repeated sequences in it.

Examples:

    k = 3
    dna = GAGTCACAGTAGTTTCA

    seq1 = AGT
    sequence2 = TCA
    -----------------------
    k = 6
    dna = ATATATATATATATAT

    seq1 = ATATAT
    seq2 = TATATA
    -----------------------
    k = 6
    dna = AGAGCTCCAGAGCTTG

    seq1 = AGAGCT
    -----------------------
    k = 5
    dna = AGCTGAAAGCTTAGCTG

    seq1 = AGCTG


Steps to solve the problem:
	1. Iterate over the k-length substrings of the input string
	2. Store the hash of the current substring to keep the track of all unique strings
	3. If the hash of a substring has already been stored, the substring is repeated so we add it to the output
	4. When all substrings have been evaluated return the output

Use the Rabin-Karp algorithm for computing hash https://www.geeksforgeeks.org/rabin-karp-algorithm-for-pattern-searching/ that utilizes a sliding window with rolling hash for pattern matching using the formula:

    h = c1 * base^(k-1) + c2 * base^(k-2) + ... + ck * base^0

where h is the hash value, c1, c2, ..., ck are the coefficients of the characters in the substring, base is the base value, and k is the length of the substring.

the base value is 4 because there are 4 possible characters in the DNA sequence (A, C, G, T).


Suggestions:
- convert the dna string to an array of numbers using the mapping object and the powerOf4 function
- use the numbers array to compute the hash of the first k-length substring
- iterate over the string and update the hash value for each k-length substring
- store the hash value in a hash set
- if the hash value has already been stored, add the substring to the output
- create a hash value and a hash set  to store the hash values using the cov

# Theory

## Idea

This is substring searching algorithm.

**Basic idea**

Idea is to compare hash before comparing characters to decrease number of comparisons. Calculate hash for each substring and compare substrings only of hash is the same. We should specify numeric value for each character - *coefficient*. This should be decided at the beginning. 

**Calculate hash issue**

Hash should be the same for equal substrings. But also don't match other substrings.

We can just calculate hash as a sum of character coefficients. But in this case it is highly possible that a hash for substrings would match when substrings are actually not the same. And we will do comparisons more often which will slow down the algorithm. So we need better formula for the hash to make it more unique. 

[Video explanation of hash function](https://www.youtube.com/watch?v=qQ8vS2btsxI)

Why do we need `powerOf4`? Why cant we just use values from `mapping`?


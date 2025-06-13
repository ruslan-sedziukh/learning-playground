# Original description

**Statement**

Given a string s and an integer k, find the length of the longest substring in s, where all characters are identical, after replacing, at most, k characters with any other lowercase English character.

**Examples**

```javascript
longestRepeatingCharacter('aabccbb', 2) returns 5
longestRepeatingCharacter('abbcb', 1) returns 4
longestRepeatingCharacter('abccde', 1) returns 3  
```

# Solution 

How to achieve?

- Iterate through characters from start till the end one substring by another.
- If next character is different - replace it with previous character. 
- When k replaces happens and new character met - compare substring length and write it if it is longer then previous one. 
- Start checking new substring from the character that was replaced first on previous substring. 

Do the same from end to start to cover case like:
```javascript
longestRepeatingCharacter('abcc', 2)
```
which should be 4, but previous algorithm will return only 3.  
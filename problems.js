// 1768. Merge Strings Alternately
// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

 

// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r
// Example 2:

// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b 
// word2:    p   q   r   s
// merged: a p b q   r   s
// Example 3:

// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.
// word1:  a   b   c   d
// word2:    p   q 
// merged: a p b q c   d
 

// Constraints:

// 1 <= word1.length, word2.length <= 100
// word1 and word2 consist of lowercase English letters.

var mergeAlternately = function(word1, word2) {
    let i = 0, j = 0
    result = ''

    while (i < word1.length || j < word2.length) {
        if (i < word1.length) {
            result += word1[i]
            i++
        }
        if (j < word2.length) {
            result += word2[j]
            j++
        }
    }

    return result
};     

// 1071. Greatest Common Divisor of Strings

// For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"
// Example 3:

// Input: str1 = "LEET", str2 = "CODE"
// Output: ""
 

// Constraints:

// 1 <= str1.length, str2.length <= 1000
// str1 and str2 consist of English uppercase letters.

// Euclidean algorithm
var gcd = function(a, b) {
    if (b === 0) return a
    return gcd(b, a % b)
}

// var gcd = function(a,b) {
//     while(b !== 0) {
//         let temp = b
//         b = a % b
//         a = temp
//     }

//     return a
// }


var gcdOfStrings = function(str1, str2) {
    // if they don't have the same prefix, return an empty string
    if (str1 + str2!== str2 + str1) return ''
     
    // find the gcd of the two lengths
    const gcdlength = gcd(str1.length, str2.length)

    // return the substring of str1 that is the gcd of the two lengths
    return str1.substring(0, gcdlength)
};

// 1431. Kids With the Greatest Number of Candies

// There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

// Note that multiple kids can have the greatest number of candies.

var kidsWithCandies1 = function(candies, extraCandies) {
    const maxCandies = Math.max(...candies)
    const result = []
    
    for(i = 0; i < candies.length; i++) {
        if (candies[i] === maxCandies || candies[i] + extraCandies >= maxCandies) {
            result.push(true)
        } else {
            result.push(false)
        }
    }

    return result
};

var kidsWithCandies = function(candies, extraCandies) {
    const maxCandies = Math.max(...candies)

    return candies.map(candy => candy + extraCandies >= maxCandies)
};

// 605. Can Place Flowers

// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

 

// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false
 

// Constraints:

// 1 <= flowerbed.length <= 2 * 104
// flowerbed[i] is 0 or 1.
// There are no two adjacent flowers in flowerbed.
// 0 <= n <= flowerbed.length

var canPlaceFlowers = function(flowerbed, n) {
    let newFlowers = 0

    for(i=0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {

            const prev = i === 0 || flowerbed[i - 1] === 0
            const next = i === flowerbed.length - 1 || flowerbed[i + 1] === 0
            if (prev && next) {
                newFlowers++
                flowerbed[i] = 1
                if (newFlowers >= n) return true
            }
        }
    }
    
    console.log(newFlowers)
    return newFlowers === n
};

// 345. Reverse Vowels of a String
// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

// Example 1:

// Input: s = "IceCreAm"

// Output: "AceCreIm"

// Explanation:

// The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

// Example 2:

// Input: s = "leetcode"

// Output: "leotcede"

 

// Constraints:

// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.

var reverseVowels = function(s) {
    let i = 0
    let j = s.length - 1
    const vowels = new Set(["a","e","i","o","u", "A", "E", "I", "O", "U"])
    let arr = s.split("")

    while (i < j) {
        while (i < j && !vowels.has(arr[i])) {
            i++
        }

        while (i < j && !vowels.has(arr[j])) {
            j--
        }

        [arr[i], arr[j]] = [arr[j], arr[i]]

        i++
        j--
    }

    return arr.join('')
};

// 151. Reverse Words in a String
// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

 

// Example 1:

// Input: s = "the sky is blue"
// Output: "blue is sky the"
// Example 2:

// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.
// Example 3:

// Input: s = "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
 

// Constraints:

// 1 <= s.length <= 104
// s contains English letters (upper-case and lower-case), digits, and spaces ' '.
// There is at least one word in s.

var reverseWords = function(s) {
    const result = []
    const arr = s.trim().split(" ")

    for (i=arr.length - 1; i >= 0; i--) {
        if (arr[i] !== "") result.push(arr[i])
    }

    return result.join(" ")
};

// 238. Product of Array Except Self
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]
 

// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 

// Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

var productExceptSelf = function(nums) {
    const result = []
    let leftProduct = 1
    let rightProduct = 1

    for (i=0; i < nums.length; i++) {
        result[i] = leftProduct
        leftProduct *= nums[i]
    }

    for (i=nums.length - 1; i >= 0; i--) {
        result[i] *= rightProduct
        rightProduct *= nums[i]
    }

    return result
};


// 334. Increasing Triplet Subsequence
// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

 

// Example 1:

// Input: nums = [1,2,3,4,5]
// Output: true
// Explanation: Any triplet where i < j < k is valid.
// Example 2:

// Input: nums = [5,4,3,2,1]
// Output: false
// Explanation: No triplet exists.
// Example 3:

// Input: nums = [2,1,5,0,4,6]
// Output: true
// Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.
 

// Constraints:

// 1 <= nums.length <= 5 * 105
// -231 <= nums[i] <= 231 - 1

var increasingTriplet = function(nums) {
    let first = Infinity;
    let second = Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= first) {
            first = nums[i]; 
        } else if (nums[i] <= second) {
            second = nums[i]; 
        } else {
            return true;
        }
    }
    
    return false; 
};

// 443. String Compression

// Given an array of characters chars, compress it using the following algorithm:

// Begin with an empty string s. For each group of consecutive repeating characters in chars:

// If the group's length is 1, append the character to s.
// Otherwise, append the character followed by the group's length.

// The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

// Note that group lengths that are 10 or longer will be split into multiple characters in chars.

// After you are done modifying the input array, return the new length of the array.

// You must write an algorithm that uses only constant extra space.

// Example 1:

// Input: chars = ["a","a","b","b","c","c","c"]
// Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
// Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".
// Example 2:

// Input: chars = ["a"]
// Output: Return 1, and the first character of the input array should be: ["a"]
// Explanation: The only group is "a", which remains uncompressed since it's a single character.
// Example 3:

// Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
// Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
// Explanation: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".
 

// Constraints:

// 1 <= chars.length <= 2000
// chars[i] is a lowercase English letter, uppercase English letter, digit, or symbol.

var compress = function(chars) {
    let write = 0; // Position where we write compressed characters
    let read = 0; // Position where we read characters

    while (read < chars.length) {
        let char = chars[read]; // Current character 0
        let count = 0; // Count consecutive characters

        // count the number of consecutive characters
        while (read < chars.length && chars[read] === char) {
            read++;
            count++;
        }

        // write the character
        chars[write] = char;
        write++;

        // if the count is greater than 1, write the count
        if (count > 1) {
            for (let digit of String(count)) {
                chars[write] = digit;
                write++;
            }
        }
    }

    // return the new length of the array
    return write;
};
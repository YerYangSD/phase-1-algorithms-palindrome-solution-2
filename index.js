function isPalindrome(word) {
  // Write your algorithm here
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++){
    const endIndex = word.length - 1 - startIndex;
    if (word[startIndex] !== word [endIndex]){
      return false;
    }
    return true;
  }
}

/* 
  Add your pseudocode here
  iterate from the beginning to the middle
    check each letter to the corresponding letter from the end
      if any letters don't match, return false
      return true
  */
 
 /*
 Add written explanation of your solution here
 Iterate from the beginning of the string to the middle of the string.
 Compare the letter we're iterating over to the corresponding letter at 
 the end of the string. If the letter don't match, return false.
 If we reach the middle, and all the letters match, return true.
 For example, for the word "robot", the first letter is "r" and the last 
 letter is "t", so I should return false. For the word "racecar", the first 
 and last letter is "r", the second and the second to the last letter is "a", 
 the third letter and the third to the last letter is "c", and the middle is "e", 
 so I should return true. 
 Example:
 r  a  c  e  c  a  r
 0  1  2  3  4  5  6
 i                 j

 r  a  c  e  c  a  r
 0  1  2  3  4  5  6
    i           j

 r  a  c  e  c  a  r
 0  1  2  3  4  5  6
       i     j

 r  a  c  e  c  a  r
 0  1  2  3  4  5  6
         i j
 None checks out to be false, so return true.
 */

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome(""));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("adam"));
}

module.exports = isPalindrome;

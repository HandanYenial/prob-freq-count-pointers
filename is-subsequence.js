// add whatever parameters you deem necessary
/**isSubsequence
Write a function called isSubsequence which takes in two strings and 
checks whether the characters in the first string form a subsequence 
of the characters in the second string. In other words, the function 
should check whether the characters in the first string appear somewhere 
in the second string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
Constraints:

Time Complexity - O(N + M)

 */
function isSubsequence(str1, str2) {//accepts two strings
    let st1Idx =0; //set the index of the first string to 0
    let st2Idx =0; //set the index of the second string to 0

    if (!str1) { //if the first string is empty
        return true;
    }
    while(str2Idx < str2.length){ //while str2 is not empty
        if(str2[str2Idx] === str1[st1Idx]){ //if the first string is equal to the second string
            st1Idx += 1; //increment the first string index
        }
        if(str1Idx === str1.length){ //if the first string index is equal to the first string length
            return true; //return true
        }
        str2Idx += 1; //increment the second string index
    }
    return false;
}

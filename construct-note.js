// add whatever parameters you deem necessary
/**
 * constructNote
Write a function called constructNote, which accepts two strings,
a message and some letters. The function should return true if the message can 
be built with the letters that you are given; otherwise, it should return false.

Assume that there are only lowercase letters and no space or special characters 
in both the message and the letters.

Constraints:

Time Complexity: O(M + N) - If M is the length of message and N is the length of letters:

Examples:

constructNote('aa', 'abc') // false
constructNote('abc', 'dcba') // true
constructNote('aabbcc', 'bcabcaddff') // true

 */
/**1. function constructNode(string1, string2){
 *  return true ==> if string1 can be built with the letters in string2
 *  return false ==> if string1 cannot be built with the letters in string2
 * } */
function constructNote(str1, str2) {
    //1. Split the string to letters string1.split("")
    //2.Sort the letters : string1.split("").sort()
    //3.Join the letters : string1.split("").sort().join("")
    //4.Do the same 1-2-3 for string2
    //5. Compare the two strings: string1 should contain string2.

    //1. Split the string to letters string1.split("")
    let message =  str2.split("").sort().join("");
    let letters = str1.split("").sort().join("");

    if (message.includes(letters)){
        return true;
    } else{
        return false;
    }
}

//Optimization: Using frequency counter
function constructNote2(message, letters){
    let lettersFreq = {}; //to count how many letters in str1 {a: 2, b: 1, c: 1}
    let messageFreq = {}; //to count how many letters in str2 {a: 1, b: 1, c: 1}

    //build up the frequency counter for letters
    for(let letter of letters){
        lettersFreq[letter] = lettersFreq[letter] + 1 || 0; 
        //if letter is not in the object, it will be 0
    }
    //build up the frequency counter for message
    for(let letter of message){
        messageFreq[letter] = messageFreq[letter] + 1 || 0;
        //if letter is not in the object, it will be 0
    }
    //compare the two objects
    for(let letter in messageFreq){
        if(!lettersFreq[letter]){ //if letter is not in lettersFreq
            return false;
        }
        if(messageFreq[letter] > lettersFreq[letter]){ 
            //if the letter is in lettersFreq but the frequency is not enough
            return false;
        }
    }
    return true;
}

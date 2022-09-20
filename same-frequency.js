// add whatever parameters you deem necessary
/**sameFrequency
Write a function called sameFrequency. Given two positive integers,
 find out if the two numbers have the same frequency of digits.

Examples:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false */
function sameFrequency(int1, int2) {//accepts 2 integers
    //1. convert integers to strings
    let str1 = int1.toString();
    let str2 = int2.toString();
    //2. check if the length of the strings are the same
    if(str1.length !== str2.length){
        return false;
    }
    //3. create an object to store the frequency of the numbers
    let freq1 = {};
    let freq2 = {};
    //4. loop through the strings and add the numbers to the object
    for(let i=0; i<str1.length; i++){
        freq1[str1[i]] = (freq1[str1[i]] || 0) + 1;
    }
    for(let j=0; j<str2.length; j++){
        freq2[str2[j]] = (freq2[str2[j]] || 0) + 1;
    }
    //5. compare the objects
    for(let key in freq1){
        if(freq1[key] !== freq2[key]){
            return false;
        }
    }
    return true;
}

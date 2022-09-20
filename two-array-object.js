// add whatever parameters you deem necessary

/**
 * twoArrayObject
Write a function called twoArrayObject which accepts two arrays of varying lengths.
The first array consists of keys and the second one consists of values. Your function 
should return an object created from the keys and values. If there are not enough values, 
the rest of keys should have a value of null. If there not enough keys, just ignore the rest
of values.

Examples:

twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3]) // {'a': 1, 'b': 2, 'c': 3, 'd': null}
twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4]) // {'a': 1, 'b': 2, 'c': 3}
twoArrayObject(['x', 'y', 'z'], [1, 2]) // {'x': 1, 'y': 2, 'z': null}
 */
/**
 * 1. function will accept 2 arrays in different lengths: (arr1, arr2) and arr1.length !== arr2.length
 * 2. arr1=[a,b,c,d] arr2=[1,2,3]
 * 3. functon return an object{key:value}--> {'a':1, 'b':2, 'c':3, 'd':null}
 *    if arr1.length > arr2.length ---> ignore the other values
 *    if arr1.length < arr2.length ---> the value will be null
 */
function twoArrayObject(arr1, arr2) {
    //create an empty object
    let obj = {};
    //loop through arr1
    for (let i = 0; i < arr1.length; i++) {
        //if arr2[i] exists, add to the object
        if (arr2[i]) { //if arr2 exists then
            obj[arr1[i]] = arr2[i]; // add to the object
        } else {
            //if arr2[i] does not exist, add null to the object
            obj[arr1[i]] = null;
        }
    }
    return obj;
}


// add whatever parameters you deem necessary

/** averagePair
Write a function called averagePair. Given a sorted array of integers and a target average,
 determine if there is a pair of values in the array where the average of the pair equals 
 the target average. There may be more than one pair that matches the average target.

Constraints:

Time Complexity: O(N)

Examples:

averagePair([1, 2, 3], 2.5); // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([], 4); // false*/

/**
 * 1. function accept two parameters : sorted array, target average(first+second)/2
 *    array =[1,2,3] average array[i]+array[i+1]/2
 * 2. 
 */

function averagePair(arr , target) {
    //for loop
    for (let i=0; i<arr.length; i++){
        for(let j= i+1; j<arr.length; j++){
            if(arr[i]+arr[j]/2 === target){
                return true;
            } 
        }
        return false;
    }
}
//Optimization: Using multiple pointers
function averagePair2(arr,target){ //arr=[left,1,2,3,4,5,6,right]
    let left = 0;
    let right = arr.length -1;

    while(left<right){
        let average = (arr[left] + arr[right]/2);
        if(average === target){
            return true;
        } else if ( average === target){
            right --;
        } else {
            left ++;
        }
    }
    return false;
}

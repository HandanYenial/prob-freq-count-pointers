// add whatever parameters you deem necessary

/**countPairs
Given an array of integers, and a number, find the number of pairs of integers
in the array whose sum is equal to the second parameter. You can assume that there 
will be no duplicate values in the array.

Examples:

countPairs([3,1,5,4,2], 6) // 2 (1,5 and 2,4)
countPairs([10,4,8,2,6,0], 10) // 3 (2,8, 4,6, 10,0)
countPairs([4,6,2,7], 10) // 1 (4,6)
countPairs([1,2,3,4,5], 10) // 0
countPairs([1,2,3,4,5], -3) // 0
countPairs([0,-4],-4) // 1
countPairs([1,2,3,0,-1,-2],0) // 2 */
/**
 *1. create a counter variable
    *2. create a for loop to iterate through the array
    *3. create a second for loop to iterate through the array
    *4. if the sum of the two numbers is equal to the second parameter
        *5. increment the counter
    *6. return the counter

 */
function countPairs(arr, num) {
    let counter = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === num){
                counter += 1;
            }
        }
    }
    return counter;
}

function countPairs2(arr,num){
    arr.sort(function(a,b){
        return a-b;
    })
    let count = 0;
    let left = 0;
    let right = arr.length - 1;

    while(left<right){
        let sum = arr[left] + arr[right];
        if(sum === num){
            count++;
            left++;
            right--;
        }else if(sum < num){
            left++;
        }else{
            right--;
        }
    }
    return count;
}
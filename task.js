//  maths alghoritms
// 1. fibonacci sequence



function fibonacci(n){
    const fib = [0,1]
    for(let i = 2; i < n; i++){
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib
}
console.log(fibonacci(2))//[0,1]
console.log(fibonacci(3))//[0,1,1]

console.log(fibonacci(7))//[0,1,1,2,3,5,8]

// JavaScript Algorithms - 16 - Binary Search
// function binarySearch(arr, target){
//     let leftIndex = 0
//     let rightIndex = arr.length - 1
//     while(leftIndex <= rightIndex){
//         let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
//         if(target === arr[middleIndex]){
//             return middleIndex
//         }
//         if(target < arr[middleIndex]){
//             rightIndex = middleIndex - 1
//         }else{
//             leftIndex = middleIndex + 1
//         }
//     }
//     return -1
// }
// console.log(binarySearch([-5,2,4,6,10], 10)) //4
// console.log(binarySearch([-5,2,4,6,10], 6)) //3
// console.log(binarySearch([-5,2,4,6,10], 20)) //-1
// // JavaScript Algorithms - 15 - Linear Search  time complexity
// function linearSearch(arr, target){
//     for(let i = 0; i < arr.length;i++){
//         if(arr[i] === target){
//             return i
//         }
//     }
//     return -1
// }
// console.log(linearSearch([-5,2,10,4,6], 10))//2
// console.log(linearSearch([-5,2,10,4,6], 6))//4
// console.log(linearSearch([-5,2,10,4,6], 20))//-1
// JavaScript Algorithms - 18 - Recursive Binary Search
// function recursiveBinarySearch(arr, target){
//     return search(arr, target,0, arr.length - 1) 
// }
// function search(arr,target, leftIndex, rightIndex){
//     if(leftIndex > rightIndex){
//         return - 1
//     }
//     let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
//     if(target === arr[middleIndex]){
//         return middleIndex
//     }
//     if(target < arr[middleIndex]){
//         return search(arr,target,leftIndex, middleIndex - 1)
//     }else{
//         return search(arr,target, middleIndex + 1, rightIndex)
//     }
// }
// console.log(recursiveBinarySearch([-5,2,4,6,10], 10))//4
// console.log(recursiveBinarySearch([-5,2,4,6,10], 6))//3
// console.log(recursiveBinarySearch([-5,2,4,6,10], 20))//-1

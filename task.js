// linear search
// let arr = [20,42,34,23,12,3,5,7,21]
// function linearSearch(arr,target){
//     for(let i = 0;i < arr.length ;i++){
//         if(arr[i] === target){
//             return i
//         }
//     }
//     return -1
// }
// console.log(linearSearch(arr,21))
// binary search
// let arr = [2,4,6,8,10,12,14]
// function binarySearch(arr,target){
//     let low = 0
//     let high = arr.length - 1
//     while(low <= high){
//         let mid = Math.floor((low + high) / 2)
//         if(arr[mid] === target){
//             return mid
//         }else if(arr[mid] > target){
//             high = high - 1
//         }else{
//             low = low + 1
//         }
//     }
//     return -1
// }
// console.log(binarySearch(arr,10))
//bubble sort
// let arr = [10,1,2,3,5,4,9,8]

// for(let i = 0;i<arr.length-1;i++){
//     for(let j = 0;j<arr.length - 1 - i;j++){
//         if(arr[j] > arr[j+1]){
//             let temp = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1] = temp
//         }
//     }
// }
// console.log(arr)

// selection sort
// let arr = [20,6,4,67,45,10,9,4]  
// function selectionSort(arr){
//     for(let i = 0;i<arr.length-1;i++){
//         let maxIndex = 0
//         for(let j = 1;j<arr.length-i;j++){
//             if(arr[j] > arr[maxIndex]){
//                 maxIndex = j
//             }
//         }
//         let temp = arr[maxIndex]
//         arr[maxIndex] =  arr[arr.length -i -1]
//         arr[arr.length -i-1] = temp
//     }
// }
// selectionSort(arr)
// console.log(arr)

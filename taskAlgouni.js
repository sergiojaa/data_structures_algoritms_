// linear search
// const arr = [2,5,7,8,4,3,1,]
// function linearSearch(arr,target){
//     for(let i = 0;i<arr.length;i++){
//         if(target === arr[i]){
//             return i
//         }
//     }
//     return -1
// }
// console.log(linearSearch(arr,1))
// console.log(linearSearch([],2))
//binary search

// const arr = [2,4,6,8,10,12,14,16,18,20,22]
// function binarySearch(arr,target){
//     let low = 0
//     let high = arr.length - 1
//     while(low <= high){
//         const mid = Math.floor((low + high) / 2)
//         if(arr[mid] === target){
//             return mid
//         }else if(arr[mid] > target){
//             high = mid - 1
//         }else{
//             low = mid + 1
//         }
//     }
// }
// console.log(binarySearch(arr,18))

//bubble sort
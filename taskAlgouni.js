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
// const arr = [1, 3, 5, 7, 9]
// function binarySearch(arr,target){
//     let left = 0       //  pirveli index  anu 1 razec dgas
//     let right = arr.length - 1   //bolo index anu 9 razec dgas
//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2); // Mid index

//         if (arr[mid] === target) {
//             return mid; // Target found
//         } else if (arr[mid] > target) {
//             right = mid - 1; // Search left half
//         } else {
//             left = mid + 1; // Search right half
//         }
//     }

//     return -1; // Target not found
   
// }

// console.log(binarySearch(arr,5))
const arr = [2,4,6,8,10,12,14,16,18,20,22]
function binarySearch(arr,target){
    let low = 0
    let high = arr.length - 1
    while(low <= high){
        let mid = Math.floor((low + high) / 2)
    }
    
}
console.log(binarySearch(arr,14))
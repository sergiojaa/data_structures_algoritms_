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
// let arr = [10,5,7,3,20,15,17,50]
// for(let i = 0; i < arr.length - 1;i++){  // indexs itvlis
//     for(let j = 0;j<arr.length-1;j++){ // რიცხვების დალუპვა რო მერე შევადაროთ
        
//         if(arr[j] > arr[j+1]){
//             let temp = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1] = temp
//         }
//     }
// }
// console.log(arr)
// linear araa maincdamainc rekomendirebuli,radgan tavidan bolomde
//uvlis masivs da tu target bolos aris did dros moandomebs
//roca did data structurastan mogviwevs mushaoba cudi prakikaa mitumeres
//binary is better
const arr = [2,4,3,5,7,8,]
function linearSearch(arr,target){
    for(let i = 0;i<arr.length;i++){
        if(target === arr[i]){
            return i
        }
    }
    return -1
}
console.log(linearSearch(arr,7))
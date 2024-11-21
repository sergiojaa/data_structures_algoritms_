//  pirveli lekciis algoritmebi
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
// let arr = [10,1,2,3,5,4,9,8]
// for(let i = 0; i < arr.length - 1;i++){  // indexs itvlis
//     for(let j = 0;j < arr.length - 1 - i ;j++){ // რიცხვების დალუპვა რო მერე შევადაროთ
        
//         if(arr[j] > arr[j+1]){
//             let temp = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1] = temp
//         }
//     }
// }
// console.log(arr)

// let arr = [10,1,2,3,5,4,9,8]
// for(let i = 0; i < arr.length - 1;i++){
//     for(let j = 0;j < arr.length - 1 - i;j++){
//         if(arr[j] > arr[j+1]){
//             let temp = arr[j]
//             arr[j] = arr[j+1]
//             arr[j+1] = temp
//         }
//     }
// }
// console.log(arr)

//selection sort   // titoeul pathze marcxnidan marjvniv modzraobs
// da kvelaze did ricxvs poulobs da ucvlis adgils ricxvebs da
//kvelaze didi ricxvi daismeba bolo adgilze.
// cvlads vkmnit maxIndex sadac udides ricxvs vinaxavt
//gareta cikli pathebistvis, shignita masivis elementeis sheesaadreblad
let arr = [20,6,4,67,45,10,9,4]  
function selectionSort(arr){
    for(let i = 0;i<arr.length-1;i++){
        let maxIndex = 0
        for(let j = 1;j<arr.length-i;j++){
            if(arr[j] > arr[maxIndex]){
                maxIndex = j
            }
        }
        let temp = arr[maxIndex]
        arr[maxIndex] =  arr[arr.length -i -1]
        arr[arr.length -i-1] = temp
    }
}
selectionSort(arr)
console.log(arr)

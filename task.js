// es avxsnat.danarcheni top 100%
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

function recursiveBiarySearch(arr,target){
    return search(arr,target, 0, arr.length-1)
}
function search(arr,target,leftIndex,rightIndex){
    if(leftIndex > rightIndex){
        return -1
    }
    let middleIndex = Math.floor((leftIndex + rightIndex  ) /2)
    if(target === arr[middleIndex]){
        return middleIndex
    }
    if(target < arr[middleIndex]){
       return search(arr,target,leftIndex,middleIndex -1)
    }else{
       return search(arr,target,middleIndex+1,rightIndex  )
    }

}
console.log(recursiveBiarySearch([-5,2,4,6,10],10)) //4
console.log(recursiveBiarySearch([-5,2,4,6,10],6)) //3
console.log(recursiveBiarySearch([-5,2,4,6,10],20)) //-1
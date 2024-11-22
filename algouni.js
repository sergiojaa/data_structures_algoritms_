// alghoritm - წესების ერთობლიობა რომელიც გამოიყენება რომ output მივიღოთ 
//მიღებული input-დან.
// sorting algohritm- მასივის დალაგება
// bubble sort alghoritm

// let arr = [10,5,7,3,20,15,17,50]
// let sortedArr = arr.sort((a,b)=> a - b)
// console.log(sortedArr)
// for(let i = 0; i < arr.length - 1;i++){ //path-ებისთვის,რამდენ path-ს გადის
//     for(let j = 0;j < arr.length - 1 -i ; j++ ){  //რიცხვების დასალუპად,რო რიცხვები შევადაროთ ერთმანეთთან
//         if(arr[j] > arr[j+1]){ //თუ  ერთი რიცხვი მეტია მეზობელ რიცხვზე, ეგ ორი რიცხვი უნდა ჩავანაცვლოთ
//              let temp = arr[j]
//              arr[j] = arr[j+1]
//              arr[j+1] = temp
//         }
//     }                   
// }
// console.log(arr)

//search alghoritms
//linear search
// let arr = [10,5,7,3,20,15,17,50]
// function linearSearch(arr,target){
//     for(let i = 0;i < arr.length;i++){
//         if(target === arr[i]){
//             return i
//         }
//     }
//     return -1
// }
// console.log(linearSearch(arr,15))
// binary search    // array dasortili unda ikos
// let arr = [2,3,5,7,8,10,12,15,]
// function binarySearch(arr,target){
//     let low = 0 
//     let high = arr.length - 1 
//     while(low <= high){
//         let mid = Math.floor((high + low) / 2)  
//         if(arr[mid] === target){  // mid indexia
//             return mid
//         }else if(arr[mid] > target){
//             high = mid - 1
//         }else{ // tu meti araa da toli esigi nakklebia
//             low = mid +1
//         }
//     }
//     return -1
// } 
// console.log(binarySearch(arr, 12))

// selection sort       //gareta cikli index ro gavigot,shignita ricxvebis shesadareblad
// let arr = [20,6,4,67,45,10,9,5];
// function selectionSort(arr){
//     for(let i = 0;i<arr.length-1;i++){
//         let maxIndex = 0

//         for(let j = 1;j< arr.length -i;j++){
//             if(arr[j] > arr[maxIndex] ){
//                 maxIndex = j
                
//             }
//         }
//         let temp = arr[maxIndex]
//         arr[maxIndex] = arr[arr.length - i -1]
//         arr[arr.length - i -1] = temp

//     }
// }
// selectionSort(arr)
// console.log(arr)


//quickSort  
// masivshi igeben ert ricxvs bolos pirvsl an shuas,arakmnishvneloba da
//aiges shuaricxvi masivis marrcxena mxares tveben am ricxvze nakle ricxvebs,
//marjvniv ki am ricxvze did ricxvebs.
//sheileba axal masivshic chavkaot es ricxvei,mere im axali masivebidanac
//igeben shua ricxvs da igives aketeebrn 
// 3 etapisgan shdgeba , 
// pirveli erapi pibot cvladi romelzec shua elementia ert erti elementia ra
//2. masivi ise unda gadavalagot ro pivotzenaklebi ricxvebi marcxniv,meti ki
//marjvniv gadavisrolot da pivot tavis adgilze idgeba
//3. is patara masivebi ro gvekneba mere mmagatac vaadgilebt 
// arrayshi shua index ro gavigot, arr.length /2 math floorshi
// let arr = [20,6,4,45,10,67,9,5,5,5,5,5,5];
// function quickSort(arr){
//     if(arr.length <=1){
//         return arr
//     }
//     const pivotIndex = Math.floor(arr.length / 2)   //masivis shua index
//     const pivot = arr[pivotIndex]

//     const left = []
//     const right = []
//     for(let i = 0;i<arr.length;i++){
//         if(i === pivotIndex){
//             continue
//         }
//         if(arr[i] > pivot){
//             right.push(arr[i])
//         }else{
//             left.push(arr[i])
//         }
//     }
     
//      return [...quickSort(left), pivot, ...quickSort(right)]
// }
// console.log(quickSort(arr))
// console.log(arr)





// function binarySearch(arr,target){
//     let leftIndex = 0
//     let rightIndex = arr.length - 1
 
//     while(leftIndex <= rightIndex){
//      let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
//      if(target === arr[middleIndex]){
//          return middleIndex
//      }
//      if(target < arr[middleIndex]){
//          rightIndex = middleIndex -1
//      }else{
//          leftIndex = middleIndex +1
//      }
//     }
//     return -1
//  }
//  console.log(binarySearch([-5,2,4,6,10],6))


//  function recursiveBinarySearch(arr,target){
//     return search(arr,target,0,arr.length-1) 
//  }
//  function search(arr,target,leftIndex,rightIndex){
//     if(leftIndex > rightIndex){
//         return -1
//     }

//     let middleIndex = Math.floor(leftIndex + rightIndex)
//     if(target === arr[middleIndex]){
//         return middleIndex
//     }
//     if(target < arr[middleIndex]){
//         return search(arr,target,leftIndex, rightIndex)
//     }else{
//         return search(arr,target,middleIndex + 1, rightindex)
//     }
//  }
//  console.log(recursiveBinarySearch([-5,2,4,6,10],10))


// function recursiveFactorial(n){
//     if(n ===0){
//         return 1
//     }
//     return n * recursiveFactorial(n - 1)
// }

// console.log(recursiveFactorial(5))//120
// function factorial(n){
//     let sum = 1
//     for(let i = 2; i <= n;i++){    // 1 * 2; 2 * 3, 3 * 4, 4 * 5, 5 * 6
//         sum *= i  // 1*2 =2, 2 * 3 = 6, 6 * 4 = 24, 24 * 5 = 120
//     }
//     return sum
// }
// console.log(factorial(5))


// function recurSiveFibonacci(n){
//     if(n  <  2){
//         return n
//     }
//     return recurSiveFibonacci(n-1) + recurSiveFibonacci(n-2)
// }
// console.log(recurSiveFibonacci(6))
// console.log(recurSiveFibonacci(1))
// function fibonacci(n){
//     const fab = [0,1]
//     for(let i = 2;i < n;i++){
//         fab[i] = fab[i-1] + fab[i-2]  //fab2 = fab1 + fab0 fab3 = fab2 + fab1 // fab5 = fab4 + fab3 // fab6 = fab5 + fab4
//     }
//     return fab
// }
// console.log(fibonacci(6))

// function isPowerTwo(n){
//     if(n < 1){
//         return false
//     }
//     while(n > 1){
//         if(n % 2 !== 0){
//             return false
//         }
//         n = n / 2
//     }
//     return true
// }
// console.log(isPowerTwo(5))

// function isPowerTwoBitWise(n){    // constant time complexity  bekas vkitxot zedas msgavsia
//     if(n<1){ 
//         return false
//     }
//     return (n & (n - 1) ) === 0
// }
// console.log(isPowerTwoBitWise(16))

// function isPrime(n){
//     if( n < 2 ){
//         return false
//     }
//     // if(n === 2){
//     //     return true
//     // }
//     for( let i = 2; i < n;i++ ){
//         if( n % i === 0){   // 1. 2 /2=1 true,    4 /2 = 0 false, 5 / 2 = 2(1) true
//             return false
//         }
//     }
//     return true
// }
// // console.log(isPrime(2))
// // console.log(isPrime(1))
// // console.log(isPrime(4))
// // console.log(isPrime(5))
// function itisPrime(n){
//     if( n < 2 ){
//         return false
//     }
//     if(n % 2 === 0){
//         return false
//     }
//     return true
// }
// console.log(itisPrime(4))
// console.log(itisPrime(5))


// prime number
// function isPrime(n){    // chemi gaketebuli
//     if(n < 2){
//         return false
//     }
//     if(n % 2 !== 0){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(isPrime(10))//false

// function isPrime(n){
//     if(n < 2){
//         return false
//     }
//     for(let i = 2; i < n;i++){
//         if(n % i === 0){
//             return false
//         }
//     }
//     return true
// }
// console.log(isPrime(5)) //true
// console.log(isPrime(4)) //false
// console.log(isPrime(1)) //false
// function recursiveFactorial(n){
//     if(n === 0){
//         return 1
//     }
//     return n * recursiveFactorial(n-1)  // 5s amravlebs?
// }
// console.log(recursiveFactorial(0)) //1
// console.log(recursiveFactorial(1)) //1
// console.log(recursiveFactorial(5)) //120


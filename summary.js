// fibonacci sequence  ყველა ციფრი მიიღება წინა ორის ჯამით
// function fibonacci(n){
//     const fab = [0,1]
//     for(let i = 2;i < n;i++){
//         fab[i] = fab[i-1] + fab[i-2]  //fab2 = fab1 + fab0 fab3 = fab2 + fab1 // fab5 = fab4 + fab3 // fab6 = fab5 + fab4
//     }
//     return fab
// }
// console.log(fibonacci(6))
//factorial of a number         // i 
// function factorial(n){
//     let sum = 1
//     for(let i = 2; i <= n;i++){    // 1 * 2; 2 * 3, 3 * 4, 4 * 5, 5 * 6
//         sum *= i  // 1*2 =2, 2 * 3 = 6, 6 * 4 = 24, 24 * 5 = 120
//     }
//     return sum
// }
// console.log(factorial(5))
// 
//JavaScript Algorithms - 9 - Prime Number  // beqastan gaviarot
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

//JavaScript Algorithms - 10 - Power of Two  ამოწმებს თუ რიცხვი ნამრავლია 2ის, 2*2*2*2* ამთემაშია რა
function isPowerOfTwo(n){
    if(n < 1){
        return false
    }
    while(n > 1){
        if(n%2 !==0){
            return false

        }
        n = n / 2

    }
    return true
}

console.log(isPowerOfTwo(32))
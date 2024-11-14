//  რიცხვის ჯამისალგორითმი
// function summation(n){
//     let sum = 0
//     for(let i = 0; i <= n; i++){
//         sum += i
//     }
//     return sum
// }
// console.log(summation(5))
// function summation(n){
//     return n*(n+1)/2
// }
// console.log(summation(5));
// მასივის ყველა აითემის დაპრინტვა
// function printAllItems(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }
// console.log(printAllItems([1,2,3,4,5]))
// math alghoritms 1.fibonacci sequence 2. factorialof a number 3. prime number 4. power of two 5. recursion 6. fibonacci sequence with recusion 7. factorial of a number with recursion
//  fibonacci sequence
// function fibonacci(n){
//         const fib = [0,1]
//         for(let i = 2; i <n;i++){
//             fib[i] = fib[i-1] + fib[i-2]
//         }
//         return fib
//     }
//     console.log(fibonacci(2))//[0,1]
//     console.log(fibonacci(3))//[0,1,1]
//     console.log(fibonacci(7))//[0,1,1,2,3,5,8
//JavaScript Algorithms - 8 - Factorial of a Number
// function factorial(n){
//     let sum = 1
//     for(let i = 2; i <= n;i++){
//         sum = sum * i
//     }
//     return sum
// }
// console.log(factorial(5))

// prime number
// function isPrime(n){
//     if(n < 2){
//         return false
//     }
//     for(let i = 2;i < n;i++){
//         if( n % i === 0 ){
//             return false
//         }
//     }
//     return true
// }
// console.log(isPrime(6))
//JavaScript Algorithms - 10 - Power of Two ხარისხი
// function isPowerTwo(n){
//     if(n < 1 ){
//         return false
//     }
//     while(n > 1){
//         if(n % 2 !==0){
//             return false
//         }
//         n = n/2
//     }
//     return true
// }
// console.log(isPowerTwo(1)) // true
// console.log(isPowerTwo(2)) // true
// console.log(isPowerTwo(5)) // false
// function isPowerofTwoBitwise(n){
//     if(n < 1){
//         return false
//     }
//     return ( n & (n - 1) ) === 0

// }
// console.log(isPowerofTwoBitwise(1))
// console.log(isPowerofTwoBitwise(2))
// console.log(isPowerofTwoBitwise(5))
//JavaScript Algorithms - 11 - Recursion
// //JavaScript Algorithms - 12 - Recursive Fibonacci Sequence
// function recurSiveibonacci(n){
//     if(n < 2){
//         return n
//     }
//     return recurSiveibonacci(n-1) +  recurSiveibonacci(n-2)
// }
// console.log(recurSiveibonacci(0))//0
// console.log(recurSiveibonacci(1))//1
// console.log(recurSiveibonacci(6))//8
//JavaScript Algorithms - 13 - Recursive Factorial of a Number
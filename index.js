// დროის სირთულე - დრო, რომელსაც სჭირდება ალგორითმი გასაშვებად, შეყვანის ზომის ფუნქციის მიხედვით
// სივრცის სირთულე - მეხსიერების რაოდენობა, რომელსაც ალგორითმი იღებს გასაშვებად, შეყვანის ზომის ფუნქციის მიხედვით
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

// prime number // 1-ზე მეტი, რომელიც არ არის ორი პატარა ნატურალური რიცხვის ნამრავლი
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
// function recursiveFactorial(n){
//     if(n === 0){
//         return 1
//     }
//     return n * recursiveFactorial(n-1)
// }
// console.log(recursiveFactorial(0))//1
// console.log(recursiveFactorial(1))//1
// console.log(recursiveFactorial(5))//120
//search alghoritms
// JavaScript Algorithms - 15 - Linear Search  time complexity
// function linearSearch(arr, target){
//     for(let i = 0; i < arr.length;i++){
//         if(arr[i] === target){
//             return i
//         }
//     }
//     return -1
// }
// console.log(linearSearch([-5,2,10,4,6], 10))//2
// console.log(linearSearch([-5,2,10,4,6], 6))//4
// console.log(linearSearch([-5,2,10,4,6], 20))//-1
//JavaScript Algorithms - 16 - Binary Search
// function binarySearch(arr, target){
//     let leftIndex = 0
//     let rightIndex = arr.length - 1
//     while(leftIndex <= rightIndex){
//         let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
//         if(target === arr[middleIndex]){
//             return middleIndex
//         }
//         if(target < arr[middleIndex]){
//             rightIndex = middleIndex - 1
//         }else{
//             leftIndex = middleIndex + 1
//         }
//     }
//     return -1
// }
// console.log(binarySearch([-5,2,4,6,10], 10)) //4
// console.log(binarySearch([-5,2,4,6,10], 6)) //3
// console.log(binarySearch([-5,2,4,6,10], 20)) //-1
//JavaScript Algorithms - 18 - Recursive Binary Search
// function recursiveBinarySearch(arr, target){
//     return search(arr, target,0, arr.length - 1) 
// }
// function search(arr,target, leftIndex, rightIndex){
//     if(leftIndex > rightIndex){
//         return - 1
//     }
//     let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
//     if(target === arr[middleIndex]){
//         return middleIndex
//     }
//     if(target < arr[middleIndex]){
//         return search(arr,target,leftIndex, middleIndex - 1)
//     }else{
//         return search(arr,target, middleIndex + 1, rightIndex)
//     }
// }
// console.log(recursiveBinarySearch([-5,2,4,6,10], 10))//4
// console.log(recursiveBinarySearch([-5,2,4,6,10], 6))//3
// console.log(recursiveBinarySearch([-5,2,4,6,10], 20))//-1

//linear search    // linear time complexity

// function linearSearch(arr, target){
//     for(let i = 0; i< arr.length;i++ ){
//         if(target === arr[i]){     // masivshi edzebs romel indexze dgas konkretuli ricxvi
//             return i
//         }
//     }
//     return -1
// }
// console.log(linearSearch([2,5,7,8,],1))
//JavaScript Algorithms - 16 - Binary Search  sort array unda ikos es ro gamovikenot, tu imenaamis gamokeneba gvinda mashin array unda davsortot da mere daviwkot ggamokeneba
//es dalagebul arrayshi mokmedebs, anu [1,3,5,6,7,8,9] da tu unda vipovot romel indexzea 8,jer shua ricxvze dadgeba da mere sheadarebs, tu magalitad 8s vedzebt,
//6 s sheadarebs rvas, rva metia eqvsze da marcxena mxares agar shexedavs, mere wava kide shuashi da ese mokmedebs.
function binarySearch(arr,target){
   let leftIndex = 0
   let rightIndex = arr.length - 1

   while(leftIndex <= rightIndex){
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if(target === arr[middleIndex]){
        return middleIndex
    }
    if(target < arr[middleIndex]){
        rightIndex = middleIndex -1
    }else{
        leftIndex = middleIndex +1
    }
   }
   return -1
}
console.log(binarySearch([-5,2,4,6,10],6))

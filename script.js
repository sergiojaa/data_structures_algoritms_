//Big-O Notation
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
    //JavaScript Algorithms - 5 - Objects and Arrays Big-O
    //Loop through all numbers once to find the maximum.
    // function findMax(arr) {
    //     let max = arr[0]; // Assume the first element is the maximum
      
    //     for (let i = 1; i < arr.length; i++) {
    //       if (arr[i] > max) {
    //         max = arr[i]; // Update max if the current element is greater
    //       }
    //     }
      
    //     return max;
    //   }
      
    //   // Example usage:
    //   const numbers = [3, 5, 7, 2, 8];
    //   console.log(findMax(numbers)); // Output: 8
    //O(n²): If we had a double loop comparing each number to every other number, it would take longer for large lists.
    // function hasDuplicates(arr) {
    //     for (let i = 0; i < arr.length; i++) {          // Outer loop
    //       for (let j = i + 1; j < arr.length; j++) {     // Inner loop starts at i + 1
    //         if (arr[i] === arr[j]) {                     // Compare each pair of elements
    //           return true;                               // Return true if a duplicate is found
    //         }
    //       }
    //     }
    //     return false;                                    // Return false if no duplicates
    //   }
      
    //   // Example usage:
    //   const numbers = [3, 5, 7, 2, 8, 7];
    //   console.log(hasDuplicates(numbers)); // Output: true (because 7 is repeated)
      
 // JavaScript Algorithms - 5 - Objects and Arrays Big-O
//  const person = {
//     firstName: 'John',
//     lastName:'Smith',
//  }
//  const odd = [1, 2, 3, 4]
//JavaScript Algorithms - 6 - Math Algorithms
// pirveli algoritmi JavaScript Algorithms - 7 - Fibonacci Sequence
// function fibonacci(n){
//     const fib = [0,1]
//     for(let i = 2; i <n;i++){
//         fib[i] = fib[i-1] + fib[i-2]
//     }
//     return fib
// }
// console.log(fibonacci(2))//[0,1]
// console.log(fibonacci(3))//[0,1,1]
// console.log(fibonacci(7))//[0,1,1,2,3,5,8
// big-O -- 0(n)
//JavaScript Algorithms - 8 - Factorial of a Number
function factorial(n){
    let result = 1;
    for(let i = 2; i < n; i++){
        result *= i;
    }
    return result;
}
console.log(factorial(0))//1
console.log(factorial(1))//1
console.log(factorial(5))//120
// big-o = o(n)
// fibonacci sequence 
function fibonacci(n){
    const fab = [0,1]
    for(let i = 2;i < n;i++){
        fab[i] = fab[i-1] + fab[i-2]
    }
    return fab
}
console.log(fibonacci(7))
//recursive fibonacci sequence
function recursiveFibonacci(n){
    if(n < 2){
        return n
    }
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)   // 5 + 4, 4 + 3, 3 + 2,  
}
console.log(recursiveFibonacci(6))

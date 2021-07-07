//A function which accepts a number as input and returns factorial of that number

function factorial(num1){
    let reserved = 1 ;
    for(i=2 ; i<num1 ; i++){
        reserved*= i ;
    }
    return reserved;
}
console.log(factorial(4));
console.log(factorial(7));

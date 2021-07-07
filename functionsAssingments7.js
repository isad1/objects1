//7. An integer as input and returns true if it is prime false if its not.

function primeFunc(num){
    var starting ;
    var num ;
for (starting = 2 ; starting<num ; starting++){
    if(num%starting!=0){
        return true;
    }
    else 
    return false ;
 }
}
console.log(primeFunc(7));
console.log(primeFunc(6));
console.log(primeFunc(43));

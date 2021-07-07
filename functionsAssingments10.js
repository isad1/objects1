//An integer as input and returns true if it is divisible by 6 false if it is not

function divisibleBySix(num){
    if(num%6==0){
        return true ;
    }
    else
        return false ;
}

console.log(divisibleBySix(65));
console.log(divisibleBySix(72));
console.log(divisibleBySix(32));
console.log(divisibleBySix(102));

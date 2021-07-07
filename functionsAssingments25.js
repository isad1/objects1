//multple37: Given a  number n, return true if it is divisible by either 3 or 7

function multiple37(n){
    operation = (n%3==0) || (n%7==0)? true : false ;
    return operation ;
}

console.log(multiple37(33));
console.log(multiple37(21));
console.log(multiple37(37));
console.log(multiple37(22));

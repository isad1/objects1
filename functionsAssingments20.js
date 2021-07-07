// 20. largerThanOne: Given 3 numbers as input num1, num2, num3 return true if num1 is greater than 
//at least one of num2 and num3c. Do not use if statement to solve this problem

function largerThanOne(num1 , num2 , num3){
    operation =(num1>num2) || (num2>num3)? true : false
    return operation ; 
}
console.log(largerThanOne(23,34,56));
console.log(largerThanOne(30,23,20));
console.log(largerThanOne(1,23,20));
console.log(largerThanOne(45,20,42));
//addForThird: Given 3 numbers a , b and c , return true if the sum  of any 2 equals the third

function addForThird(a,b,c){
    var num1, num2, num3 ;
    num1 = a + b ;
    num2 = b + c ;
    num3 = c + a ;
    
    operation = ((num1==c) || (num2==a) || (num3==b))? true : false 
    return  operation ;
}

console.log(addForThird(3,5,19));
console.log(addForThird(3,3,6));
console.log(addForThird(9,6,12));

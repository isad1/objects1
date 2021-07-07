//andBooleans: Given three booleans as  inputs , return the AND of all the 3 inputs

function andBooleans(b1,b2,b3){
    operation = b1 && b2 && b3 ;
    return operation ;
}
console.log(andBooleans(true,false,true));
console.log(andBooleans(false,false,true));
console.log(andBooleans(true,true,true));
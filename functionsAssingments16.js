// Calculate RequiredRunRate : A team is chasing the target set in a oneday international match. The 
// objective is to compute the following run rate . The following have been provided as input: target,
// maxOvers , currentScore , oversBowled

function requiredRunRate(target,currentScore,maxOvers,oversBowled){
    equation = (target-currentScore)/(maxOvers-oversBowled);
    return equation ;
}

console.log(requiredRunRate(300,100,50,25));
console.log(requiredRunRate(500,300,50,35));
console.log(requiredRunRate(350,200,50,37));
/**
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 */

var target = 600851475143;
var myFactors = [];

function findFactors(num){
    for (var i = 2; i <= num; i++){
        if (num % i === 0){
            myFactors.push(i)
            num = num / i;
        }
    }
    console.log("The largest prime factor of the number " + target + " is " + myFactors[myFactors.length - 1]);
}

findFactors(target);

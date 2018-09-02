/**
 * By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
 * What is the 10 001st prime number?
 */

var counter = 0;
var primeArray = [];

function isAPrime(someNumber) {
    for (var i = 2; i < someNumber; i++) {
        if (someNumber % i === 0) {
            return false;
            break;
        }   else {
            return true;
            break;
        }
    }
}

for (var j = 2; j < 20; j++) {
        if (isAPrime(j) && counter < 6) {
                primeArray.push(j);
                counter++;
        }
}

console.log(isAPrime(9));
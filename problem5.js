/**
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 *
 */

var counter = 0;

for (var i = 20; i < 1000000000; i++) {
    if (counter === 20) {
        break;
    }
    for (var j = 1; j <= 20; j++) {
        if (i % j === 0) {
            counter++;
        }   else {
            counter = 0;
        }
        if (counter === 20) {
            console.log(i);
            break;
        }
    }
}
/**
 * A palindromic number reads the same both ways. 
 * The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

var palArray = [];

for (var i = 100; i < 1000; i++) {
    for (var j = 100; j < 1000; j++) {
        var myNumber = i * j;
        var myString = myNumber.toString();
        var newString = '';
        for (var k = myString.length - 1; k >= 0; k--) {
            newString += myString.charAt(k);
        }
        if (newString === myString) {
            palArray.push(newString);
        } 
    }
}

palArray.sort(function (a, b) {
    return a - b;
});

console.log(palArray[palArray.length - 1]);
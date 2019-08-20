"use strict";
exports.__esModule = true;
var factorial = function (n) {
    var product;
    // base case
    if (n === 1 || n === 0) {
        product = n;
        // larger positive number
    }
    else if (n > 1) {
        product = n * factorial(n - 1);
        // some other wierd case
    }
    else {
        product = NaN;
    }
    // finally, return result
    return product;
};
var factorialMemo = function (n) {
    var productList;
    var memo = function (i) {
        var product;
        // base case
        if (i === 0 || i === 1) {
            product = 1;
            // larger positive number
        }
        else if (n > 1) {
            product = i * productList[i - 1];
            // some other wierd case
        }
        else {
            product = NaN;
        }
        // finally, return result
        return product;
    };
    // get a range of numbers from 0 to n+1
    var range = Array(n + 1).keys().slice();
    // find factorial for each item
    range.forEach(function (i) {
        var product = memo(i);
        productList.push(product);
    });
    // finally, return resulting list
    return productList;
};
var eulersNumber = function (precision) {
    var e = 0;
    var factorialList = factorialMemo(precision);
    factorialList.forEach(function (n) {
        e += 1 / n;
    });
    return e;
};
exports.π = Math.PI;
exports.ε = eulersNumber(100);
exports.φ = (1 + Math.sqrt(5)) / 2;
console.log(exports.π);
console.log(exports.ε);
console.log(exports.φ);
exports.PI = exports.π;
exports.EULER = exports.ε;
exports.GOLDEN = exports.φ;
// https://github.com/microice333/Python-projects/blob/master/n_digit_e.py
// find e to nth digit by brothers' formulae: http://www.intmath.com/exponential-logarithmic-functions/calculating-e.php
// import decimal

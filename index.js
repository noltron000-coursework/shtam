"use strict";
exports.__esModule = true;
var factorial = function (n) {
    var product;
    if (n === 1 || n === 0) {
        // base case
        product = n;
    }
    else if (n > 1) {
        // larger positive number
        product = n * factorial(n - 1);
    }
    else {
        // some other wierd case
        product = NaN;
    }
    // finally, return result
    return product;
};
var factorialMemo = function (n) {
    var productList = [];
    var memo = function (i) {
        var product;
        if (i === 0 || i === 1) {
            // base case
            product = 1;
        }
        else if (n > 1) {
            // larger positive number
            product = i * productList[i - 1];
        }
        else {
            // some other wierd case
            product = NaN;
        }
        // finally, return result
        return product;
    };
    // get a range of numbers from 0 to n+1
    var range = Array.from(Array(n + 1).keys());
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
    // need every factorial from 0 to n
    var factorialList = factorialMemo(precision);
    // loop through each factorial and add 1/n! to e
    factorialList.forEach(function (n) {
        e += 1 / n;
    });
    return e;
};
exports.π = Math.PI;
exports.ε = eulersNumber(100);
exports.φ = (1 + Math.sqrt(5)) / 2;
exports.PI = exports.π;
exports.EULER = exports.ε;
exports.GOLDEN = exports.φ;
Number.prototype.round = function round() {
    return Math.round(this);
};
Number.prototype.floor = function floor() {
    return Math.floor(this);
};
Number.prototype.ceil = function ceil() {
    return Math.ceil(this);
};
console.log((5.23).round());
// round()
// floor()
// ceil()
// pad(x, y)
// degToRad(n)
// radToDeg(n)
// toDollars(amount)
// toDollars(3.9) -> $3.90
// toDollars(0.99) -> ¢0.99
// intFormat(amount, countryCode, style)
// tax(rate) - Returns the tax amount
// withTax(rate) - returns the amount with tax
// interest() - https://stackoverflow.com/questions/28325001/how-to-calculate-interest-javascript
// mortage(principal, numberOfPayments, interestRate) - https://stackoverflow.com/questions/17101442/how-to-calculate-mortgage-in-javascrip
// intToHex(int) -> #332211 - https://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hexadecimal-in-javascript
// Random functions
// random(n) - returns an integer from 0 to n - 1
// randomRange(min, max) - returns an integer between min and max
// randomColor() -

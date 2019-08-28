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
Number.prototype.round = function () {
    return Math.round(this);
};
Number.prototype.floor = function () {
    return Math.floor(this);
};
Number.prototype.ceil = function () {
    return Math.ceil(this);
};
Number.prototype.trunc = function () {
    return Math.trunc(this);
};
Number.prototype.toRadians = function () {
    // assumes number is in degrees
    return (this * exports.π) / 180;
};
Number.prototype.toDegrees = function () {
    // assumes number is in radians
    return (this * 180) / exports.π;
};
Number.prototype.pad = function (paddingLeft, paddingRight) {
    if (paddingLeft === void 0) { paddingLeft = 0; }
    if (paddingRight === void 0) { paddingRight = 0; }
    // numbers drop extra zeroes, so we need a string
    var numString = String(this);
    // the decimal point determines whats left and right
    var numSplit = numString.split('.');
    // left and right of decimal point
    var left = numSplit[0];
    var right = '';
    if (numSplit.length === 2) {
        right = numSplit[1];
    }
    // pad either side of the decimal
    left = '0' * paddingLeft + left;
    right = right + '0' * paddingRight;
    // add a decimal if the right side exists
    if (right) {
        right = '.' + right;
    }
    // the padded number is just left + right
    return left + right;
};
Number.prototype.toDollars = function () {
    // assumes number is in dollars
    var value = 1;
    value *= this;
    value *= 100;
    value = value.trunc();
    value /= 100;
    return '$ ' + String(value);
};
Number.prototype.toCents = function () {
    // assumes number is in dollars
    var value = 1;
    value *= this;
    value *= 100;
    value = value.trunc();
    return String(value) + ' ¢';
};
// intFormat(amount, countryCode, style)
Number.prototype.toIntlCurrency = function (locales, currencyType) {
    return new Intl.NumberFormat(locales, {
        style: 'currency',
        currency: currencyType
    }).format(this);
};
Number.prototype.taxAmount = function (rate) {
    return this * rate;
};
Number.prototype.taxTotal = function (rate) {
    return this * (rate + 1);
};
Number.prototype.interestCompound = function (rate, intervals) {
    return this * Math.pow((rate + 1), intervals);
};
Number.prototype.interestSimple = function (rate, intervlas) {
    return this * (rate * intervals + 1);
};
Number.prototype.mortgage = function (rate, intervals) {
    return this.interestCompound(rate, intervals) / intervals;
};
String.prototype.toBase = function (before, after) {
    if (before === void 0) { before = 10; }
    if (after === void 0) { after = 16; }
    return parseInt(this, before).toString(after);
};
console.log('4432'.toBase(10, 16));
// Random functions
// random(n) - returns an integer from 0 to n - 1
// randomRange(min, max) - returns an integer between min and max
// randomColor() -

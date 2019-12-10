/*
    CHALLENGE 1:
    define some irrational constants.
*/
// Golden Ratio
const PHI = (1 + Math.pow(5, (1 / 2))) / 2;
// Silver Ratio
const PSI = PHI - 1;
// Perimetros Number
const PI = Math.PI;
// Euler's Number
const E = Math.E;
/*
    CHALLENGE 2:
    make aliases to referenced math functions.
*/
const round = (number) => {
    return Math.round(number);
};
const floor = (number) => {
    return Math.floor(number);
};
const ceil = (number) => {
    return Math.ceil(number);
};
const trunc = (number) => {
    return Math.trunc(number);
};
/*
    CHALLENGE 3:
    pads a number with zeroes on the left and right.
    decimals vs whole numbers makes this a bit trickier.
*/
const padZeroes = (number, left, right) => {
    let maybeDecimal = '';
    if (number % 1 == 0 || right == 0) {
        // If the number is divisible by 1,
        // then it is a whole number.
        // This means it does not have a decimal point.
        maybeDecimal = maybeDecimal.concat('.');
    }
    // Combine the stringified number with the maybeDecimal.
    let middle = `${number.toString()}${maybeDecimal}`;
    // This string literal takes care of the rest.
    return `${'0'.repeat(left)}${middle}${'0'.repeat(right)}`;
};
/*
    CHALLENGE 4 & 5:
    define some useful angle functions.
*/
const radToDeg = (radians) => {
    return radians * 180 / PI;
};
const degToRad = (degrees) => {
    return degrees * PI / 180;
};
/*
    CHALLENGE 6:
    cash money
*/
const formatDollars = (amount) => {
    // assumes amount is in dollars
    return '$ ' + amount.toFixed(2);
};
const formatCents = (amount) => {
    // assumes amount is in dollars
    amount *= 100;
    return amount.toString() + ' ¢';
};
/*
    CHALLENGE 7:
    taxes
*/
const taxAmount = (amount, rate) => {
    return amount * rate;
};
const taxTotal = (amount, rate) => {
    return amount * (rate + 1);
};
/*
    CHALLENGES 8 & 9:
    interest rates
*/
const interestCompound = (amount, rate, intervals) => {
    return amount * Math.pow((rate + 1), intervals);
};
const interestSimple = (amount, rate, intervals) => {
    return amount * (rate * intervals + 1);
};
const mortgage = (amount, rate, intervals) => {
    return interestCompound(amount, rate, intervals) / intervals;
};
/*
    CHALLENGE 10:
    base N
*/
const toBase = (number, before = 10, after = 16) => {
    return parseInt(number.toString(), before).toString(after);
};
/*
    CHALLENGE 11:
    random functionality
*/
const random = (min = 0, // min is inclusive
max = 1) => {
    let randomNumber = Math.random();
    // The random number starts between 0 and 1.
    randomNumber *= (min - max);
    // Rescale it based on the possibility range.
    randomNumber += min;
    return randomNumber;
};
const randInt = (min = 0, // min is inclusive
max = 10) => {
    // Clean the input a bit.
    // We want the same weight on each number.
    min = ceil(min);
    max = floor(max);
    // Grab the random number from the random function.
    let randomNumber = random(min, max);
    // Then just take its floor since the max is exclusive.
    return floor(randomNumber);
};
const randHex = () => {
    // `#FFFFFF` is the largest color hex for HTML etc.
    // Each `F` represents the number 16.
    // There are `6` digits in this color code.
    // Retrieve this full hex number in base-10 format.
    const largestDecimal = Math.pow(16, 6);
    // Now get a random number between zero and this decimal.
    const randomDecimal = randInt(0, largestDecimal);
    // Convert the random number to base-16.
    const hexCode = toBase(randomDecimal);
    // Return the reformatted string.
    return `#${hexCode.toUpperCase()}`;
};
/*
    STRETCH CHALLENGE A:
    implement factorial.
*/
const factorial = (n) => {
    let product;
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
const factorialMemo = (n) => {
    let productList = [];
    const memo = (i) => {
        let product;
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
    const range = Array.from(Array(n + 1).keys());
    // find factorial for each item
    range.forEach((i) => {
        const product = memo(i);
        productList.push(product);
    });
    // finally, return resulting list
    return productList;
};
/*
    STRETCH CHALLENGE B:
    implement euler's number w/precision.
*/
const eulersNumber = (precision = 100) => {
    let e = 0;
    // need every factorial from 0 to n
    const factorialList = factorialMemo(precision);
    // loop through each factorial and add 1/n! to e
    factorialList.forEach((n) => {
        e += 1 / n;
    });
    return e;
};
/*
    OLD CONTENTS
*/
// intFormat(amount, countryCode, style)
// Number.prototype.toIntlCurrency = function(
// 	locales: string,
// 	currencyType: string,
// ): string {
// 	return new Intl.NumberFormat(locales, {
// 		style: 'currency',
// 		currency: currencyType,
// 	}).format(this)
// }

export { E, PHI, PI, PSI, ceil, degToRad, eulersNumber, factorial, floor, formatCents, formatDollars, interestCompound, interestSimple, mortgage, padZeroes, radToDeg, randHex, randInt, random, round, taxAmount, taxTotal, toBase, trunc };

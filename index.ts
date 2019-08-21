const factorial = (n: number): number => {
	let product: number

	if (n === 1 || n === 0) {
		// base case
		product = n
	} else if (n > 1) {
		// larger positive number
		product = n * factorial(n - 1)
	} else {
		// some other wierd case
		product = NaN
	}

	// finally, return result
	return product
}

const factorialMemo = (n: number): number[] => {
	let productList: number[] = []

	const memo = (i: number): number => {
		let product: number

		if (i === 0 || i === 1) {
			// base case
			product = 1
		} else if (n > 1) {
			// larger positive number
			product = i * productList[i - 1]
		} else {
			// some other wierd case
			product = NaN
		}

		// finally, return result
		return product
	}

	// get a range of numbers from 0 to n+1
	const range: number[] = Array.from(Array(n + 1).keys())

	// find factorial for each item
	range.forEach((i: number) => {
		const product: number = memo(i)
		productList.push(product)
	})

	// finally, return resulting list
	return productList
}

const eulersNumber = (precision: number): number => {
	let e: number = 0
	// need every factorial from 0 to n
	const factorialList: number[] = factorialMemo(precision)
	// loop through each factorial and add 1/n! to e
	factorialList.forEach((n: number) => {
		e += 1 / n
	})
	return e
}

export const π: number = Math.PI
export const ε: number = eulersNumber(100)
export const φ: number = (1 + Math.sqrt(5)) / 2
export const PI: number = π
export const EULER: number = ε
export const GOLDEN: number = φ

Number.prototype.round = function round(): number {
	return Math.round(this)
}

Number.prototype.floor = function floor(): number {
	return Math.floor(this)
}

Number.prototype.ceil = function ceil(): number {
	return Math.ceil(this)
}

Number.prototype.pad = function pad(
	paddingLeft: number = 0,
	paddingRight: number = 0,
): string {
	// numbers drop extra zeroes, so we need a string
	const numString: string = String(this)
	// the decimal point determines whats left and right
	const numSplit: string[] = numString.split('.')

	// left and right of decimal point
	let left: string = numSplit[0]
	let right: string = ''
	if (len(numSplit) === 2) {
		right = numSplit[1]
	}

	// pad either side of the decimal
	left = '0' * paddingLeft + left
	right = right + '0' * paddingRight
	// add a decimal if the right side exists
	if (right) {
		right = '.' + right
	}

	// the padded number is just left + right
	return left + right
}

Number.prototype.toRadians = function(degrees: number): number {
	return (degrees * π) / 180
}

Number.prototype.toDegrees = function(radians: number): number {
	return (radians * 180) / π
}

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

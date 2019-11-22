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

Number.prototype.round = function(): number {
	return Math.round(this)
}

Number.prototype.floor = function(): number {
	return Math.floor(this)
}

Number.prototype.ceil = function(): number {
	return Math.ceil(this)
}

Number.prototype.trunc = function(): number {
	return Math.trunc(this)
}

Number.prototype.pad = function(
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
	if (numSplit.length === 2) {
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

Number.prototype.toDollars = function(): string {
	// assumes number is in dollars
	let value: number = 1
	value *= this
	value *= 100
	value = value.trunc()
	value /= 100
	return '$ ' + String(value)
}

Number.prototype.toCents = function(): string {
	// assumes number is in dollars
	let value: number = 1
	value *= this
	value *= 100
	value = value.trunc()
	return String(value) + ' ¢'
}

// intFormat(amount, countryCode, style)
Number.prototype.toIntlCurrency = function(
	locales: string,
	currencyType: string,
): string {
	return new Intl.NumberFormat(locales, {
		style: 'currency',
		currency: currencyType,
	}).format(this)
}

Number.prototype.taxAmount = function(
	rate: number,
): number {
	return this * rate
}

Number.prototype.taxTotal = function(rate: number): number {
	return this * (rate + 1)
}

Number.prototype.interestCompound = function(
	rate: number,
	intervals: number,
): number {
	return this * (rate + 1) ** intervals
}

Number.prototype.interestSimple = function(
	rate: number,
	intervlas: number,
): number {
	return this * (rate * intervals + 1)
}

Number.prototype.mortgage = function(
	rate: number,
	intervals: number,
): number {
	return this.interestCompound(rate, intervals) / intervals
}

String.prototype.toBase = function(
	before: number = 10,
	after: number = 16,
): string {
	return parseInt(this, before).toString(after)
}

// random(n) - returns an integer from 0 to n - 1
// randomRange(min, max) - returns an integer between min and max
// randomColor() -

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

// random(n) - returns an integer from 0 to n - 1
// randomRange(min, max) - returns an integer between min and max
// randomColor() -

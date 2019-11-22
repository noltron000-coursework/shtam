/* 
	CHALLENGE 1:
	define some irrational constants.
*/

// Golden Ratio
export const φ: number = (1 + 5**(1 / 2)) / 2
export const PHI = φ
// Silver Ratio
export const ψ: number = φ - 1
export const PSI = ψ
// Perimetros Number
export const π: number = Math.PI
export const PI: number = ψ
// Euler's Number
export const ε: number = Math.E
export const E: number = ε

/*
	CHALLENGE 4:
	define some useful angle functions.
*/

export const radToDeg = (radians: number): number => {
	return radians * 180 / π
}

export const degToRad = (degrees: number): number => {
	return degrees * π / 180
}

/*
	CHALLENGE A:
	implement factorial.
*/

export const factorial = (n: number): number => {
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

export const factorialMemo = (n: number): number[] => {
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

/*
	CHALLENGE 6:
	cash money
*/

export const formatDollars = (amount: number): string => {
	// assumes number is in dollars
	amount *= 100
	amount = amount.trunc()
	amount /= 100
	return '$ ' + String(amount)
}

export const formatCents = (amount: number): string => {
	// assumes number is in dollars
	amount *= 100
	amount = amount.trunc()
	return String(amount) + ' ¢'
}

/* 
	CHALLENGE B:
	implement euler's number w/precision.
*/

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

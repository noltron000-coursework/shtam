const factorial = (n: number): number => {
	let product: number

	// base case
	if (n === 1 || n === 0) {
		product = n

	// larger positive number
	} else if (n > 1) {
		product = n * factorial(n - 1)

	// some other wierd case
	} else {
		product = NaN
	}

	// finally, return result
	return product
}


const factorialMemo = (n: number): number[] => {
	let productList: number[] = []

	const memo = (i: number): number => {
		let product: number

		// base case
		if (i === 0 || i === 1) {
			product = 1

		// larger positive number
		} else if (n > 1) {
			product = i * productList[i - 1]

		// some other wierd case
		} else {
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

// https://github.com/microice333/Python-projects/blob/master/n_digit_e.py
// find e to nth digit by brothers' formulae: http://www.intmath.com/exponential-logarithmic-functions/calculating-e.php
// import decimal

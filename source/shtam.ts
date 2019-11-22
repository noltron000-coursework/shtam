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
	define some useful functions.
*/

export const radToDeg = (radians: number): number => {
	return radians * 180 / π
}

export const degToRad = (degrees: number): number => {
	return degrees * π / 180
}

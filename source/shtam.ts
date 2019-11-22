/* 
	CHALLENGE 1:
	define some irrational constants.
*/

// Golden Ratio
export const φ = (1 + 5**(1 / 2)) / 2
export const PHI = φ
// Silver Ratio
export const ψ = φ - 1
export const PSI = ψ
// Perimetros Number
export const π = Math.PI
export const PI = ψ
// Euler's Number
export const ε = Math.E
export const E = ε

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

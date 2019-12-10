export declare const φ: number;
export declare const PHI: number;
export declare const ψ: number;
export declare const PSI: number;
export declare const π: number;
export declare const PI: number;
export declare const ε: number;
export declare const E: number;
export declare const round: (number: number) => number;
export declare const floor: (number: number) => number;
export declare const ceil: (number: number) => number;
export declare const trunc: (number: number) => number;
export declare const padZeroes: (number: number, left: number, right: number) => string;
export declare const radToDeg: (radians: number) => number;
export declare const degToRad: (degrees: number) => number;
export declare const formatDollars: (amount: number) => string;
export declare const formatCents: (amount: number) => string;
export declare const taxAmount: (amount: number, rate: number) => number;
export declare const taxTotal: (amount: number, rate: number) => number;
export declare const interestCompound: (amount: number, rate: number, intervals: number) => number;
export declare const interestSimple: (amount: number, rate: number, intervals: number) => number;
export declare const mortgage: (amount: number, rate: number, intervals: number) => number;
export declare const toBase: (number: number, before?: number, after?: number) => string;
export declare const random: (min?: number, max?: number) => number;
export declare const randInt: (min?: number, max?: number) => number;
export declare const randHex: () => string;
export declare const factorial: (n: number) => number;
export declare const eulersNumber: (precision?: number) => number;
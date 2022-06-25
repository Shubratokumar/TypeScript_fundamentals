// let numbers: number[] = [1, 2, 3];
// we can set any type as any array but when we set annotation number then the compiler caught an error.
// let numbers: number[] = [];
// numbers[0] = 2;
// numbers[1] = '2'; // invalid

// inteligence features
let numbers: number[] = [];
numbers.forEach(n => n.toString)
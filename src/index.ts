// Arrays
// let numbers: number[] = [1, 2, 3];
// we can set any type as any array but when we set annotation number then the compiler caught an error.
// let numbers: number[] = [];
// numbers[0] = 2;
// numbers[1] = '2'; // invalid

// inteligence features
// let numbers: number[] = [];
// numbers.forEach(n => n.toString)

// Tuples : best practice to use only two element e.g. key-value pairs
// 2, "Shubrato"
// let user: (number | string | boolean)[] = [1, "Shubrato", 101, true];
// let user: [number, string] = [1, "shubrato"];
// inteligence
// user[0].toString();
// user[1].concat();

// Enums : list of related constant

// const small = 1;
// const medium = 2;
// const large = 3;

// PascleCase convension
// enum Size { Small = 0 , Medium = 1, Large = 2}  // by default
// enum Size { Small = 1 , Medium , Large } // we have to set the first element value later increase so on. If we set string value then we have to set explicitly. Rest of the number will set the compiler while compling the code.

// declare enum with const generate more optimize code
// const enum Size { Small = 1 , Medium , Large }

//  use cases 
// let mySize: Size = Size.Medium;
// console.log(mySize);


// functions
// always properly annotated a function
function calculateTax (income: number, taxYear= 2022): number {
    if(taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10_000, 2023);
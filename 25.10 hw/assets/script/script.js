// Task 18

// function Divide(num) {
//     let arr = []
//     let sum = 0
//     let mult = 1
//     for (let i = 0; i < num; i++) {
//         if (num % i == 0) {
//             arr.push(i)
//         }

//     }

//     for (let j = 0; j < arr.length; j++) {
//         sum += arr[j]
//         mult *= arr[j]
//     }
//     console.log(sum);
//     console.log(mult);

// }

// console.log(Divide(16));

// Task 20

// function PrimeDigit(number) {
//     let isPrime = true
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             console.log("This is Composite number, ");
//         } else {

//         }

//     }
//     return isPrime;
// }
// console.log(PrimeDigit(17));

// Task 21 

// function FindPrime(...params) {
//     let isPrime = true

//     for (let j = 0; j < params.length; j++) {
//         for (let i = 0; i < params[i]; i++) {
//             if (params[i] % 2 == 0) {
//                 isPrime = false
//             }

//         }
//     }
//     return isPrime;
// }
// console.log(FindPrime(4, 7, 23, 11, 24, 92, 36));

// Task 22

// function FindPolindrom(...params) {
//     let polindrom = 0

//     for (let i = 0; i < params.length; i++) {
//         if (i % 11 == 0) {
//             polindrom++

//         }

//     }
//     return polindrom;
// }

// console.log(FindPolindrom(123, 33, 43, 123, 333, 54, 121, 66, 432, 54));
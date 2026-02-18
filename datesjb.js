let numbers_even //= [1, 2, 3, 4, 5, 6,7,8,9];
let numbers_odd = [1, 2, 3, 4, 5,];
console.log(numbers_even); // prints entire numbers
// numbers.length 5 - 1
console.log(numbers_even[0]); // prints first element of array
console.log(numbers_even[numbers_even.length - 1]); // prints last element of array

console.log("odd:", numbers_odd[numbers_odd.length / 2]); // middle if odd

console.log("even:", numbers_even[numbers_even.length / 2]); // middle if even (right side)

console.log("even:", numbers_even[numbers_even.length / 2]); // middle if even(left sidelet itCompanies = [//
let mixedDataType
let itCompanies = [
"Facebook",
"Google",
"Microsoft",
"Apple",
"IBM",
"Oracle",
"Amazon",
];
let lastElemnet = itCompanies.pop();
//console.log(lastElemnet); // Amazon
let result = itCompanies.join(" ,");
console.log(result + " and " + lastElemnet);

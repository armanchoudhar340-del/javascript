// 1. Declare an empty array
let emptyArray = [];

// 2. Declare an array with more than 5 elements
let numbers = [1, 2, 3, 4, 5, 6, 7];

// 3. Find the length of your array
console.log(numbers.length);

// 4. Get the first, middle, and last item of the array
let firstItem = numbers[0];
let middleItem = numbers[Math.floor(numbers.length / 2)];
let lastItem = numbers[numbers.length - 1];

console.log(firstItem, middleItem, lastItem);

// 5. Declare mixedDataTypes array (size > 5) and print its length
let mixedDataTypes = ['Arman', 21, true, null, undefined, { course: 'JS' }, [1, 2]];
console.log(mixedDataTypes.length);

// 6. Declare itCompanies array and assign values
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// 7. Print the array
console.log(itCompanies);

// 8. Print the number of companies
console.log(itCompanies.length);

// 9. Print first, middle, and last company
const middleIndex = Math.floor(itCompanies.length / 2);
console.log(itCompanies[0], itCompanies[middleIndex], itCompanies[itCompanies.length - 1]);

// 10. Print out each company
for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}

// 11. Change each company name to uppercase and print
for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i].toUpperCase());
}

// 12. Print array as a sentence
console.log(itCompanies.join(', ') + ' are big IT companies.');

// 13. Check if a company exists
let companyToCheck = 'Google';
if (itCompanies.includes(companyToCheck)) {
  console.log(companyToCheck);
} else {
  console.log('Company is not found');
}

// 14. Filter companies with more than one 'o' (without filter)
let companiesWithMoreThanOneO = [];
for (let i = 0; i < itCompanies.length; i++) {
  let count = 0;
  for (let char of itCompanies[i].toLowerCase()) {
    if (char === 'o') count++;
  }
  if (count > 1) {
    companiesWithMoreThanOneO.push(itCompanies[i]);
  }
}
console.log(companiesWithMoreThanOneO);

// 15. Sort the array
console.log(itCompanies.sort());

// 16. Reverse the array
console.log(itCompanies.reverse());

// 17. Slice out the first 3 companies
console.log(itCompanies.slice(0, 3));

// 18. Slice out the last 3 companies
console.log(itCompanies.slice(itCompanies.length - 3));

// 19. Slice out the middle company
console.log(itCompanies.slice(middleIndex, middleIndex + 1));
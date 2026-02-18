// 1. Declare the variable
let challenge = '50 Days Of JavaScript';

// 2. Print the string
console.log(challenge);

// 3. Print the length of the string
console.log(challenge.length);

// 4. Convert to uppercase
console.log(challenge.toUpperCase());

// 5. Convert to lowercase
console.log(challenge.toLowerCase());

// 6. Cut (slice) out the first word
console.log(challenge.substring(3)); // or challenge.substr(3)

// 7. Slice out 'Days Of JavaScript'
console.log(challenge.slice(3));

// 8. Check if it contains 'Script'
console.log(challenge.includes('Script'));

// 9. Split the string into an array
console.log(challenge.split());

// 10. Split the string at spaces
console.log(challenge.split(' '));

// 11. Split companies string at comma
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(', '));

// 12. Replace JavaScript with Python
console.log(challenge.replace('JavaScript', 'Python'));

// 13. Character at index 15
console.log(challenge.charAt(15));

// 14. Character code of 'J'
console.log(challenge.charCodeAt(challenge.indexOf('J')));

// 15. Last occurrence of 'a'
console.log(challenge.lastIndexOf('a'));

// Sentence for because questions
let sentence = 'You cannot end a sentence with because because because is a conjunction';

// 16. First occurrence of 'because'
console.log(sentence.indexOf('because'));

// 17. Last occurrence of 'because'
console.log(sentence.lastIndexOf('because'));

// 18. Search for 'because'
console.log(sentence.search('because'));

// 18.1 First occurrence of 'a'
console.log(challenge.indexOf('a'));

// 19. Trim whitespace
let spacedString = ' 50 Days Of JavaScript ';
console.log(spacedString.trim());

// 20. Starts with '50'
console.log(challenge.startsWith('50'));

// 21. Ends with 'JavaScript'
console.log(challenge.endsWith('JavaScript'));

// 22. Find all 'a'
console.log(challenge.match(/a/g));

// 23. Concat strings
let part1 = '50 Days Of ';
let part2 = 'JavaScript';
console.log(part1.concat(part2));

// 24. Repeat the string twice
console.log(challenge.repeat(2));

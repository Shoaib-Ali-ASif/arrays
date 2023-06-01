// Find the last element of an array without giving a hard-coded index.
// Add the array element at the specified index.
// Delete the array element from the specified index.

let students = ["Ali", "Hassan", "Farhan", "Chand"];

console.log(students);
console.log(students[students.length - 1]);

students.splice(2, 0, "shoaib");

console.log(students);

students.splice(1, 1);
console.log(students);

// Make an array to store the names of students and check whether that array has your own name or not and also return the index of that value.

let nameOfStudents = ["Ali", "Hassan", "Farhan", "Chand", "Shoaib"];
console.log(nameOfStudents);

// Check whether the first or the last index of an array has a specified value, let's say 5.

let check = [1, 2, 3, 4, 5];
console.table(check);
let index = check.indexOf(5);
console.log(index);

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



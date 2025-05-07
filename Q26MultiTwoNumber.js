/*26. Multiplication of Two Numbers
Description: Write a program to multiply two numbers using loops.
Input: a = 3, b = 5  */


Output: 15
let a = 3;
let b = 5;
let result = 0;
let i = 1;

while (i <= b) {
  result = result + a;
  i = i + 1;
}
console.log(result);

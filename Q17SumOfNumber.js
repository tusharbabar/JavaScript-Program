/*Sum of First N Odd Numbers
Description: Write a program to calculate the sum of the first n odd numbers.
Input: n = 4


Output: 16
*/


let n=4;
let count=0;
let i=1;
let sum=0;
while(count<n)
{
   sum=sum+i;
    i=i+2;
    count=count+1;
}
console.log(sum);

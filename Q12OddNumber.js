/*12. Odd Numbers
Description: Write a program to print all odd numbers between 1 and n.
Input: n = 10 */


Output: 1 3 5 7 9

let n=100;
let i=1;
let result="";
while(i<=n)
{
  if(i%2!==0)
   {
      result=result+i+" ";
     }
    i=i+1;
}
console.log(result);


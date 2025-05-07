/*11. Even Numbers
Description: Write a program to print all even numbers between 1 and n.
Input: n = 10


Output: 2 4 6 8 10
*/


let n=100;
let i=1;
let result="";
while(i<=n)
{
  if(i%2===0)
   {
      result=result+i+" ";
     }
    i=i+1;
}
console.log(result);


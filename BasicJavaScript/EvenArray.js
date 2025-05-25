/*3. Count Even Numbers in an Array
  Question: Write a program to count the number of even numbers in an array.
 Example Input: [2, 5, 6, 9, 8]
 Expected Output: 3
 Explanation: Use a loop to check each number with num % 2 === 0.
*/

let a=[1,2,3,4,5];
let evencount=0;
for(let i=1;i<a.length;i++)
 {
   if(a[i]%2===0)
    {
      evencount++;
     }
}
console.log("Even number is"+evencount);

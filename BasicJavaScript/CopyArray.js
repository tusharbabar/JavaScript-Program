/*10. Copy Elements from One Array to Another
 Question: Copy all elements of one array to another using a loop.
 Example Input: [5, 10, 15]
 Expected Output: [5, 10, 15]
 Explanation: Use a loop to assign each element from the original array to a new one.

*/
let a=[1,2,3,4,5,2];
let copy=[];
for(let i=0;i<a.length;i++)
{
  copy.push(a[i]);
}
console.log(" Array Copy : "+copy);

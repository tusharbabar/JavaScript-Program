// Write a js program to count digit
let n=1234;
let count=0;
while(n>0)
{
    count++;
    n=Math.floor(n/10);
    // n = (n - (n % 10)) / 10;
}
console.log(count);

let n=234;
let sum=0;
while(n>0)
{
    let digit=n%10;
    sum=+digit;
    n=(n-(n%10)/10);
}
console.log(sum);

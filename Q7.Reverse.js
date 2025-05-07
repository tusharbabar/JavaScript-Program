let n=12345;
let rev=0;
while(n>0){
    let rem=n%10;
    rev=rev*10+rem;
    n = (n - (n % 10)) / 10;
}
console.log(rev);
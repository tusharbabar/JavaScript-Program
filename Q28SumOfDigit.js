let n = 123;
let sum = 0;
while (n > 0) {
  let digit = n % 10;
  sum = sum + digit;
  n=Math.floor(n/10);
}

console.log(sum);
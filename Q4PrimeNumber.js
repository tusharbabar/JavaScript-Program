let n = 10;
let primes = "";
for (let i = 2; i <= n; i++) {
  let isPrime = true;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    primes += i + " ";
  }
}
console.log(primes.trim());
var n = 12;
var i = 2;
var result = "";

while (n > 1) {
  if (n % i === 0) {
    result = result + i + " ";
    n = n / i;
  } else {
    i = i + 1;
  }
}

console.log(result);
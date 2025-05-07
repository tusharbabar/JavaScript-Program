let n=153;
let temp=n;
let sum=0;
let digits=n.toString().length;
while(temp>0)
{
    let digit=temp%10;
    sum+=Math.pow(digit,digits);
    temp=Math.floor(temp/10);
}
if(sum===n)
{
    console.log("Armstrong");
}else{
    console.log("Not Armstrong");
}
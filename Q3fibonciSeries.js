let n=5;
let a=0,b=1;
let output="";
for(let i=0;i<n;i++)
{
    output+=a+" ";
    let temp=a+b;
    a=b;
    b=temp;
}
console.log(output.trim());
var n=6;
var i=1;
var sum=0;
while(i<n)
{
    if(n%i===0)
    {
        sum=sum+i;
    }
    i=i+1
}
if(sum==n){
    console.log("perfect");
}else{
    console.log("not perfect");
}
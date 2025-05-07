let n=121;
let rem=n.toString();
let rev=rem.split("").reverse().join("");
if(rem===rev)
{
    console.log("palindrome");
    
}else{
    console.log("not palindrome");
}
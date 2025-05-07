
//Write js program to check year is Leap Or not


var year = 2023;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) 
  {
    console.log(year, "it is a leap Year");
} else {
    console.log(year, "it is a not Leap Year");
}
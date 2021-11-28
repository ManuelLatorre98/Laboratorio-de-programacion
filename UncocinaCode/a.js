/*function palindrome(str) {
    let string =str.replace(/[0-9]/g,"");
    string=string.toLowerCase();
    string=string.replace(/[\W_]/g,"");
    string=string.replace(/\s/g,"");
    console.log(string);
    return true;
  }*/
  
  //palindrome("2A3*3a2 2A3 3a2 2_A3*3#A2");
  let date2= new Date("12-24-2021");
  let date1= new Date("11-26-2021");
  let differenceInTime=date1.getTime()-date2.getTime();
  let differenceInDays= Math.abs(differenceInTime/(1000*3600*24));
  
  let currentDate="12-24-2021"
  let currentDatePlusDays= new Date(currentDate);
  currentDatePlusDays.setDate(currentDatePlusDays.getDate()+1);
  //console.log("DATE: "+currentDatePlusDays+" "+(currentDatePlusDays<=30))

console.log(Date.parse("12-32-2021"))




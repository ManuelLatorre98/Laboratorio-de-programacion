const currentDate=new Date("11/27/2021")//La seteo para facilitar
function inDate(recipeDate,maxDiffDays){
    let maxDate= new Date(currentDate);
    maxDate.setDate(maxDate.getDate()+maxDiffDays);
    let differenceInTime=recipeDate.getTime()-currentDate.getTime();
    let differenceInDays= Math.abs(differenceInTime/(1000*3600*24));
    return differenceInDays<=maxDiffDays;
}
module.exports={
    inDate
}
enum Months{
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
} 


for (let month in Months) {
    console.log(month);
}


let i:number = new Date().getMonth();
console.log(`Current month: ${Months[i]}`);
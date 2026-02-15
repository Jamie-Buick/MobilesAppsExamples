//a)
let week : String[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

week.forEach(element => {
//    console.log(element)
});;  

//b)
let numbers : number[] = [2, 4, 6, 8, 9, 10];
numbers.splice(4,1);
//console.log(numbers);

numbers.splice(4,0,9);
//console.log(numbers);

//c)
let week1 : String[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

let week1mapped = week1.map((day) => day.length);
console.log(week1mapped);

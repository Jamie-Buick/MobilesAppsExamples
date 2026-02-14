//a)
let week : String[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

week.forEach(element => {
    console.log(element)
});;  

//b)
let numbers : number[] = [2, 4, 6, 8, 9, 10];
numbers.splice(4,1);
console.log(numbers);

numbers.splice(4,0,9);
console.log(numbers);
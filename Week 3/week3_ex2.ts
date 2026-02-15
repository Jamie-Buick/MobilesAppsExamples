class Employee{
    name : string;
    job_title : string;
    years_of_service : number;
}

class EmployeeWages extends Employee {
    hours : number;
    rate : number;

    wages(hours : number, rate : number) : number {

        if (this.years_of_service > 10) {
            return (hours * rate) + 100;
        }else{
            return hours * rate;
        }
    }
}



let EmpWages = new EmployeeWages()
EmpWages.name = "John"
EmpWages.years_of_service = 11;
EmpWages.hours = 40;
EmpWages.rate = 20;

let wages = EmpWages.wages(EmpWages.hours, EmpWages.rate);

console.log(`Name: ${EmpWages.name}`);
console.log(`Wages: £${wages}`);
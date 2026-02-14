var grossSalary = 24000;
var netSalary = 0;
if (grossSalary >= 60000) {
    netSalary = grossSalary - (grossSalary * 0.6);
}
else if (grossSalary >= 40000) {
    netSalary = grossSalary - (grossSalary * 0.4);
}
else if (grossSalary >= 20000) {
    netSalary = grossSalary - (grossSalary * 0.2);
}
else {
    netSalary = grossSalary - (grossSalary * 0.1);
}
console.log("Gross Salary: " + grossSalary);
console.log("Net Salary: " + netSalary);

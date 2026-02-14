let sum = 0;

for (let i = 1; i <= 15; i++) {
    if (i % 2 != 0) {
        sum = sum + i;
    }
}

console.log("Sum: " + sum);
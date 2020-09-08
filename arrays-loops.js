// Exercise #1 - arrays
// Part 1
let queue = ["Sofia", "David", "Juan"]; 

// Part 2
queue.push("Sara", "Augustin");
queue.shift();
console.log(queue);

// Part 3
queue.splice(1, 0, "Renata");
queue.push("Elena");
console.log(queue);

// Exercise #2 - nested for loop
for (let i = 0; i < 5; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}

// Exercise #3 - while loops

// Repeatedly print value of variable xValue, decreasing it by 0.5 each time, as long as xValue remains positive
let xValue = 5; // Test
while(xValue >= 0) {
    console.log(xValue);
    xValue -= 0.5;
}

// Print all odd numbers between 1 - 100
let i = 1;
while (i < 100) {
    console.log(i);
    i += 2;
}

// Print 1 through n in square brackets 
let n = 6; // Test 
let x = 1;
while(x <= n) {
    console.log("[" + x + "]");
    x++;
}

// Compute sum of first n positive integers
let maxNumber = 5; // Test
let newNumber = 1;
let totalSum = 0;
while(newNumber <= maxNumber) {
    totalSum += newNumber;
    newNumber++;
}
console.log(totalSum); // Test
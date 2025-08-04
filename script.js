// ALAB 308.3.1: Practical Loops
// Version 1.0, 10/12/23

//---------------------------Part 1: Fizz Buzz----------------------------
// Accomplish the following:
// Loop through all numbers from 1 to 100.
for (let i = 1; i <= 100; i++) {
    // If a number is divisible by both 3 and 5, log “Fizz Buzz.”
    if ((i % 5 == 0) && (i % 3 == 0)) {
        console.log(`${i} - Fizz Buzz`);
    
    // If a number is divisible by 3, log “Fizz.”
    } else if (i % 3 == 0) {
        console.log(`${i} - Fizz`);
        
    // If a number is divisible by 5, log “Buzz.”
    } else if (i % 5 == 0) {
        console.log(`${i} - BUZZ!!`);
        
    } 
    else
    // If a number is not divisible by either 3 or 5, log the number.
    console.log(i);
}


//---------------------------Part 2: Prime Time----------------------------
// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.
console.log(`Part 2:  Prime Time`)

let choosenNum = 3;
let num = choosenNum;


// divide the number "num" by divisor starting with 2 
// (this is because 1 is normally the other factor to ALL prime numbers so it's not necessary to test with 1)
// if num is not equal to divisor then keep dividing until the remainder is 0
for (let divisor = 2; num >= divisor; divisor++) {

    // Store remainder to see if the divisor is a factor or not
    let remainder = num%divisor;

    // testing output during loop
    console.log (`num = ${num}`)
    console.log (`divisor = ${divisor}`)
    console.log(`remainder = ${remainder}`)

    // if the remainder is 0 and the number is greater than the divisor
    // the number is not a prime number
    // go to the next number
    // Example: 4/2 == 0 and 4 > 2
    if (remainder == 0 && num > divisor) {
        console.log(`${num} is not a prime number`);
        num++;
        divisor = 1;
        // continue;
    // Else if the number is a prime number and equal to the choosen number
    // then go to the next number
    // Example: 3%3 = 0 and 3 = 3 and choosenNumber = 3 then 3 is changed to 4
    } else if ((remainder == 0 && num == divisor) && (choosenNum == num)) {
        num++;
        divisor = 1;
    } else if ((remainder == 0 && num == divisor) && (choosenNum != num)) {
        console.log(`${num} is the next prime number after ${choosenNum}`)
    }
}


    


//--------------------------- Part 3: Feeling Loopy ----------------------------
console.log(`Part 3: Feeling Loopy`);

const csvData = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26'
console.log(csvData)

// convert the string into an array where each indencies is segment before '\n'
// Example: rows[0] = "ID, Name, Occupation, Age"
//          rows[1] = "42,Bruce,Knight,41"
let rows = csvData.split('\n');
console.log(rows);

//for each row of rows
// save a the words of one row into an array call cells
for (row of rows) {
    let cells = row.split(',');
    console.log(cells);
}





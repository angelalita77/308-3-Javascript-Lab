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






// Part 2

/* for (let i=1; i<=20; i++){
    console.log(i);
} */

/* for (let i=0; i<=200; i+=2){
    console.log(i);
} */

for (let i = 0; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} FizzBuzz`);
    } else if (i % 3 === 0) {
        console.log(`${i} Fizz`);
    } else if (i % 5 === 0) {
        console.log(`${i} Buzz`);
    }
    console.log(i);
}
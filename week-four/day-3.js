// Part 2

/* for (let i=1; i<=20; i++){
    console.log(i);
} */

/* for (let i=0; i<=200; i+=2){
    console.log(i);
} */

/* for (let i = 0; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} FizzBuzz`);
    } else if (i % 3 === 0) {
        console.log(`${i} Fizz`);
    } else if (i % 5 === 0) {
        console.log(`${i} Buzz`);
    }
    console.log(i);
} */

/* const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee[2] += 1;
console.log(plantee);
wolfy[3] = 'Gotham City'
console.log(wolfy);
dart[3] = ["Upside Down", "Hawkins"]
console.log(dart);
wolfy[0] = 'Gameboy'
console.log(wolfy); */

/* turtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']
for(let i=0; i<turtles.length; i++){
    console.log(turtles[i].toUpperCase());
} */

/* 
const favMovies = [
    'Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 
    'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 
    'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 
    'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'
];

console.log(favMovies.sort()); // Permanently sorts the array in alphabetical order
console.log(favMovies.pop());
console.log(favMovies.push('Guardians of the Galaxy'));
console.log(favMovies.reverse());
console.log(favMovies.shift());
console.log(favMovies.unshift()); // unshift returns the index of the final item if no item is passed into it
console.log(favMovies.indexOf('Django Unchained'));
console.log(favMovies.splice(14, 1, 'Avatar'));
let lastHalfFavMovies = favMovies.slice((favMovies.length / 2));
console.log(lastHalfFavMovies); // taking the return from the slice and attaching it to a value for later use
console.log(favMovies.indexOf('Fast and Furious')); // if the element we were searching for wasnt in the array it would return a -1
// using let would produce the same result because slice does not mutate the array 
*/

const whereIsWaldo = [
                        ["Timmy", "Frank"], 
                        "Eggbert", 
                        ["Lucinda", "Jacc", "Neff", "Snoop"],
                        ["Petunia", 
                            ["Baked Goods", "Waldo"]
                        ]
                    ];

console.log(whereIsWaldo.splice(1, 1));
console.log(whereIsWaldo[1][2]);
whereIsWaldo[1][2] = "No One";
console.log(whereIsWaldo);
console.log(whereIsWaldo[2][1][1]);
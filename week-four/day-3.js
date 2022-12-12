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

/* 
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
 */

/* 
messages = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]
for (let i=1; i<=20; i++){
    if (i % 2 === 0) {
        decidingInt = Math.random();
        if (decidingInt <= .33) {
            console.log(messages[0], i)
        } else if (decidingInt >= .33 && decidingInt <= .66) {
            console.log(messages[1], i)
        } else if (decidingInt >= .66 && decidingInt <= 1) {
            console.log(messages[2], i)
        }
    } else {
        console.log("Love me, pet me! HSSSSSS!", i);
    }

}
 */

/* 
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

console.log(nums.sort());
let answer = Math.floor(nums.length / 2)
console.log(nums[answer]);
 */


const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

let kristynsShoe = kristynsCloset[0];
thomsCloset[2].push(kristynsShoe);
console.log(thomsCloset)

let thomsOutfit1 = [thomsCloset[0][0], thomsCloset[1][0], thomsCloset[2][0]]
let thomsOutfit2 = [thomsCloset[0][1], thomsCloset[1][1], thomsCloset[2][1]]
let thomsOutfit3 = [thomsCloset[0][2], thomsCloset[1][2], thomsCloset[2][2]]
 
let kristynsOutfit1 = [kristynsCloset[0], kristynsCloset[3], kristynsCloset[5]] 
let kristynsOutfit2 = [kristynsCloset[2], kristynsCloset[5], kristynsCloset[4]]
let kristynsOutfit3 = [kristynsCloset[3], kristynsCloset[5], kristynsCloset[4]]

console.log(`Kristyn is wearing ${kristynsOutfit1[0]} with ${kristynsOutfit1[1]} and ${kristynsOutfit1[2]}`)
console.log(`Kristyn is wearing ${kristynsOutfit2[0]} with ${kristynsOutfit2[1]} and ${kristynsOutfit2[2]}`)
console.log(`Kristyn is wearing ${kristynsOutfit3[0]} with ${kristynsOutfit3[1]} and ${kristynsOutfit3[2]}`)

console.log(`Tom is wearing ${thomsOutfit1[0]} with ${thomsOutfit1[1]} and ${thomsOutfit1[2]}`)
console.log(`Tom is wearing ${thomsOutfit2[0]} with ${thomsOutfit2[1]} and ${thomsOutfit2[2]}`)
console.log(`Tom is wearing ${thomsOutfit3[0]} with ${thomsOutfit3[1]} and ${thomsOutfit3[2]}`)
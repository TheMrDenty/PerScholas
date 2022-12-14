class Hamster {
    constructor(id, owner = '', name, price = 15){
        this.id = id;
        this.owner = owner;
        this.name = name;
        this.price = price;
    }
    wheelRun(){
        return 'squeak squeak';
    }
    eatFood(){
        return 'nibble nibble';
    }
    getPrice(){
        return this.price;
    }
}

let hamster1 = new Hamster(1, 'Jimmy', 'Hammy', 100);
let hamster2 = new Hamster(2, 'tommy', 'phil', 100);
let hamster3 = new Hamster(3, 'maria', 'spire', 100);
// console.log(hamster1, hamster1.wheelRun(), hamster1.getPrice(), hamster1.eatFood()) 

class Person {
    constructor(name, age = 0, height = 0, weight = 0, mood = 0, hamsters = [], bankAccount = 0){
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.mood = mood;
        this.hamsters = hamsters;
        this.bankAccount = bankAccount;
    }
    getName(){
        return `This persons name is ${this.name}\n`;
    }
    getAge(){
        return `This person is ${this.age} years old\n`;
    }
    getWeight(){
        return `This person weighs ${this.weight} lbs.\n`;
    }
    greet(){
        return `Hello my name is ${this.name}!\n`
    }
    eat(){
        this.weight++;
        this.mood++;
        return `${this.name} ate some food. their weight is now ${this.weight} and they are now ${this.mood}/100 happy`;
    }
    exercise(){
        this.weight--;
        return `${this.name} has worked out and has lost one pound! their weight is now ${this.weight}\n`;
    }
    ageUp(){
        return (
            this.age++,
            this.height += .5,
            this.mood--,
            this.bankAccount += 10,
            `${this.name} has aged up! They are now ${this.age} years old and are now ${this.height} inches tall, ${this.weight} lbs., ${this.mood}/100 happy, and have a bank balance of ${this.bankAccount}\n`
        );
    }
    buyHamster(hamster){
        this.hamsters.push(hamster);
        const array = this.getAllHamsters(this.hamsters)
        this.mood -= 10;
        console.log(hamster.getPrice())
        this.bankAccount -= hamster.getPrice();
        return `${this.name} has bought ${hamster.name} for ${hamster.getPrice()} and is now ${this.mood}/100 happy. They now have these hamsters${array}`
    }
    getAllHamsters(hamsters) {
        let array = []
        hamsters.forEach(hamster => {
            array.push(' ' + hamster.name + ' ' + hamster.id)
        });
        return array
    }
}

// instantuating timmy
let timmy = new Person('Timmy')
console.log(timmy)
// aging 5 years
console.log(timmy.ageUp())
console.log(timmy.ageUp())
console.log(timmy.ageUp())
console.log(timmy.ageUp())
console.log(timmy.ageUp())
console.log(timmy)
// eating 5 times
console.log(timmy.eat())
console.log(timmy.eat())
console.log(timmy.eat())
console.log(timmy.eat())
console.log(timmy.eat())
console.log(timmy)
// exercising 5 times
console.log(timmy.exercise())
console.log(timmy.exercise())
console.log(timmy.exercise())
console.log(timmy.exercise())
console.log(timmy.exercise())
console.log(timmy)
// age up 9 times
console.log(timmy.ageUp())
console.log(timmy.ageUp())
console.log(timmy.ageUp())
console.log(timmy.ageUp())
console.log(timmy.ageUp())
console.log(timmy.ageUp())
console.log(timmy.ageUp())
console.log(timmy.ageUp())
console.log(timmy.ageUp())
console.log(timmy)
// create Gus
let gus = new Hamster(99, 'Timmy', 'Gus')
console.log(gus)
//Timmy buys Gus
console.log(timmy.buyHamster(gus))
console.log(timmy)
// age Timmy 15 years
console.log(timmy.ageUp())
console.log(timmy.ageUp())
console.log(timmy.ageUp())
console.log(timmy.ageUp())
console.log(timmy.ageUp())
console.log(timmy.ageUp())
console.log(timmy.ageUp())
console.log(timmy.ageUp())
console.log(timmy.ageUp())
console.log(timmy.ageUp())
console.log(timmy.ageUp())
console.log(timmy.ageUp())
console.log(timmy.ageUp())
console.log(timmy.ageUp())
console.log(timmy.ageUp())
console.log(timmy)
// Timmy eats twice
console.log(timmy.eat())
console.log(timmy.eat())
console.log(timmy)
// exercising 2 times
console.log(timmy.exercise())
console.log(timmy.exercise())
console.log(timmy)

class Dinner {
    constructor (appetizer, entree, dessert) {
        this.appetizer = appetizer;
        this.entree = entree;
        this.dessert = dessert;
    }
}

class Chef extends Dinner {
    constructor (name) {
        super(name);
        this.name = name;
        this.dinners = [];
    }
    Order(appetizer, entree, dessert) {
        const newDinner = new Dinner(appetizer, entree, dessert);
        this.dinners.push(newDinner);
        return `Chef ${this.name} prepares a 3 course meal that includes ${appetizer} for a starter, ${entree} for the main course, and ${dessert} to finish off with`
    }
    findDinner (index) {
        return this.dinners[index];
    }
}

const Chef1 = new Chef('Jimmy');
console.log(Chef1.Order('Tapas', 'Lamb Chops', 'Espresso Shot'));
console.log(Chef1.Order('Mozz Sticks', 'Spaghetti', 'Cheese Cake'));
console.log(Chef1.Order('Cheese Curds', 'Cheeseburger', 'Ice Cream'));
console.log(Chef1.findDinner(0));
console.log(Chef1.findDinner(1));
console.log(Chef1.findDinner(2));

/* 
    A.

How do we assign a value to a variable? -- with let or const and in older versions var
How do we change the value of a variable? -- assignment opperators. consts cant be changed
How do we assign an existing variable to a new variable? -- assignment opperators
Remind me, what are declare, assign, and define? declare is to initialize, assign is to give value to, define is to call?
What is pseudocoding and why should you do it? pseudocode is a way to organize code to show dependency or function. in an if block 
you wouldnt indent the if statement itself just the block of code that relies on the statement itself. It helps with
readability and understanding of your code for yourself and for other programmers
What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it? 
80-90% would be spent figuring out how to make a program work while around 10% is actually writing code
*/

// B.

/* let firstVariable = 'Hello World';
firstVariable = 12;
let secondVariable = firstVariable;
secondVariable = 'String';
// the value of firstVariable is 12
let yourName = 'Jamie';
console.log(`Hello my name is ${yourName}`); */

// C. 

/* const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' == 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false == false)
console.log(e == 'Kevin');
console.log(a != b != c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a == a != d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48'); */

// D.

/* let animal = 'cow';

if (animal === 'cow') {
    console.log('moooooo');
} else {
    console.log('Hey! Youre not a cow');
} */

// E.

/* let personsAge = 15;

if (personsAge > 16) {
    console.log('Here are the keys!')
} else {
    console.log('Sorry youre too young')
} */

// LOOPS
// A.

/* for (let i = 0; i <= 10; i++){
    console.log(i)
}

for (let i = 10; i <= 400; i++){
    console.log(i)
}

for (let i = 12; i <= 4000; i += 3){
    console.log(i)
} */

// B. 

/* for (let i = 1; i <= 100; i++){
    if(i % 2 === 0){
        console.log(`${i} <-- is an even number`)
    } else {
        console.log(i)
    }
} */

// C.

/* for (let i = 0; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0) {
        console.log(`I found a ${i}. Three is a crowd, High Five!`);
    } else if (i % 3 === 0) {
        console.log(`I found a ${i}. Three is a crowd`);
    } else if (i % 5 === 0) {
        console.log(`I found a ${i}. High Five`);
    }
} */

// D. 

/* let bankAccount = 0;

for (let i = 1; i <= 10; i++){
    bankAccount += (i);
}

console.log(bankAccount); */

/* let bankAccount = 0;

for (let i = 1; i <= 100; i++){
    bankAccount += (i*2);
}

console.log(bankAccount); */

// Arrays & Control flow
// A.

/* 
What are the things in an array called? elements
Do Arrays guarantee those things will be in order? yes
What real-life thing could you model with an array? a queue to enter a website
*/

// B.

// let quotes = ['This quote', 'That quote', 'and another quote'];

// C.

/* const randomThings = [1, 10, "Hello", true]

console.log(randomThings[0]);
console.log(randomThings[2] = 'World')
console.log(randomThings); */

// D.

/* const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

console.log(ourClass[2]);
console.log(ourClass[4] = 'Octocat');
ourClass.push('Cloud City');
console.log(ourClass); */

// E.

/* const myArray = [5, 10, 500, 20];

myArray.push('Aegon');
console.log(myArray);
myArray.shift();
console.log(myArray);
myArray.unshift('Bob Marley');
console.log(myArray);
myArray.pop();
console.log(myArray);
myArray.reverse();
console.log(myArray); */

/* 
Did you mutate the array? yes
What does mutate mean? to change the value or contents of an object or variable
Did the .reverse()method return anything? it returned the contents of the array, reversed.
*/

// F.

/* let num = 110;

if (num < 100) {
    console.log(`${num} is a little number`);
} else {
    console.log(`${num} is a big number`);
} */

// G.

/* let num = 7;

if (num < 5) {
    console.log(`${num} is a little number`);
} else if (num > 10) {
    console.log(`${num} is a big number`);
} else {
    console.log('monkey');
} */

// H.

/* const kristynsCloset = [
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

console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);
kristynsCloset.splice(6, 0, 'raybans');
console.log(kristynsCloset);
kristynsCloset[5] = 'stained knit hat';
console.log(kristynsCloset);
console.log(thomsCloset[0][1])
console.log(thomsCloset[1][1])
console.log(`Toms fit for the day consists of ${thomsCloset[0][3]}, ${thomsCloset[1][0]}, and ${thomsCloset[2][2]}`);
thomsCloset[1][2] = 'Footie Pajams';
console.log(thomsCloset[1]) */

// Functions
// A.

/* function printGreeting(name) {
    console.log(`Hello there, ${name}`);
}

printGreeting('jamie'); */

// B.

/* function printCool(name) {
    console.log(`${name} is cool`);
}

printCool('jamie'); */

// C.

/* function calculateCube(l){
    console.log(l**3);
}

calculateCube(5) */

// D.

/* function isVowel(valueToCheck) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for(let i = 0; i<vowels.length; i++) {
        if (valueToCheck === vowels[i]) {
            return true;
        } 
    }
    return false;
    
}

console.log(isVowel('a')) */

// E.

/* function getTwoLengths(string1, string2) {
    let lengthsArray = [];
    lengthsArray.push(string1.length);
    lengthsArray.push(string2.length);

    return lengthsArray;
}

console.log(getTwoLengths("Hank", "Hippopopalous")); */


// F.

/* function getMultipleLengths(arrayOfStrings) {
    let lengthsArray = [];
    for(let i=0; i < arrayOfStrings.length; i++){
        lengthsArray.push(arrayOfStrings[i].length);
    }
    return lengthsArray;
}

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"])); */

// G.

/* function maxOfThree(x, y, z) {
    if(x >= y && x >= z){
        return x;
    } else if (y >= x && y >= z) {
        return y;
    } else if (z >= x && z >= y) {
        return z;
    } else {
        console.log('Invalid input');
    }
}

console.log(maxOfThree(9, 100, 5));
 */

// H. 

/* function printLongestWord(arrayOfStrings) {
    let length = 0;
    let longest = 0;
    for (let i=0; i < arrayOfStrings.length; i++){
        if (arrayOfStrings[i].length > length){
            length = arrayOfStrings[i].length;
            longest = arrayOfStrings[i];

        }
    }
    return longest;
}


console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
 */

// Objects
// A.

/* let user = {
    name: 'jamie',
    email: 'jamietp113@gmail.com',
    age: 22,
    purchased: []
}
console.log(user) */

// B.

/* user.email = 'newemail@gmail.com';
user.age++;
console.log(user) */

// C.

/* user.location = 'NY';
console.log(user) */

// D.

/* user.purchased.push("carbohydrates");
user.purchased.push("peace of mind");
user.purchased.push("Merino jodhpurs");
console.log(user);
console.log(user.purchased[2]);

// E.

user.friend = {
    name: 'Joey',
    age: '22',
    location: 'NY',
    purchased: []
}
console.log(user);
console.log(user.friend.name);
console.log(user.friend.location);
user.friend.age = 55;
console.log(user.friend.age);
user.friend.purchased.push('The One Ring');
user.friend.purchased.push('A latte');
console.log(user);
console.log(user.friend.purchased[1]);
 */
// F.

/* for(let i=0; i<user.purchased.length; i++){
    console.log(user.purchased[i])
}

for(let i=0; i<user.friend.purchased.length; i++){
    console.log(user.friend.purchased[i])
}
 */

// G.

/* function updateUser() {
    user.age++
    user.name = user.name.toUpperCase();
}
console.log(user.age, user.name);
updateUser()
console.log(user.age, user.name);

function oldAndLoud(person) {
    person.age++
    person.name = person.name.toUpperCase();
}
updateUser(user)
console.log(user.age, user.name.toUpperCase());
 */
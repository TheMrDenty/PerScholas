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



// Testing 

//let person1 = new Person('Terry', 21, 64, 120, 54, [], 200)
// console.log(person1);
// console.log(person1.getName());
// console.log(person1.getAge());
// console.log(person1.getWeight());
// console.log(person1.greet());
// console.log(person1.eat());
// console.log(person1.exercise());
// console.log(person1.ageUp());

/* console.log(person1.buyHamster(hamster1))
console.log(person1.buyHamster(hamster2))
console.log(person1.buyHamster(hamster3)) */


/* let array = ['jimmy', 'terry', 'Phil']
function getAllHamsters(hamsters) {
    
    hamsters.forEach(element => {
        
        console.log(element);
    });
}

getAllHamsters(array) */
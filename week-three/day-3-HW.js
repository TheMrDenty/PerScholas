class Person {
    constructor(hairColor, name, personalityType){
        this.hairColor = hairColor;
        this.name = name;
        this.personalityType = personalityType;
    }
    sayHello() {
        return `${this.name} says hello!`
    }
    hair() {
        return `${this.name}'s hair color is ${this.hairColor}`
    }
    personality(){
        return `${this.name}'s personality is ${this.personalityType}`
    }
}

class Governor extends Person{
    static district = 'Texas';
    static party = 'independent';
    constructor(hairColor, name, personalityType, canMakeLaws, yearsServed) {
        super(hairColor, name, personalityType);
        this.canMakeLaws = canMakeLaws;
        this.yearsServed = yearsServed;
    }
    service() {
        return `This Governor has served ${this.yearsServed} years`
    }
    laws() {
        if (this.canMakeLaws === true) {
            return 'This Governor can make laws'
        } else {
            return 'This Governor cannot make laws'
        }
    }
}
let Governor1 = new Governor('white', 'Benny', 'Sketchy', true, 12)
console.log(Governor.district, Governor.party, Governor1)

class PostalWorker extends Person{
    deliver(){
        return `${this.name} has delivered your mail`
    }
    runFromDog(){
        return 'AHHHH PLEASE GET YOUR DOG BEFORE HE GETS ME!!!'
    }
}

class Chef extends Person{
    constructor(hairColor, name, personalityType) {
        super(hairColor, name, personalityType);
    }
    cooks(){
        return `${this.name} has prepared a wonderful meal`
    }
    cleans(){
        return `${this.name} cleans up their mess`
    }
}

let Chef1 = new Chef('blonde', 'John', 'Quiet')
let Chef2 = new Chef('brown', 'Tom', 'Loud')
let PostalWorker1 = new PostalWorker('bald', 'Terry', 'Scary')
let PostalWorker2 = new PostalWorker('green', 'Casandra', 'Outgoing')

console.log(Chef1.cooks(), Chef1.cleans(), Chef1)
console.log(Chef2.cooks(), Chef2.cleans(), Chef2)
console.log(PostalWorker1.deliver(), PostalWorker1.runFromDog(), PostalWorker1)
console.log(PostalWorker2.deliver(), PostalWorker2.runFromDog(), PostalWorker2)
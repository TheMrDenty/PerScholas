class Person {
    constructor(hairColor, name, personalityType){
        this.hairColor = hairColor;
        this.name = name;
        this.personalityType = personalityType;
    }
    sayHello() {
        console.log(`${this.name} says hello!`)
    }
    hair() {
        console.log(`${this.name}'s hair color is ${this.hairColor}`)
    }
    personality(){
        console.log(`${this.name}'s personality is ${this.personalityType}`)
    }
}

class Governor extends Person{
    constructor(canMakeLaws, yearsServed) {
        this.canMakeLaws = canMakeLaws;
        this.yearsServed = yearsServed;
    }
    service() {
        console.log(`This Governor has served ${this.yearsServed} years`)
    }
    laws() {
        if (this.canMakeLaws === true) {
            console.log('This Governor can make laws')
        } else {
            console.log('This Governor cannot make laws')
        }
    }
}

class PostalWorker extends Person{
    deliver(){
        console.log(`${this.name} has delivered your mail`)
    }
    runFromDog(){
        console.log('AHHHH PLEASE GET YOUR DOG BEFORE HE GETS ME!!!')
    }
}

class Chef extends Person{
    cooks(){
        console.log(`${this.name} has prepared a wonderful meal`)
    }
    cleans(){
        console.log(`${this.name} cleans up their mess`)
    }
}

let Chef1 = new Chef('blonde', 'John', 'Quiet')
let Chef2 = new Chef('brown', 'Tom', 'Loud')
let PostalWorker1 = new PostalWorker('bald', 'Terry', 'Scary')
let PostalWorker2 = new PostalWorker('green', 'Casandra', 'Outgoing')

console.log(Chef1.cooks(1), Chef1.cleans())
console.log(Chef2.cooks(), Chef2.cleans())
console.log(PostalWorker1.deliver(), PostalWorker1.runFromDog())
console.log(PostalWorker2.deliver(), PostalWorker2.runFromDog())
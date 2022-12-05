class Cat {
    constructor (yearBorn, color, name) {
        this.yearBorn = yearBorn;
        this.color = color;
        this.name = name;
    }
    age() {
        let date = new Date();
        let age = date.getFullYear() - this.yearBorn;
        console.log(`This cat is ${age}`);
    }
    looks() {
        console.log(`This cat is ${this.color}`);
    }
    identity() {
        console.log(`This cats name is ${this.name}`);
    }
}

let cat1 = new Cat(2012, 'grey', 'Geoff');
let cat2 = new Cat(2020, 'brown', 'Gerald');
console.log(cat1, cat2);
console.log(cat1.age(),cat1.looks(), cat2.identity());

class Pirate {
    constructor(beard, pegLeg, name){
        this.beard = beard;
        this.pegLeg = pegLeg;
        this.name = name;
    }
    identity() {
        console.log(`This pirates name is ${this.name}`);
    }
    legStatus() {
        console.log(`This pirate has a pegLeg: ${this.pegLeg}`);
    }
    facialHair() {
        console.log(`This pirate has a beard: ${this.beard}`);
    }
  
  }

let blackPearl = [new Pirate(true, true, 'Black Beard'), new Pirate(true, false, 'Jack Sparrow'), new Pirate(false, false, 'Todd')];
let jollyRoger = [new Pirate(false, true, 'Beardoless'), new Pirate(false, false, 'Phil J. Fry'), new Pirate(true, true, 'Wilfred')];

for (let i = 0; i < blackPearl.length; i++){
    console.log(blackPearl[i].identity(), blackPearl[i].legStatus(), blackPearl[i].facialHair());
}
for (let i = 0; i < jollyRoger.length; i++){
    console.log(jollyRoger[i].identity(), jollyRoger[i].legStatus(), jollyRoger[i].facialHair());
}
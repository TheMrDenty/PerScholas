class Hamster {
    constructor(owner = '', name, price = 15){
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
        return `this hamster is ${this.price}$`;
    }
}

/* let hamster1 = new Hamster('Jimmy', 'Hammy', 100);
console.log(hamster1, hamster1.wheelRun(), hamster1.getPrice(), hamster1.eatFood()) */
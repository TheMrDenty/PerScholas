
/* classes */
class Ship {
    constructor(name, team, hull, firepower, accuracy) {
        this.name = name,
        this.team = team,
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    attack(enemyShip) {
        enemyShip.hull -= this.firepower;
        return `${this.name} has attacked ${enemyShip.name}'s ship and dealt ${this.firepower}dp to their health leaving them with ${enemyShip.hull}hp`
    }
}

class AlienShip extends Ship {
    constructor(name, team, hull, firepower, accuracy){
        super(name, team, hull, firepower, accuracy);

        
    }
}








/* functions */

function randomNumberGenerator(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min) + min);
}

function randomAlienNameGenerator() {
    let alienNames = [
        'Medcono Namge', 'Margoba Crull', 'Discobeez Eraton', 'Googla Jango', 'Spanka Ruoat',
        'Ormon Nals', 'Jirab Favaco', 'Busawe Entano', 'Manbagea Worge',  'Mondog Ename',
        'Fantaba Blackveta', 'Nungagen Tinka', 'Accunyot Getapeca', 'Bantona Belgat', 'Orgata Shemevat',
        'Zumbana Wordinat', 'Rantan Flavyol', 'Treshandit Weeruni', 'Latnamy Prebant', 'Busra Amesat',
    ];
    
    //                                          length-1 bc of 0 idx
    let selectedIdx = randomNumberGenerator(0, (alienNames.length - 1));

    return alienNames[selectedIdx];

}

function PlayerShipBuilder() {
    return new Ship('U.S.S. Assembly', 'U.S. Space Force', 20, 5, .7)
}

function AlienShipBuilder() {
    
    // setting each ships value
    let name = randomAlienNameGenerator();
    let team = 'alien';
    let hull = randomNumberGenerator(3, 6);
    let firepower = randomNumberGenerator(2, 4);
    let accuracy = Math.round(100*(Math.random() * (.8 - .6) + .6))/100;
    // declaring new ship object
    let alienShip = new AlienShip(name, team, hull, firepower, accuracy );

    return alienShip;
}

module.exports = {PlayerShipBuilder, AlienShipBuilder}
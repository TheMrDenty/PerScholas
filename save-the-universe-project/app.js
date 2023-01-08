const ship = require('./ship')
// Earth has been attacked by a horde of aliens! You are the captain of the USS Assembly, 
// on a mission to destroy every last alien ship.

// Battle the aliens as you try to destroy them with your lasers.

// There are six alien ships. The aliens' weakness is that they are too logical and attack one at a time: 
// they will wait to see the outcome of a battle before deploying another alien ship. Your strength is that you have 
// the initiative and get to attack first. However, you do not have targeting lasers and can only attack the aliens in order. 
// After you have destroyed a ship, you have the option to make a hasty retreat.



// building alien ship
let alienShip = ship.AlienShipBuilder();
// building users ship
let userShip = ship.PlayerShipBuilder();




console.log(alienShip);
console.log(userShip.attack(alienShip));
console.log(alienShip);

console.log(alienShip.attack(userShip));
console.log(userShip);





/* Game Layout */

// You attack the first alien ship


// If the ship survives, it attacks you


// If you survive, you attack the ship again


// If it survives, it attacks you again ... etc


// If you destroy the ship, you have the option to attack the next ship or to retreat


// If you retreat, the game is over, perhaps leaving the game open for further developments or options


// You win the game if you destroy all of the aliens


// You lose the game if you are destroyed
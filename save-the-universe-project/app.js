/* const ship = require('./ship') */



const storyTextElement = document.getElementById('story-text');
const optionButtonsElement = document.getElementById('option-buttons');


// Earth has been attacked by a horde of aliens! You are the captain of the USS Assembly, 
// on a mission to destroy every last alien ship.

// Battle the aliens as you try to destroy them with your lasers.

// There are six alien ships. The aliens' weakness is that they are too logical and attack one at a time: 
// they will wait to see the outcome of a battle before deploying another alien ship. Your strength is that you have 
// the initiative and get to attack first. However, you do not have targeting lasers and can only attack the aliens in order. 
// After you have destroyed a ship, you have the option to make a hasty retreat.


/* 
// building alien ship
let alienShip = ship.AlienShipBuilder();
let attackUser = alienShip.attack(userShip);
// building users ship
let userShip = ship.PlayerShipBuilder();
let attackAlien = userShip.attack(alienShip);
 */


/* console.log(alienShip);
console.log(userShip.attack(alienShip));
console.log(alienShip);

console.log(alienShip.attack(userShip));
console.log(userShip); */


let state = {};

function startGame() {
    state = {};
    showTextNode(1);
}


/* Game Layout */

function showTextNode(textNodeIndex) {
    // finds a text node that equals the passed in textNodeIndex
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    storyTextElement.innerText = textNode.storyText;

    // clears option buttons
    while(optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    // for each option in the textNodes options array
    textNode.options.forEach(option => {
        // if option has null state or a state
        if(showOption(option)) {
            // create button add text, btn class, and a event listener looking for
            // a click on a option then runs selectOption function and passes in 
            // user choice
            const button = document.createElement('button');
            button.innerText = option.optionText;
            button.classList.add('btn');
            button.addEventListener('click', () => selectOption(option));
            // appends created button on our element
            optionButtonsElement.appendChild(button);
        }
    })
}

function showOption(option) {
    
    return option.requiredState == null || option.requiredState(state);
}


function selectOption(option) {
    // stores selected nextTexts id 
    const nextTextNodeId = option.nextText;
    // if its 0 or less then game over and restart
    if(nextTextNodeId <= 0) {
        return startGame();
    }
    
    // updates state 
    state = Object.assign(state, option.setState);

    

    // shows next text and options
    showTextNode(nextTextNodeId);
}

// You attack the first alien ship



// If the ship survives, it attacks you


// If you survive, you attack the ship again


// If it survives, it attacks you again ... etc


// If you destroy the ship, you have the option to attack the next ship or to retreat


// If you retreat, the game is over, perhaps leaving the game open for further developments or options


// You win the game if you destroy all of the aliens


// You lose the game if you are destroyed



const textNodes = [
    {
        id:1,
        storyText: "You notice a ship in the distance.",
        options: [
            {
                optionText: "get a closer look",
                setState: { attack: true},
                nextText: 2,
            },
            
        ]
    },
    {
        id:2,
        storyText: 'filler',
        options: [
            {
                optionText: 'attack',
                // attackAlien,
                nextText: 3,
            },
            {
                optionText: 'leave the area',
                nextText: 4,
            },
            {
                optionText: 'filler3',
                // attackAlien,
                nextText: 3,
            },
            {
                optionText: 'filler4',
                nextText: -3,
            },,
        ]
    },
    {
        id:3,
        storyText: 'you have attacked the ship'
    },
    {
        id:4,
        storyText: 'You abandoned the fight and lost the game',
        options: [
            {
                optionText:'Restart',
                nextText: -1
            }
        ]
    }
]

startGame();
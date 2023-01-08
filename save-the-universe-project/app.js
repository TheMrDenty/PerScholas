import {PlayerShipBuilder, AlienShipBuilder} from '/ship.js';



const storyTextElement = document.getElementById('story-text');
const optionButtonsElement = document.getElementById('option-buttons');
const displayH1Element = document.getElementById('action-text');
const playerNameElement = document.getElementById('player-hull');
const playerHpElement = document.getElementById('player-hull-hp');

const alienNameElement = document.getElementById('alien-hull');

// Earth has been attacked by a horde of aliens! You are the captain of the USS Assembly, 
// on a mission to destroy every last alien ship.

// Battle the aliens as you try to destroy them with your lasers.

// There are six alien ships. The aliens' weakness is that they are too logical and attack one at a time: 
// they will wait to see the outcome of a battle before deploying another alien ship. Your strength is that you have 
// the initiative and get to attack first. However, you do not have targeting lasers and can only attack the aliens in order. 
// After you have destroyed a ship, you have the option to make a hasty retreat.






/* console.log(alienShip);
console.log(userShip.attack(alienShip));
console.log(alienShip);

console.log(alienShip.attack(userShip));
console.log(userShip); */


let state = {};

function startGame() {
   /*  // building alien ship
    let alienShip = ship.AlienShipBuilder();
    let attackUser = alienShip.attack(userShip);
    // building users ship
    let userShip = ship.PlayerShipBuilder();
    let attackAlien = userShip.attack(alienShip);
     */
    let playerShip = PlayerShipBuilder();
    let alienShip = AlienShipBuilder();

    playerNameElement.innerHTML = `
    ${playerShip.name}
        <h4 id="player-hull-hp">
        ${playerShip.hull}
        </h4>
    `;
    
    //playerHpElement.innerHTML = `<h4 id="alien-hull-hp">${playerShip.name}</h4>`

    alienNameElement.innerText = alienShip.name;

    console.log(playerShip, playerHpElement.innerHTML = `<h4>${playerShip.name}</h4>`);
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


    // Step 1 : You attack the first alien ship

    // if player chooses to attack
    if(option.optionText === 'attack'){
        /* attackAlien; */
        displayH1Element.innerText = 'Player attacked Alien';
        // update state 
        state = Object.assign(state, option.setState);
        // shows text menu 3
        showTextNode(2);
    } else {
    
    // updates state 
    state = Object.assign(state, option.setState);

    console.log(state);

    // shows next text and options
    showTextNode(nextTextNodeId);
    }
}





// Step 2 : If the ship survives, it attacks you


// Step 3 : If you survive, you attack the ship again


// Step 4 : If it survives, it attacks you again ... etc


// Step 5 : If you destroy the ship, you have the option to attack the next ship or to retreat


// Step 6 : If you retreat, the game is over, perhaps leaving the game open for further developments or options


// Step 7 : You win the game if you destroy all of the aliens


// Step 8 : You lose the game if you are destroyed



const textNodes = [
    {
        id:1,
        storyText: "You notice a ship in the distance.",
        options: [
            {
                optionText: "get a closer look",
                
                nextText: 2,
            },
            
        ]
    },
    {
        id:2,
        storyText: 'you notice its an enemy ship. How would you like to proceed',
        options: [
            {
                optionText: 'attack',
                setState: { attack: true},
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
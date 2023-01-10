import {PlayerShipBuilder, AlienShipBuilder} from '/ship.js';



const storyTextElement = document.getElementById('story-text');
const optionButtonsElement = document.getElementById('option-buttons');
const displayH1Element = document.getElementById('action-text');
const playerNameElement = document.getElementById('player-hull');
const alienNameElement = document.getElementById('alien-hull');

// Earth has been attacked by a horde of aliens! You are the captain of the USS Assembly, 
// on a mission to destroy every last alien ship.

// Battle the aliens as you try to destroy them with your lasers.

// There are six alien ships. The aliens' weakness is that they are too logical and attack one at a time: 
// they will wait to see the outcome of a battle before deploying another alien ship. Your strength is that you have 
// the initiative and get to attack first. However, you do not have targeting lasers and can only attack the aliens in order. 
// After you have destroyed a ship, you have the option to make a hasty retreat.


// declaring variables for global storage of player ship and alien ship
let playerShip = PlayerShipBuilder();
let alienShip;
// setting players health bar
playerNameElement.innerHTML = `
    ${playerShip.name}
        <h4>Hull Integrity</h4>
        <h4 id="player-hull-hp">
        ${playerShip.hull}
        </h4>
`;

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

// Step 4 : If it survives, it attacks you again ... etc

function selectOption(option) {
    /* console.log(playerShip.hull); */


    // stores selected nextTexts id 
    let nextTextNodeId = option.nextText;


    console.log(nextTextNodeId);


    // if its 0 or less then game over and restart
    if(nextTextNodeId <= 0) {
        // setting variables to initial values
        playerShip = PlayerShipBuilder();
        alienShip = {};
        state = {};
        // setting players health bar
        playerNameElement.innerHTML = `
            ${playerShip.name}
                <h4>Hull Integrity</h4>
                <h4 id="player-hull-hp">
                ${playerShip.hull}
                </h4>
        `;

        alienNameElement.innerHTML = ``;
        
        
        console.log(state);
        


        return showTextNode(1);
    }

    /* console.log(option); */
    /* console.log(option.setState.spawnShip);
    console.log(state); */

    // Step 5 : If you destroy the ship, you have the option to attack the next ship or to retreat
    // if player approaches ship
    if (option.setState.spawnShip) {
        
        console.log('alien ship spawned');

        // build alien ship
        alienShip = AlienShipBuilder();

        // set its health bar
        alienNameElement.innerHTML = `
            ${alienShip.name}
                <h4>Hull Integrity</h4>
                <h4 id="alien-hull-hp">
                ${alienShip.hull}
                </h4>
        `;
        // show ship interactions
        showTextNode(2);


        // Step 1 : You attack the first alien ship
        // else if player chooses to attack
    } else if(option.setState.attack){

        // attack
        playerShip.attack(alienShip);

        // display attack message
        displayH1Element.innerHTML = `The ${playerShip.name} attacked ${alienShip.name}`;

        // update alien health bar
        alienNameElement.innerHTML = `
            ${alienShip.name}
                <h4>Hull Integrity</h4>
                <h4 id="alien-hull-hp">${alienShip.hull}</h4>
        `;



        // if hull is 0 or less show defeat message
        
        if (alienShip.hull <= 0) {

            // show alien defeated message
            showTextNode(5);
        } else {


            // Step 2 : If the ship survives, it attacks you
            // alien ship attacks player
            alienShip.attack(playerShip);

            // updates players health bar
            playerNameElement.innerHTML = `
                ${playerShip.name}
                    <h4>Hull Integrity</h4>
                    <h4 id="player-hull-hp">
                    ${playerShip.hull}
                    </h4>
            `;


            // Step 3 : If you survive, you attack the ship again
            // if player is still alive after aliens attack
            if (playerShip.hull > 0) {

                // update state 
                state = Object.assign(state, option.setState);

                // show alien attacked message
                showTextNode(3);

            } else {


                // Step 8 : You lose the game if you are destroyed
                /* console.log('reached'); */
                nextTextNodeId = 6
                displayH1Element.innerHTML = `The ${alienShip.name} destoyed ${playerShip.name} `;
                showTextNode(6);
            }
        }

    } else {
    
    // updates state 
    state = Object.assign(state, option.setState);
    
    // shows next text and options
    showTextNode(nextTextNodeId);
    }
}




// Step 7 : You win the game if you destroy all of the aliens






const textNodes = [
    {
        id:1,
        storyText: "You notice a ship in the distance.",
        options: [
            {
                optionText: "get a closer look",
                setState: {spawnShip: true},
                nextText: 2,
            },
            {
                optionText: "head to base",
                setState: {spawnShip: false},
                nextText: 4,
            }
            
        ]
    },
    {
        id:2,
        storyText: 'you notice its an enemy ship. How would you like to proceed',
        options: [
            {
                optionText: 'attack',
                setState: {attack: true},
                nextText: 3,
            },
            {
                optionText: 'leave the area',
                setState: {spawnShip: false},
                nextText: 4,
            },
        ]
    },
    {
        id:3,
        storyText: 'the enemy ship has attacked you',
        options: [
            {
                optionText:'attack',
                setState: {attack: true},
                nextText: 3,
            }
        ]
    },
    {
        id:4,
        storyText: 'You abandoned the fight and lost the game',
        options: [
            {
                // Step 6 : If you retreat, the game is over, perhaps leaving the game open for further developments or options
                optionText:'Restart',
                nextText: -1
            }
        ]
    },
    {
        id:5,
        storyText: 'you have defeated the ship',
        options: [
            {
                optionText:'Find next ship.',
                setState: {spawnShip: true},
                nextText: 1
            }
        ]
    },
    {
        id:6,
        
        storyText: 'you have been destroyed. You Lose.',
        options: [
            {
                optionText:'Restart',
                setState: {spawnShip: false},
                nextText: -1
            }
        ]
    }
]

startGame();
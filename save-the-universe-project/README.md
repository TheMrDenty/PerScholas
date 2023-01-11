the textNodes are where all of the story and options are stored.

the showTextNodes function picks which textNode should be displayed and generates the buttons for that option on the screen as well as adding an event listner to each button that calls the selectOption fuction passing the corresponding option to the button the user selected.

the SelectOption function stores the nextText data in a variable called nextTextNodeId. This variable is how we select our next textNode to display.

the function first checks if nextTextNodeId is less than or equal to 0 and if it does it sets all varibles to their original value and returns the startGame function.

if nextTextNodeId returns 1 or above we then check if spawnShip is set to true in state. if it is we display the first ship in the enemies array and show the textNode with the id of 0 and continue with the game.

else if spawnShip is false but attack is stored as true in state then we run the attack method from the playerShip and onto the alienShip and display the updated information. then we check if alienShips hull is <= 0 and if it is we shift that ship off the enemies array and check if the enemies array is empty. If it is we showTextNode with the id of 7 and display the win message, if not we showTextNode with the id of 5 and display the alien defeated message and continue with the game.

If the alienShip's hull is 1 or higher though alienShip uses attack method on playerShip and the affected data is updated on screen, then we check if playerShip's hull is > 0 and if it is we update state and showTextNode with the id of 3 and continue the game. But if the playerShip's hull is <= 0 we showTextNode with the id of 6 and inform the player they lost.

then if none of our state values are true we will update state and showTextNode of the nextTextNodeId thats stored in the option as nextText

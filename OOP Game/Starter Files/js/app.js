/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


 /* Create Game class & eventListeners for start button/ game buttons */

let game;
let gameWon;
let capturedKey;

$('#btn__reset').on('click', (event) => {
    game = new Game;
    game.startGame();
})
$('button.key').click(function(event){
    capturedKey = event.target;
    return capturedKey
   
})
$('button.key').click( () => {
    game.handleInteraction(); // apply all game logic
})



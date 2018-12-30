/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


 /* Create Game class & eventListeners for start button/ game buttons */

let game;
let gameEnd;
let gameWon = false;

$('#btn__reset').on('click', function() {
    game = new Game;
    game.startGame(); 
})

/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


 /* Create Game class & eventListeners for start button/ game buttons */

let game;

$('#btn__reset').on('click', function() {
    game = new Game;
    game.startGame(); 
})
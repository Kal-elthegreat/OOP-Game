/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


 /* Create Game class & eventListeners for start button/ game buttons */

 //const game = new Game();
// game.phrases.forEach((phrase, index) => {
// console.log(`Phrase ${index} - phrase: ${phrase.name}`);
// });

const game = new Game();
game.getRandomPhrase().addPhraseToDisplay();
console.log(game.getRandomPhrase())

//console.log(game.storePhrase());
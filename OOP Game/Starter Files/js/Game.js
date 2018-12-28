/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 /* create Game class methods for starting & ending game, handling
interactions, getting random phrase, checking for win, & removing a life from the
scoreboard. */


class Game {
    constructor (){
        this.missed = 0;
        this.phrases = [{name: 'prestige worldwide'},{name:'jack jack has powers'},{name:'javascript is life'},{name: 'to infinity and beyond'},{name: 'just keep swimming'}];
       this.activePhrase = null
    }

    getRandomPhrase(){ // method
        let random = Math.floor(Math.random() * this.phrases.length)
        const objPhrase = this.phrases
        .map(phrase => phrase.name)
        //.reduce((arr, name)  => [...arr, ...name], []); // this might come in hand for storing each letter in its own array
        return(objPhrase[random])
    }
     startGame() {
         $('#overlay').hide();
         const gamePhrase = this.getRandomPhrase()
         game.phrase = new Phrase (gamePhrase);
         game.phrase.addPhraseToDisplay()
         this.activePhrase = this.getRandomPhrase();
         console.log(this.activePhrase)
        
     }
}



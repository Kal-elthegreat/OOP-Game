/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 /* create Game class methods for starting & ending game, handling
interactions, getting random phrase, checking for win, & removing a life from the
scoreboard. */
let capturedKey;

class Game {
    constructor (){
        this.missed = 0;
        this.phrases = [{name: 'prestige worldwide'},{name:'jack jack has powers'},{name:'javascript is life'},{name: 'to infinity and beyond'},{name: 'just keep swimming'}];
       this.activePhrase = null
    }

    getRandomPhrase(){ // method
        let random = Math.floor(Math.random() * this.phrases.length) // random number
        const objPhrase = this.phrases // store phrases array
        .map(phrase => phrase.name) // access obj name
        //.reduce((arr, name)  => [...arr, ...name], []); // this might come in hand for storing each letter in its own array
        return(objPhrase[random])  // select a random phrase
    }
     startGame() {
         $('#overlay').hide(); // remove start screen
         
        const gamePhrase = game.getRandomPhrase() // holds random phrase
        game.phrase = new Phrase (gamePhrase); // create new Phrase obj w/random phrase
        game.phrase.addPhraseToDisplay() // displays to board
        this.activePhrase = gamePhrase // holds same random phrase
        this.handleInteraction(); // listen for clicked buttons
     }
     
    handleInteraction(){
        $('button.key').click(function(event){
             capturedKey = event.target.innerHTML;
             return capturedKey
            
        })

    }
        

}



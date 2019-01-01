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
        let random = Math.floor(Math.random() * this.phrases.length) // random number
        const objPhrase = this.phrases // store phrases array
        .map(phrase => phrase.name) // access obj name
        return(objPhrase[random])  // select a random phrase
    }
     startGame() {
         $('#overlay').hide(); // remove start screen
         
        const gamePhrase = game.getRandomPhrase() // holds random phrase
        game.phrase = new Phrase (gamePhrase); // create new Phrase obj w/random phrase
        game.phrase.addPhraseToDisplay() // displays to board
        this.activePhrase = gamePhrase // holds same random phrase
        gameWon = false; // stays false until all letters guessed     
     }
    
    handleInteraction(){
            if(capturedKey.tagName === 'BUTTON'){
                capturedKey.disabled = true;
            }
            if(game.phrase.checkLetter(capturedKey.innerHTML) == true){ 
                capturedKey.className = ('chosen')
                game.phrase.showMatchedLetter();
                game.checkForWin();
                } else if(game.phrase.checkLetter(capturedKey.innerHTML) == false){
                capturedKey.className = ('wrong')
                game.removeLife();
                }
    }

    checkForWin(){
    // see if li .letter = li.show
        let checkTrue = false
        if($('#phrase li.letter').length == $('#phrase li.show').length){
            checkTrue = true;
        }
        if(checkTrue){
            gameWon = true;
            this.gameOver();
        }
    }

    removeLife(){
        // li img and change src on each wrong choice
        $('#scoreboard li img')[this.missed].src = 'images/lostHeart.png'
        this.missed  += 1 // counter
        if(this.missed === 5){
        this.gameOver();
        }
        
    }
        
    gameOver(){
        console.log(this.missed)
        if(gameWon == true){
            $('#overlay h1').text(`You're a Winner`);
            $('#overlay').removeClass('lose')
            $('#overlay').addClass('win')
        } else {
            $('#overlay h1').text(`Sorry You Lose`);
            $('#overlay').removeClass('win')
            $('#overlay').addClass('lose')
        }
        $('#overlay').show()
        //
        //reset game counter and lives
        for(let i = 0; i < $('#scoreboard li img').length; i++){
            $('#scoreboard li img')[i].src ='images/liveHeart.png';
        }

        // resets li elements
        $('#phrase ul').remove().children()
        let newUL = document.createElement('UL')
        $('#phrase').append(newUL);

        //reset button classes
        $('.keyrow button').removeClass('chosen')
        $('.keyrow button').removeClass('wrong')
        $('.keyrow button').addClass('key')
        // enable all buttons
        for(let i = 0; i < $('.keyrow button').length; i++){
            $('.keyrow button')[i].disabled = false;
        }

    }
}

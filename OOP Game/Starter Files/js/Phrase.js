/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 /* Phrase Class to handle creation of phrases */

 class Phrase {
     constructor (phrase){
        this.phrase = phrase
     }
     addPhraseToDisplay(){ //method
        const phraseDisplay = game.getRandomPhrase()
        const spread = [...phraseDisplay]
        
         spread.forEach(letter => {
            let li = document.createElement('LI')
            li.append(letter)
            $('#phrase ul').append(li) 
            if(letter === ' '){
                li.className = 'hide'
            } else {
                li.className = 'show'
            }
        });
        
     }
     checkLetter(){ //method

     }
     showMatchedLetter(){ //method

     }
 }

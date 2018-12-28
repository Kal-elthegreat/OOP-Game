/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 /* Phrase Class to handle creation of phrases */

 class Phrase {
     constructor (phrase){
        this.phrase = phrase
     }
     addPhraseToDisplay(){ //method
        const phraseDisplay = this.phrase 
        const spread = [...phraseDisplay] // place phrase letters into individual arrays
        
         spread.forEach(letter => { // creates li & adds letters to each one
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

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
                li.className = 'hide space'
            } else {
                li.className = 'hide letter'
            }
        });
        
     }
     
     showMatchedLetter(){ //method
        const spread = [...this.phrase]
        spread.forEach(letter => { 
            if(capturedKey.innerHTML == letter){
                let phraseLetters = document.querySelectorAll('#phrase li')
                for(let i = 0; i < phraseLetters.length;i++){ // through text content to show match
                    if(phraseLetters[i].textContent == letter){
                        phraseLetters[i].className = 'show letter'
                    }
                }
            }
        })
        
     }

    checkLetter(char){ //method 
        let letterMatch = false;
        this.phrase.split('')
        .forEach(letter => {
            if(char === letter){
                letterMatch = true;
            } 
        })
         return letterMatch;   
     }

 }

 
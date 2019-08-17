
var dogBreed = ["corgi", "beagle", "bulldog", "collie", "maltese", "mastiff", "poodle", "shiba"];
console.log(dogBreed);
var wordGuess = dogBreed[Math.floor(Math.random() * dogBreed.length)];
console.log(wordGuess);
// divs
var lives = document.getElementById("lives");
var letterGuesses = document.getElementById("letterGuesses");
var wordArea = document.getElementById("word");

console.log(wordArea);

var unFilled = [];
for (var i = 0; i < wordGuess.length; i++) {
unFilled[i] = "_";
}
console.log(unFilled);

wordArea.innerHTML = unFilled.join(', ');

var correctGuess;
var wrongGuess;
var lifeCount = 15;

document.onkeyup = function(event) {
        var letterGuess = event.key.toLowerCase;
        var correctGuess = false;
        for (var i = 0; i < wordGuess.length; i++) {

        if(letterGuess == wordGuess[i]) {
                unFilled.splice(i,1,letterGuess)
                console.log(unFilled)
                correctGuess = true
        }
        }
    
        if(correctGuess) {
                console.log('correct guess')
                } 
        else {
                console.log('incorrect guess')
        }
        };

        function reduceLives() {
                lives--
              }
     
        function setup() {
                document.getElementById("word").innerHTML += unFilled.join(" ");
                document.getElementById("lives").innerHTML += lives;
              };
/*
 var leftOvers = wordGuess.length;      
 
 var remainingLetters = wordGuess.length;



 while (leftOvers > 0) {



        for (var i = 0; i < wordGuess.length; i++) {
        if (dogBreed[i] === letterGuess) {
        wordGuess[i] = letterGuess;
        }
}
}
*/




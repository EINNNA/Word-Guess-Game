
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
for (var i = 0; i < dogBreed.length; i++) {
unFilled[i] = "_";
}
console.log(unFilled);

wordArea.innerHTML = unFilled.join(', ');

var correctGuess;
var wrongGuess;
var lifeCount = 15;
lives.innerHTML = lifeCount.join('');

document.onkeyup = function(event) {
        var letterGuess = event.key.toLowerCase;
        console.log(letterGuess); 
        if (letterGuess == dogBreed) {
                lives++;
        }
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




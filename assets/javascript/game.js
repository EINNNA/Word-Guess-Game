
var dogBreed = ["corgi", "beagle", "bulldog", "collie", "maltese", "mastiff", "poodle", "shiba"];
console.log(dogBreed);
var wordGuess = dogBreed[Math.floor(Math.random() * dogBreed.length)];
console.log(wordGuess);
// divs
var lives = document.getElementById("lives");
var letterGuesses = document.getElementById("letterGuesses");
var wordArea = document.getElementById("word");

console.log(lives);
console.log(letterGuesses);
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

// lives.innerHTML = lifeCount.join('');

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
//lives 

        if (letterGuess !== wordGuess[i]) {
                lifeCount--
                console.log(lifeCount)
        }
     
        function setup() {
                document.getElementById("word").innerHTML += unFilled.join(" ");
                document.getElementById("lives").innerHTML += lifeCount;
              };

        if (lives == 0) {
        document.getElementById("lives").innerHTML = 'You Lose!';
        document.getElementById("word").innerHTML = wordGuess;

        }

        if (!document.getElementById) document.write('<link rel="stylesheet" type="text/css" href="../css/reset.css>');

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




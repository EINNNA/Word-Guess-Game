//working
var dogBreed = ["corgi", "beagle", "bulldog", "collie", "maltese", "mastiff", "poodle", "shiba"];



//working
var wordGuess = dogBreed[Math.floor(Math.random() * dogBreed.length)];



// working
var unFilled = [];
        for (var i = 0; i < dogBreed.length; i++) {
        unFilled[i] = "_";
        }

        document.getElementById("#word").innerHTML = unFilled;

// working
 var leftOvers = wordGuess.length;      
 var lives = 15;
 

document.onkeydown = function(event) {
        var letterGuess = event.key; 
        console.log(letterGuess);
        var wordContent = document.getElementById(".word");
        (letterGuess).append(wordContent);

        }






 console.log(leftOvers);
 
 console.log(dogBreed);
 console.log(wordGuess);
 console.log(unFilled);



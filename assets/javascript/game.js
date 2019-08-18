       // globalvariables
       var dogBreed = ["corgi", "beagle", "bulldog", "collie", "maltese", "mastiff", "poodle", "shiba"];
       /*var dogImage = ["../images/corgi.jpg", 
       "../images/beagle.jpg", 
       "../images/bulldog.jpg", 
       "../images/collie.jpg", 
       "../images/maltese.jpg", 
       "../images/mastiff.jpg", 
       "../images/poodle.jpg", 
       "../images/shiba.jpg"];*/
       var wordGuess = dogBreed[Math.floor(Math.random() * dogBreed.length)];
       var wordArea = document.getElementById("word");
       var lives = 10;
       var guessed = [];
       var game = false; //for start up/screen
       var unFilled = [];


       // listeners
       document.onkeyup = function(event) {

             var letterGuess = event.key;
             var correctGuess = false; //to stop code before game starts
        //game starting
             if(game == true) {
               for (var i = 0; i < wordGuess.length; i++) {
                 if(letterGuess == wordGuess[i]) {
                   unFilled.splice(i,1,letterGuess)
                   correctGuess = true //because game started
                 }
               }

               if(correctGuess) {
                 console.log('correct guess')
                 document.getElementById("word").innerHTML = unFilled.join(" ");
               } else {
                 incorrectGuess(letterGuess)
                 console.log('incorrect guess')
               }

               var winCond = true;
               for (var i = 0; i < unFilled.length; i++) {
                 if(unFilled[i] ==  '_') {
                   winCond = false;
                   console.log ('spot')
                 }
               }

               // Game Win
               if(winCond == true) {
                 game = false
                 document.getElementById("title").innerHTML = 'Winner!';
                 document.getElementById("answer").innerHTML = wordGuess;
                 document.getElementById("underlay").classList.remove("hide");
                 document.getElementById("message").classList.remove("hide");
               }
             }
        };


        // Functions
        function incorrectGuess(letter) {
          lives--
          console.log(lives)
          guessed.push(letter)
          document.getElementById("letterGuessed").innerHTML = guessed;
          document.getElementById("lives").innerHTML = lives;

          // Game Lose

          if(lives == 0) {
            game = false
            document.getElementById("title").innerHTML = 'You Lose!';
            document.getElementById("answer").innerHTML = wordGuess;
            document.getElementById("underlay").classList.remove("hide");
            document.getElementById("message").classList.remove("hide");
          }
        }

        function restartGame(){
          document.getElementById("underlay").classList.add("hide");
          document.getElementById("message").classList.add("hide");
          document.getElementById("ready").classList.remove("hide");
          document.getElementById("game").classList.add("hide");
        }

        function setupGame() {
          game = true
          for (var i = 0; i < wordGuess.length; i++) {
            unFilled[i] = "_";
          };
          guessed = [];
          lives = 10;
          document.getElementById("ready").classList.add("hide");
          document.getElementById("game").classList.remove("hide");
          document.getElementById("letterGuessed").innerHTML = guessed;
          document.getElementById("word").innerHTML = unFilled.join(" ");
          document.getElementById("lives").innerHTML = lives;
        };





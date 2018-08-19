 //variables
 let answer = String.fromCharCode(Math.floor(Math.random() * (90 - 65 + 1)) + 65);
 let numOfWins = 0, numOfLosses = 0, numOfGuessesLeft = 9;
 let lettersGuessed = [];
 let guess = '';

 //display objects from the DOM
 let winsDisplay = document.querySelector("#wins");
 let lossesDisplay = document.querySelector("#losses");
 let guessesLeftDisplay = document.querySelector("#guessesLeft");
 let lettersGuessedDisplay = document.querySelector("#lettersGuessed");

 //functions
 let reset = (gameWon)  => 
 {
     answer = String.fromCharCode(Math.floor(Math.random() * (90 - 65 + 1)) + 65); 
     console.log(`Answer is: ${answer}` );
     if(gameWon)
     {
         numOfWins++;
         resetDisplay();
     }
     else
     {
         numOfLosses++;
         resetDisplay();
     }
     numOfGuessesLeft = 9;
     lettersGuessed = [];
     resetDisplay();
 }

 let resetDisplay = () =>
 {
     winsDisplay.innerHTML = numOfWins;
     lossesDisplay.innerHTML = numOfLosses;
     guessesLeftDisplay.innerHTML = numOfGuessesLeft;
     lettersGuessedDisplay.innerHTML = lettersGuessed;
 }

 //setting initial display
 resetDisplay();

 //TODO: delete this before final
 console.log(`Answer is: ${answer}` );

 //handling when key is pressed
 $(document).keydown(function(e){
 if (e.keyCode > -1 )
     
     guess = String.fromCharCode(e.keyCode);
     console.log(`You Pressed : ${guess}`);
     
     //checking if guess is right
     if(guess == answer)
     {
         console.log("True");
         reset(true);
     }
     //if the guess is wrong
     else
     {
         numOfGuessesLeft--;
         //checking if game is over
         if(numOfGuessesLeft < 1)
         {
             reset(false);
         }
         //if game isn't over
         else
         {
             lettersGuessed.push(guess);
             resetDisplay();
         }
         
     }
     
 });

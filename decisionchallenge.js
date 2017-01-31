//Purpose: To select the higher of the two numbers//
//Signature: A function that takes in two argument(numbers). It will return the higher of the two numbers.//
// Examples: function greaterNum, two arguments
// greaterNum(1,4) -> answer should be 4//
//what number is bigger challenge
function greaterNum(num1,num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

greaterNum(2,5)


//World translator challenge
//helloword takes one argument
function helloWorld(str) {
  if (str === "spanish"){
    return ("Hola, World");
  } else if (str==="french"){
    return ("Bonjour, World");
  } else {
    return("Hello World");
  }
}


//Grade Assigner Challenge
function assignGrade(num) {
  while(num>90 && num<100) {
    return ("A");
  } else if (num>80 && num<89) {
    return ("B")
  // }  while(num>70 && num<79) {
  //   return ("C")
  // } while(num>60 && num<69) {
  //   return ("D")
  // } else {
  //   return ("F")
  // }
  }
}

//Pluralizer Challenge
function pluralize(num, noun) {
  //single for cat or dog
  if ((noun === "dog" || noun ==="cat") && num === 1) {
      return (num + " " + noun);
  //plural for cat or dog
  } else if ((noun === "dog" || noun ==="cat") && num > 1) {
      return (num + " " + noun +"s");
    //single for rare nouns
  } else if ((noun === "sheep") && num === 1){
      return (num + " " + noun);
  } else if ((noun ==="person") && num === 1) {
      return (num + " " + noun);
  } else if ((noun ==="goose") && num === 1 ) {
      return (num + " " + noun);
  } else if ((noun ==="child") && num === 1) {
      return (num + " " + noun);
      //plural for rare nouns
  } else if ((noun === "sheep") && num > 1){
      return (num + " " + noun);
  } else if ((noun ==="person") && num > 1) {
      return (num + " " + "people");
  } else if ((noun ==="goose") && num > 1 ) {
      return (num + " " + "geese");
  } else if ((noun ==="child") && num > 1) {
      return (num + " " + "children");
  }
}


//Odd Even Challenge
var num = 0;
function oddEven(){
  while (num <= 15) {
    if(num % 2 === 0) {
  alert (num + " " + "is even");
  } else {
  alert(num + " " + "is odd");
  }
    num = num + 1;
  }
}

// //
// Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz (common interview questions)".
var num = 1;
function fizzBuzz(){
  while (num < 100) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz")
  } else if(num % 5 === 0) {
      console.log("Buzz");
  } else if(num % 3 === 0) {
        console.log("Fizz");
  } else {
      console.log(num);
    }
    num = num + 1;
  }
}
//
// Javascript Hi/Lo Game
// Goal
//
// Create a function that plays the following game: The computer picks a secret random integer between 1 and 100 (both inclusive), and repeatedly asks the user for guesses.
// If the user's guess is too high or too low, the computer notifies them of that
// Otherwise, if the user guesses the secret number correctly, the computer displays a winning message and the game is over.
// Hint: See Math.random()
//

// Stretch goal 2
//
// Validate the user's input. If the user puts a anything other than a number, tell the user they can only use numbers.
// Hint: To create a number from a string in javascript use parseInt( ). See: Description.
//
// Stretch goal 3
//
// Allow the user to put their name in before the game starts. When the user has won the game, let the user know they have won, using their name.


function secretRandom() {
  var guess;
  var secretNumber;
  secretNumber = Math.floor(Math.random()*100 + 1);
  console.log(secretNumber);
  guess = prompt("Guess The Number");
  while (guess != secretNumber){
        if (guess > secretNumber) {
          guess = prompt ("Your number is too high, guess again");
        }
        else if (guess < secretNumber) {
          guess = prompt ("Your number is too low, guess again");
        }
  }
  alert ("You guessed correctly!");
}

///// Stretch goal 1
//
// If the user has not guessed the secret number in seven tries, the user loses.
//

function secretRandom() {
  var guess;
  var secretNumber;
  secretNumber = Math.floor(Math.random()*100 + 1);
  console.log(secretNumber);
  guess = prompt("Guess The Number");
  var tries = 0;
  while (guess != secretNumber && tries < 7){
        if (guess > secretNumber) {
          guess = prompt ("Your number is too high, guess again");
        }
        else if (guess < secretNumber) {
          guess = prompt ("Your number is too low, guess again");
        }
        tries=tries + 1;
  }
  if (tries === 7){
  alert("You don't have any more tries left")
} else {
  alert ("You guessed correctly!");
  }
}

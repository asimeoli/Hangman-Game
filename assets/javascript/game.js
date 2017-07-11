// Global Variables 
var words = ["PELOTON" , "SUNFLOWERS" , "LEADERS" , "KING OF THE MOUNTAINS" , "TIME TRIALS"]
var pictures = ["assets/images/peloton.jpg", "assets/images/sunflowers.jpg","assets/images/leaders.jpg","assets/images/king.jpg","assets/images/time.jpg"]
var word = "";
var displayWord = "";
var tempDisplayWord = "";
var guesses = "";
var guessesRemaining = 10;
var firstKey = true;
var badLetters = "";
var wins = 0;
var wordIndex = 0;
var defaultPicture = "http://www.dafont.com/forum/attach/orig/2/8/284763.gif";


function loadWord(){
	if (wordIndex < words.length) {
		word = words[wordIndex].toUpperCase();
		document.getElementById("picture").src=defaultPicture
		guessesRemaining = 10;
		badLetters = "";
		guesses = "";
		tempDisplayWord = "";
	for (var i=0; i < word.length; i++){
		var letter = word.charAt(i);
		
		if (letter === " ") {
			tempDisplayWord = tempDisplayWord + " ";
		}else {
			tempDisplayWord = tempDisplayWord + "_";
		}
	}firstKey = false;
	}else {
		tempDisplayWord = "Game Over! Refresh to Play Again"
	}
}
// On every keypress noting letter
document.onkeyup = function() {
	if (firstKey){
		loadWord();
	} else { 
	
	var userguess = (String.fromCharCode(event.keyCode)).toUpperCase();

	if (userguess >= "A" && userguess <= "Z") {

	if (guesses.search(userguess) == -1) {
		guesses = guesses + userguess + " ";
		
		if (word.search(userguess) == -1) {
		  guessesRemaining--;
		  badLetters = badLetters + userguess + " ";
	  }
	}
		tempDisplayWord = "";
	for (var i=0; i < word.length; i++){
		var letter = word.charAt(i);
			
		if (guesses.search(letter) == -1) {
			tempDisplayWord = tempDisplayWord + "_";
		} else {
			tempDisplayWord = tempDisplayWord + letter;
			}
		}	
	}
 
if (tempDisplayWord.search("_") == -1) {
	wins ++;
	document.getElementById("picture").src=pictures[wordIndex];
	//win screen
	tempDisplayWord = "You Win! Press any Key to Play Again"
	firstKey = true;
	wordIndex++;
}else if (guessesRemaining == 0){
	tempDisplayWord = "You Lose! Press any Key for Next Round"
	firstKey = true;
	wordIndex++;
}
}
document.getElementById("answer").innerHTML = tempDisplayWord;
	document.getElementById("counter").innerHTML = guessesRemaining;
	document.getElementById("guesses").innerHTML = badLetters;
	document.getElementById("wins").innerHTML = wins;
}


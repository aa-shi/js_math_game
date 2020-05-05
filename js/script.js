
var score;
var button1Answer;
var button2Answer;
var button3Answer;
var button4Answer;

function initialValue(){

	score = 0;
	document.getElementById("score").innerHTML = "SCORE = 0";

	button1Answer = 87;
	document.getElementById("button1").innerHTML = "28 + 59 = ?";

	button2Answer = 48;
	document.getElementById("button2").innerHTML = "4 * 12 = ?";

	button3Answer = 11;
	document.getElementById("button3").innerHTML = "121 ÷ 11 =?";

	button4Answer = 25;
	document.getElementById("button4").innerHTML = "78 - 53 =?";
	
}

function addNumber(){
	var userAnswer = parseInt(prompt("Enter your answer."));
	
	if (userAnswer == button1Answer){
		document.getElementById("button1").innerHTML = "28 + 59 = " +userAnswer;
        document.getElementById("response1").innerHTML = "Well Done!";
        document.getElementById("button1").style.backgroundColor="green";
		document.getElementById("emo1").src="images/happy.png";
		score++;
		document.getElementById("score").innerHTML = "SCORE = " + score ;
	} else {
		document.getElementById("response1").innerHTML = "Wrong Answer! Try again";
		document.getElementById("button1").style.backgroundColor="red";
        document.getElementById("emo1").src="images/sad.png";
    }
}

function multiplyNumber(){
	var userAnswer = parseInt(prompt("Enter your answer."));

	if (userAnswer == button2Answer){
		document.getElementById("button2").innerHTML = "4 * 12 = " + userAnswer;
		document.getElementById("response2").innerHTML = "Well Done!";
		document.getElementById("button2").style.backgroundColor = "green";
		document.getElementById("emo2").src = "images/happy.png";
		score++;
		document.getElementById("score").innerHTML = "SCORE = " + score;
	} else {
		document.getElementById("response2").innerHTML = "Wrong Answer! Try again";
		document.getElementById("button2").style.backgroundColor = "red";
		document.getElementById("emo2").src = "images/sad.png";
	}
}

function divideNumber(){
	var userAnswer = parseInt(prompt("Enter your answer."));

	if (userAnswer == button3Answer){
		document.getElementById("button3").innerHTML = "121 ÷ 11 = " + userAnswer;
		document.getElementById("response3").innerHTML = "Well Done!";
		document.getElementById("button3").style.background = "green";
		document.getElementById("emo3").src = "images/happy.png";
		score++;
		document.getElementById("score").innerHTML = "SCORE = " + score;
	} else {
		document.getElementById("response3").innerHTML = "Wrong Answer! Try again";
		document.getElementById("button3").style.backgroundColor = "red";
		document.getElementById("emo3").src = "images/sad.png";
	}
}

function minusNumber(){
	var userAnswer = parseInt(prompt("Enter your answer."));

	if (userAnswer == button4Answer){
		document.getElementById("button4").innerHTML = "78 - 53 = " + userAnswer;
		document.getElementById("response4").innerHTML = "Well Done!";
		document.getElementById("button4").style.background = "green";
		document.getElementById("emo4").src = "images/happy.png";
		score++;
		document.getElementById("score").innerHTML = "SCORE = " + score;
	} else {
		document.getElementById("response4").innerHTML = "Wrong Answer! Try again";
		document.getElementById("button4").style.backgroundColor = "red";
		document.getElementById("emo4").src = "images/sad.png";
	}
}




//JS for Lego Character Test

//Submit form
var birthdayInputEl = document.getElementById("birthday");
var nameInputEl = document.getElementById("name");

var formEl = document.getElementById("form");
//These cariables are pretty much irrelevant

function submitForm(){
	var name = document.getElementById("name").value;
	var birthday = document.getElementById("birthday").value;

	if ((name !== "") && (birthday !== "")){
		//console.log("FORM HAS CHANGED");
		document.getElementById("calculate").src = 'images/buttons/Calculate_Active.svg';
		document.getElementById("calculate").className = 'calculateActive';
		
		return true;
	}
}


//Start the Test
function startTest(){
	var welcomeContainer = document.getElementById('welcomecontainer');
	welcomeContainer.style.top = "-200%";
	welcomeContainer.style.display = "none";

	var left = document.getElementById('left');
	left.style.left = "0%";
	left.style.display = "block";

	var right = document.getElementById('right');
	right.style.right = "0%";
	right.style.display = "block";

}


//PopUp On Click
function showCharacters(){
	var legoChar = document.getElementById('popUpViewCharacters');
	legoChar.style.top = "50%";
	legoChar.style.display = "block";

	var backDrop = document.getElementById('popUpOverlay');
	backDrop.style.opacity = "0.6";
	backDrop.style.display = "block";
}

//Reverse it
// Couldn't get this to work
function hideCharacters(){
	var legoChar = document.getElementById('popUpViewCharacters');
	legoChar.style.top = "200%";
	legoChar.style.display = "none";


	var backDrop = document.getElementById('popUpOverlay');
	backDrop.style.display = "none";
}
//JS for Lego Character Test

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


function hideCharacters(){
	var legoChar = document.getElementById('popUpViewCharacters');
	legoChar.style.top = "200%";
	legoChar.style.display = "none";


	var backDrop = document.getElementById('popUpOverlay');
	backDrop.style.display = "none";
}
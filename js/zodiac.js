//Zodiac JS for Lego Test

function zodiac(){
  var name = document.getElementById("name").value;

  var dateValueRaw = document.getElementById("birthday").value;
  console.log("Date: ", dateValueRaw);

  var date = new Date(dateValueRaw);
  //console.log(date);

  var month = date.getUTCMonth() + 1; //major key here
  var day = date.getUTCDate();
  var year = date.getUTCFullYear();

  console.log("Month: ", month);
  console.log("Day: ", day);
  console.log("Year: ", year);

  var studColor = document.getElementById("legostud");
  var outputSentence = document.getElementById("nameResult");
  var resultImage;

  var audio;

  if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
    AstroSign = "Cap";
    studColor.style.background = '#ED4444';
    studColor.classList.add("studAnimate");
    char = 'Emmett';
    //Emmett

    resetImage();

    resultImage = document.getElementById("Emmett");
    resultImage.classList.add("visible");

    audio = document.getElementById("EmmettAudio");
    audio.play();

  } 
  else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
    AstroSign = "Sag";
    studColor.style.background = '#E7E7E7';
    char = 'Zane';
    //Zane

    resetImage();

    resultImage = document.getElementById("Zane");
    resultImage.classList.add("visible");
    
    audio = document.getElementById("ZaneAudio");
    audio.play();
  } 
  else if ((month == 10 && day >= 24) || (month == 11 && day <= 21)) {
    AstroSign = "Sco";
    studColor.style.background = '#6E2899';
    char = 'Batgirl';
    //Batgirl

    resetImage();

    resultImage = document.getElementById("Batgirl");
    resultImage.classList.add("visible");
    
    audio = document.getElementById("BatgirlAudio");
    audio.play();
  } 
  else if ((month == 9 && day >= 23) || (month == 10 && day <= 23)) {
    AstroSign = "Lib";
    studColor.style.background = '#AD3232';
    char = 'Kai';
    //Kai

    resetImage();

    resultImage = document.getElementById("Kai");
    resultImage.classList.add("visible");
    
    audio = document.getElementById("KaiAudio");
    audio.play();
  } 
  else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
    AstroSign = "Vir";
    studColor.style.background = '#0B6E4F';
    char = 'Lloyd';
    //Lloyd

    resetImage();

    resultImage = document.getElementById("Lloyd");
    resultImage.classList.add("visible");
    
    audio = document.getElementById("LloydAudio");
    audio.play();
  } 
  else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
    AstroSign = "Leo";
    studColor.style.background = '#2274A5';
    char = 'Jay';
    //Jay

    resetImage();

    resultImage = document.getElementById("Jay");
    resultImage.classList.add("visible");
    
    audio = document.getElementById("JayAudio");
    audio.play();
  } 
  else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
    AstroSign = "Can";
    studColor.style.background = '#25CED1';
    char = 'Benny (aka Spaceman)';
    //Benny

    resetImage();

    resultImage = document.getElementById("Benny");
    resultImage.classList.add("visible");
    

    audio = document.getElementById("BennyAudio");
    audio.play();
  } 
  else if ((month == 5 && day >= 21) || (month == 6 && day <= 21)) {
    AstroSign = "Gem";
    studColor.style.background = '#6EEB83';
    char = 'Robin';
    //Robin

    resetImage();

    resultImage = document.getElementById("Robin");
    resultImage.classList.add("visible");
   
    audio = document.getElementById("RobinAudio");
    audio.play();
  } 
  else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
    AstroSign = "Tau";
    studColor.style.background = '#1E214D';
    char = 'Cole';
    //Cole

    resetImage();

    resultImage = document.getElementById("Cole");
    resultImage.classList.add("visible");
    
    audio = document.getElementById("ColeAudio");
    audio.play();
  } 
  else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
    AstroSign = "Ari";
    studColor.style.background = '#06D633';
    char = 'The Joker';
    //Joker

    resetImage();

    resultImage = document.getElementById("Joker");
    resultImage.classList.add("visible");
    
    audio = document.getElementById("JokerAudio");
    audio.play();
  } 
  else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
    AstroSign = "Pis";
    studColor.style.background = '#D255B2';
    char = 'Princess Unikitty';
    //Princess Unikitty

    resetImage();

    resultImage = document.getElementById("PrincessUnikitty");
    resultImage.classList.add("visible");
    
    audio = document.getElementById("PrincessAudio");
    audio.play();
  } 
  else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
    AstroSign = "Aqu";
    studColor.style.background = '#F0BC44';
    char = 'Batman';
    //Batman

    resetImage();

    resultImage = document.getElementById("Batman");
    resultImage.classList.add("visible");
    
    audio = document.getElementById("BatmanAudio");
    audio.play();
  }

  else{
    alert("Please enter a valid name and/or birthday.")
  }

  outputSentence.innerHTML = name + ", you got " + char + "!";

  console.log(AstroSign);
  return AstroSign;

}

function resetImage(){
  var charResult = document.getElementsByClassName("charResult");

  for(i=0; i < charResult.length; i++){
    charResult[i].classList.remove("visible");
  }
}
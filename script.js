var maxAmp = 100;

function doPrint(){
  var x = document.getElementById("user").value;
  var y = document.getElementById("usage").value;
  document.getElementById("user").value = "";
  document.getElementById("usage").value = "";
  if(isValidUsername(x) == true && isValidUsage(y)== true){
    $("#table").append("<tr> <td>" + x + "</td> <td>" + y + "</td> </tr>"); 
  }
}

function isValidUsername(string){
  
  if(!(string.length == 4)){
    alert("Die Initialen plus die letzten Ziffern der Immatrikulationsnummer.");
    return false;
    
  }
  var initials = string.substring(0, 2);
  var imma = string.slice(2);
 
  initials = initials.toLowerCase();
    
  var char1 = initials.charCodeAt(0);
  var char2 = initials.charCodeAt(1);
  
  var isLetters = true;
  
  if (char1 >= 97 && char1 <= 122){
    isLetters = (char2 >= 97 && char2 <= 122);
  } else {
    isLetters = false;
  }
  
  var nr1 = imma.charCodeAt(0);
  var nr2 = imma.charCodeAt(1);
 
  var isNumbers = true;
  
  if (nr1 >= 48 && nr1 <= 57){
    isNumbers = (nr2 >= 48 && nr2 <= 57);
  } else {
    isNumbers = false;
  }
 
 if(isLetters == false || isNumbers == false ){
   alert("Ungültige Nutzerkennung");
   return false;
 } 
  return true; 
}


function isValidUsage(usage){
  var arr = usage.split();
  var char;
  for (var i = 0; i < arr.length; i++){
    char = arr[0].charCodeAt(0);
    if (!( char >= 48 &&  char <= 57)){
      alert("Ungültige Zählernummer");
      return false;
    }
  }
  return true;
}

function randomVolt(){
  return Number((Math.random()*20 + 220).toFixed(1));
}





function randomAmpere(){
  return Number((Math.random()* (maxAmp+5)).toFixed(1));
  // for edge case testing :
  //return 101;
}

var amp = randomAmpere();



document.write("<p> Status: <ul> <li>" + randomVolt() + " Volt </li> <li>" + amp +  " Ampere</li> </ul> </p>");

if (amp > maxAmp){
  document.write("<img src=\"https://media.tenor.co/images/6f14b0f70cfd49b63b4715b4a7d1e097/tenor.gif\" >");
}




"use strict";
function gogogo() {
    alert("Yay, it works!");
}
var timer = null; // will be used for using timer for increasing the text

window.onload = function() {
    var biggerBtn = document.getElementById("btnBigger");
    biggerBtn.onclick = increaseSizeWithTimer; //changeSizeText;
    var blingCheck = document.getElementById("chk");
    blingCheck.onchange = changeText;
    var ipigLatinBtn = document.getElementById("btnPig");
    ipigLatinBtn.onclick = pigLatinFunction;
    var malkovitchBtn = document.getElementById("btnMalko");
    malkovitchBtn.onclick = malkovitchFunction;
} 

//function that will call the "modifyText()" with a timer
function increaseSizeWithTimer(){
    if (timer === null) {
        timer = setInterval(changeSizeText, 500);
    } else {
        clearInterval(timer);
        timer = null;
    }
}

//Change size from textare
function changeSizeText (){
    var textArea = document.getElementById('ta');
    var currentSize = parseInt(textArea.style.fontSize) || 12; //before had 24
    textArea.style.fontSize = (currentSize+2)+"pt";  

}

//Change many properties on textarea
function changeText(){
    var blingCheck = document.getElementById("chk");
    var textArea = document.getElementById("ta");
     
    if(blingCheck.checked){ 
        textArea.style.fontWeight = "bold";
        textArea.style.color = "green"; 
        textArea.style.textDecoration = "underline"; 
		document.body.style.backgroundImage = 'url(http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg)';
		//document.body.style.backgroundImage = 'url(hundred-dollar-bill.jpg)';
    }
    else{
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black"; 
        textArea.style.textDecoration = "none";
        document.body.style.backgroundImage = 'none';
    }
}

function pigLatinFunction(){
    var textArea = document.getElementById("ta");
    var words = textArea.value;
    //alert(words);
    var wordsSplitted = words.split(" ");
    //alert(wordsSplitted[0]);
    for(var i = 0; i< wordsSplitted.length ; i++){
	
        if((wordsSplitted[i] >= "A" && wordsSplitted[i] <= "Z") ||
		   (wordsSplitted[i] >= "a" && wordsSplitted[i] <= "z") )
		{
            var temp="";
			temp = wordsSplitted[i].substring(i+1,wordsSplitted[i].length) ;
			temp = temp+wordsSplitted[i].substring(i,1)+"ay";
			wordsSplitted[i]= temp;
        }
    }

	var textDisplay="";
    for(var j = 0; j< wordsSplitted.length ; j++){
        textDisplay += wordsSplitted[j]+" ";
    }
    textArea.value = textDisplay;
}

function malkovitchFunction(){
    var textArea = document.getElementById("ta");
    var words = textArea.value;
    //alert(words);
    var wordsSplitted = words.split(" ");
    //alert(wordsSplitted[0]);
    for(var i = 0; i< wordsSplitted.length ; i++){
        if(wordsSplitted[i].length >= 5){
            wordsSplitted[i]="Malkovich";
        }
    }
    var textDisplay="";
    for(var j = 0; j< wordsSplitted.length ; j++){
        textDisplay += wordsSplitted[j]+" ";
    }
    textArea.value = textDisplay;
}

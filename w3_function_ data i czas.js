// Write your code here.
var dzis = new Date();
	var aktualny_czas;
	var dzien = dzis.getDay();
	var listadni = ["Niedziela","Poniedzia³ek", "Wtorek", "Œroda", "Czwartek", "Pi¹tek", "Sobota"];
	console.log("Dziœ jest: " + listadni[dzien]);
	

	function czas(){
	var godzina = dzis.getHours();
	var minuta = dzis.getMinutes();
	var sekunda = dzis.getSeconds();
		if (sekunda<10){ console.log(godzina + ":" + minuta + ":0" + sekunda)}
		if (minuta<10){ console.log(godzina + ":0" + minuta + ":" + sekunda)}
		if (godzina<10){ console.log("0" + godzina + ":" + minuta + ":" + sekunda)} 
		else if (sekunda>=10 && minuta>=10 && godzina>=10){console.log(godzina + ":" + minuta + ":" + sekunda)}
  }

	czas();
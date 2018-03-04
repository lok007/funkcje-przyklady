function znajdz_niedziele(dzien,miesiac,rok, rok2){
for(i = rok; i<=rok2; i++){
var d = new  Date(i, miesiac-1, dzien);
if (d.getDay() === 0){ console.log(dzien +"."+ miesiac+" jest niedziel¹ w roku: "+ i)}
}  
}

znajdz_niedziele(24,12,1990,2050)

HTML

Podaj konkretna date: <br>
dd: <input type="text" id="dzien"/>
mm: <input type= "text" id ="miesiac"/><br>
<br>
rok rozpocz¹cia wyszukiwania: <input type= "text" id ="rok1"/><br>
<br>
rok zakoñczenia wyszukiwania: <input type= "text" id ="rok2"/><br>
<br>

dzien tygodnia:
<input type="button" onClick="poniedzialek()" Value= "pon"/>
<input type="button" onClick="wtorek()" Value= "wt"/>
<input type="button" onClick="sroda()" Value= "sr"/>
<input type="button" onClick="czwartek()" Value= "czw"/>
<input type="button" onClick="piatek()" Value= "pt"/>
<input type="button" onClick="sobota()" Value= "sob"/>
<input type="button" onClick="niedziela()" Value= "nd"/><br>
<br>
<p>
Wynik to: <br> <span type="text" id= "wynik"></span> 
</p>


JS


function poniedzialek(){
var tabela = [];
var wynik = 0;
 dzien = document.getElementById("dzien").value;
 miesiac = document.getElementById("miesiac").value -1;
 rok1 = document.getElementById("rok1").value;
 rok2 = document.getElementById("rok1").value;
	for(i = rok1; i<=rok2; i++){
		var d = new  Date(i, miesiac, dzien);
			if (d.getDay() === 1){ 
			tabela.push(i);			
}
}wynik = tabela.toString();
document.getElementById("wynik").innerHTML = wynik;
}



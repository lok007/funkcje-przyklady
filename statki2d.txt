var lok_1 = Math.floor(Math.random()*5)+1;
var lok_2 = lok_1 - 1;
var lok_3 = lok_1 + 1;
var cele = [];
var trafienia = 0;
var strzaly = 0;
var uzyte = [] ;

while (trafienia <3)
{
	var x;
	x = prompt("Podaj nr od 0 do 6");
	if ( x>=0 && x<=6){
		if (x==lok_1 || x==lok_2 || x==lok_3) 
		{
			
			alert("trafiles");
			if (uzyte.indexOf(x) == -1) {strzaly++}
			if (cele.indexOf(x) == -1) {trafienia++}
			cele.push(x);
			uzyte.push(x);
			console.log(strzaly);
		}
		else 
		{	alert("nie trafiles");
			if (uzyte.indexOf(x) == -1) {strzaly++};
			uzyte.push(x);
			console.log(strzaly);
		}
	}
	else alert("Proszę podać prawidłowy nr komórki")
}
alert("udało ci się w "+ strzaly + "strzałach")
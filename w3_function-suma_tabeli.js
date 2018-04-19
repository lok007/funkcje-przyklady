//Example : var array = [1, 2, 3, 4, 5, 6]
//Expected Output : 21

function suma_tabeli(x){
	var wynik = 0;
	for (i=0; i<=x.length -1; i++){
		wynik += x[i]
		}
	console.log(wynik);
}

suma_tabeli([1,2,3,4,6,5])
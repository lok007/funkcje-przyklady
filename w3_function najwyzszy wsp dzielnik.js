// Najwiekszy wspólny dzielnik 

function najwyzszy_dzielnik(x,y){
	var tabelax = [];
	var tabelay = [];
	var wynik = 1;

	for (i=1; i<=x; i++){
  	if (x%i == 0){
			tabelax.push(i)
		}
	} console.log(tabelax);
	for (j=1; j<=y; j++){
  	if (y%j == 0){
			tabelay.push(j)
		}
	} console.log(tabelay);

	for (i=tabelay.length -1; i>=0; i--){
	for (j=tabelax.length -1; j>=0; j--){
		if(tabelax[j] === tabelay[i]){
			wynik = tabelay[i];
			}
		} if (wynik == tabelay[i]){break}
	} console.log(wynik);
}

najwyzszy_dzielnik(75,100)
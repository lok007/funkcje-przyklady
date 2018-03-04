for:


function bubblesort(tabela){
	var l_tabeli = tabela.length -1;
	var zmien;
	var czy_zmieniamy_dalej;
	for (j=0 ;j< l_tabeli; j++){
		czy_zmieniamy_dalej = false;
		for (i=0; i<l_tabeli; i++){
			if (tabela[i]<tabela[i+1]){
				zmien = tabela [i];
				tabela [i] = tabela[i+1];
				tabela [i+1] = zmien;
				czy_zmieniamy_dalej = true;
				console.log(tabela);
			} 
		}
		 if (czy_zmieniamy_dalej === false){break;}
		 console.log(" ");
		 l_tabeli--;
	} 

}
bubblesort([101,233,753,81,95,277,105]);


do while:

function bubblesort(tabela){
	var l_tabeli = tabela.length -1;
	var zmien;
	var czy_zmieniamy_dalej;
	do {
		czy_zmieniamy_dalej = false;
		for (i=0; i<l_tabeli; i++){
			if (tabela[i]<tabela[i+1]){
				zmien = tabela [i];
				tabela [i] = tabela[i+1];
				tabela [i+1] = zmien;
				czy_zmieniamy_dalej = true;
				console.log(tabela);
			} 
		}l_tabeli--;
		console.log("");
	}
	while(czy_zmieniamy_dalej);
}
bubblesort([101,233,753,81,95,277,105]);



var tabela = [];
for (j=1; j<=3; j++){
	for (i=1; i<=10; i++){
		if (i%j==0){
			tabela[i-1] = "+";
		} else { tabela[i-1] = "-" }
	}
	console.log(tabela);
}
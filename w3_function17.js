function ponumeruj(zdanie){
var tabela = zdanie.split(" ");
var nowa_tabela = [];

for(i=0; i<tabela.length; i++){
for(j=0; j<tabela[i].length; j++){
nowa_tabela.push(tabela[i].charAt(j)+":" + (j+1))
}
}

console.log(nowa_tabela);
}

ponumeruj("ala ma kota")
function fibanacci(n){
var tabela = [];
tabela[0] = 0;
tabela[1] = 1;
for (i=2; i<=n-1; i++){
tabela[i] = tabela [i-1] + tabela[i-2]
}
console.log(tabela)
}

fibanacci(14);
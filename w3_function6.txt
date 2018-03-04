//Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

function najdluzsze_slowo(zdanie){
var tabela = zdanie.split(" ");
var najdluzsze = tabela[0];
for ( var i=0; i<tabela.length; i++){
if (tabela[i].length > najdluzsze.length){
najdluzsze = tabela[i];}
}
return najdluzsze;
}

console.log(najdluzsze_slowo("kotata mialaaaaaaaaaa kota"));
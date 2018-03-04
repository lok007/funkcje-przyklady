//funkcja ma podnieœæ 1 litery wszystkich s³ów 

function podnies(slowo) {
var tabela = slowo.split(" "); // rozbija na slowa
var nowatabela = [];

for (var x=0; x < tabela.length; x++)
// push - dodaje czesc z poprzedniej tabeli, slice uzupelnia
{
nowatabela.push(tabela[x].charAt(0).toUpperCase()+tabela[x].slice(1));
}
return nowatabela.join(" ");  // laczy slowa
}

console.log(podnies("moja mama"));
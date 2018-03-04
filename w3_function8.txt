function czy_pierwsza(x) {
var l_dzielnikow = 0;
var j = x
for (var i=1; i<=j; i++){
if (j % i === 0){
l_dzielnikow = l_dzielnikow + 1;
}
}
if (l_dzielnikow == 2){
return "tak"}
else return "nie";
}

console.log(czy_pierwsza())
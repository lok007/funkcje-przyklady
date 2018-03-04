//program kt鏎y sprawdza czy funkcja jest anagramem
function sprawdz(slowo){
var slowo1 = slowo.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
var wsp_slowa = 0;

//sprawdzamy czy podano podane wyra瞠nie nie jest puste
if (slowo1 === "") {
alert("nie podano s這wa");
return false;
}
// sprawdzamy czy jest parzyste czy nieparzyste badz dlugosci 1 litery
if ((slowo1.length) % 2 ===0) {
wsp_slowa = (slowo1.length)/2;
}
else if (slowo.length === 1) {
alert("s這wo jest anagramem");
return true;
}
else {
wsp_slowa = (slowo1.length - 1)/2}

for (i=0; i<wsp_slowa; i++){
if (slowo1.charAt(i) != slowo1.charAt((slowo1.length) -i -1)){
alert("s這wo nie jest anagramem");
return false;
}
else {
alert("s這wo jest anagramem");
return true;
}
}
}
sprawdz('madam');
sprawdz('trzy');

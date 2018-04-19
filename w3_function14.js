function rozmien (cena){
var nominaly = [200,100,50,20,10,5,2,1,0.50,0.20,0.10,0.05,0.02,0.01];
var rozmienione = [];

for ( let i=0; i<=nominaly.length; i++){
while (cena >= nominaly[i]){
cena = cena - nominaly[i];
rozmienione.push(nominaly[i])
}}
console.log(rozmienione)
}
rozmien(13.23);
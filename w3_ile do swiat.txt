//Write a JavaScript program to calculate days left until next Christmas

function iledoBN(){
var data = new Date();
var swieta = new Date(2018, 11, 24, 0, 0, 0, 0)
var wynik = Math.round((swieta - data)/(1000*60*60*24));
console.log("aktualny czas: " + data);
console.log("data œwi¹t: " + swieta);
console.log("do œwi¹t pozosta³o: " + wynik + " dni" );
}
iledoBN();
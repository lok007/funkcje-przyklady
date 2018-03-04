function losuj(n){
var text = "";
var lista = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

for(i=0; i<n; i++){
text = text + lista.charAt(Math.floor(Math.random()*lista.length));
}
console.log(text);
}

losuj(3);
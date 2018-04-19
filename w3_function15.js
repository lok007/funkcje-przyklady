function wyrzuc(slowo){
var wyrzuc_litery = 'p'
var tabela =slowo.split("") ;
for(i=0; i<slowo.length; i++){
if (wyrzuc_litery.indexOf(slowo.charAt(i)) !== -1){
tabela[i] ="" 
}
}
slowo = tabela.join("");
console.log(slowo);
}


wyrzuc("Monia");
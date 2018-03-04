function znajdz(slowo, litera){
var l_liter = 0;
  for (i=0; i<slowo.length; i++){
if(litera.indexOf(slowo.charAt(i)) !== -1){
l_liter = l_liter + 1;
}
}
console.log(l_liter);
}

znajdz("olao", "o")
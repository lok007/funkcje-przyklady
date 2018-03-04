function ile_samoglosek(zdanie) {
var lista_samoglosek = 'aeiouyAEIOUY';
var liczbasg = 0;

for (i=0; i<zdanie.length; i++){
if (lista_samoglosek.indexOf(zdanie.charAt(i)) !== -1){
liczbasg = liczbasg + 1;
}
}
return liczbasg;
}

console.log(ile_samoglosek("ala nie robi mu pa³y"))
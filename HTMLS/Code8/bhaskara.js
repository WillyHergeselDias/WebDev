function bh(){
let a = Number(document.getElementById('A').value)
let b = Number(document.getElementById('B').value)
let c = Number(document.getElementById('C').value)
let delta = b*b-4*a*c
if(delta < 0){
 document.getElementById('resultado').innerHTML = "Erro: Raizes negativas."
}
else{
let rdelta = Math.sqrt(delta)
let x1 = (-b + rdelta)/(2*a)
let x2 = (-b - rdelta)/(2*a)
document.getElementById('resultado').innerHTML = "Delta: "+delta.toFixed(3)+"<br>Raiz de Delta: "+rdelta.toFixed(3)+"<br>XI: "+ x1.toFixed(3)+ "<br>XII: "+ x2.toFixed(3)
}
}
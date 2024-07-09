function trigo(){
let H = Number(document.getElementById("H").value)
let CO = Number(document.getElementById("CO").value)
let CA = Number(document.getElementById("CA").value)
let Seno = CO/H
let Cosseno = CA/H
let Tang = CO/CA
let Cotang = CA/CO
document.getElementById("resultado").innerHTML = `
Seno: ${Seno}
<br>
Cosseno: ${Cosseno}
<br>
Tangente: ${Tang}
<br>
Cotangente: ${Cotang}
`
}
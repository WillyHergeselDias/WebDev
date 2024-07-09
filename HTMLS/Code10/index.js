function certo(){
 let texto = document.getElementById("texto")
 texto.style.fontSize = "75px"
 texto.innerHTML = "CORRETO!"
 texto.style.color = "green"
 let button = document.getElementById("RC")
 button.style.color = "greenyellow"
 button.style.backgroundColor = "green"
 document.getElementById("RE").onclick = ""
 document.getElementById("RE2").onclick = ""
}

 function errado(){
  texto.style.fontSize = "75px"
  texto.innerHTML = "INCORRETO!"
  texto.style.color = "red"
  let button2 = document.getElementById("RE")
  button2.style.color = "darkred" 
  button2.style.backgroundColor = "red"
  document.getElementById("RE2").onclick = ""
  document.getElementById("RC").onclick = ""
 }
 function errado2(){
  texto.style.fontSize = "75px"
  texto.innerHTML = "INCORRETO!"
  texto.style.color = "red"
  let button3 = document.getElementById("RE2")
  button3.style.color = "darkred" 
  button3.style.backgroundColor = "red"
  document.getElementById("RE").onclick = ""
  document.getElementById("RC").onclick = ""
 }
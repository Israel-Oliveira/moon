const texto = document.querySelector('body a h1')
const link = document.querySelector('body a')

texto.addEventListener("mouseenter", ()=>{
  texto.style.color = "rgb(15, 154, 179)"
  texto.innerHTML = "Voltar"

  link.href = "../"
})

texto.addEventListener("mouseout", ()=>{
  texto.style.color = "white"
  texto.innerHTML = "Em breve!"
})
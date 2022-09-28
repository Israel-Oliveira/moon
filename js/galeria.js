
var modals = document.querySelectorAll('.group-card .modal-card')
var itens = document.querySelectorAll('.group-card .card');
var chek = document.querySelectorAll('.group-card .modal-card input')


function cardss(posicao){
  itens[posicao].addEventListener("click", () =>{
    modals[posicao].classList.toggle('escondido')
  })

  modals[posicao].addEventListener("click", () =>{
    modals[posicao].classList.toggle('escondido')
  })
}

for(var i = 0; i < itens.length;i++){
  cardss(i)
}


for(var c = 0; c < chek.length;c = c+3){
  chek[c].checked = true
}


  


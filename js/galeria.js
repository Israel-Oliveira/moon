
var modals = document.querySelectorAll('.group-card .modal-card')
const modal = document.querySelector('.modal-card');


var itens = document.querySelectorAll('.group-card .card');



for(var i=0; i<itens.length;i++){
  itens[i].addEventListener("click", () =>{
    modal.classList.toggle('escondido')
  })

  modals[i].addEventListener("click", () =>{
    modal.classList.toggle('escondido')
  })
}

// for(var z=0; z<itens.length;z++){
//   modals[z].addEventListener("click", () =>{
//     modal.classList.toggle('escondido')
//   })
// }




// card.addEventListener("click", () =>{
//   modal.classList.toggle('escondido')
// })

// modal.addEventListener("click", () =>{
//   modal.classList.toggle('escondido')
// })



const checkbox = document.getElementById('checkbox')
const menu = document.querySelector('.menu')

checkbox.addEventListener('change', (checado) =>{
  if(checado.currentTarget.checked){
    menu.classList.remove('class', 'menu')
    menu.classList.add('class', 'menu_excondido')
  }else{
    menu.classList.remove('class', 'menu_excondido')
    menu.classList.add('class', 'menu')
  }
})
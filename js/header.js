const checkbox = document.getElementById('checkbox')
const menu = document.querySelector('.menu')
const hdescondido = document.querySelector('header')
const logoescondida = document.querySelector('.logo')

checkbox.addEventListener('change', (checado) =>{
  if(checado.currentTarget.checked){
    menu.classList.remove('class', 'menu')
    menu.classList.add('class', 'menu_excondido')
    hdescondido.classList.toggle('hd-expanded')
    logoescondida.classList.add('logo-expanded')
  }else{
    menu.classList.remove('class', 'menu_excondido')
    menu.classList.add('class', 'menu')
    hdescondido.classList.toggle('hd-expanded')
    logoescondida.classList.remove('logo-expanded')
  }
})
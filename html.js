const btn1 = document.querySelector('button')
const listaFilmes = document.querySelector('#listaFilmes')
const itemLista = document.createElement('li')
const textoUsuario = document.querySelector('#filmeInput')

btn1.addEventListener('click', ()=>{
    listaFilmes.append(itemLista)  // 
    itemLista.innerHTML=textoUsuario.value
    window.alert('Clicou')
    //adiciona uma  classe
    //itemLista.classList.add(active)
    //muda o css
    itemLista.style.backgroundColor = "red"
})
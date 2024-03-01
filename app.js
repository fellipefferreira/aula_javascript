//const listaFilmes =  document.querySelector('#listaFilmes')
//const filmeInput = document.querySelector('#filmeInput')
//const btn1 = document.querySelector('button')
//const filmes = ['Harry Potter', 'Avatar', 'Up', 'Elementos', 'Vovózona']
//filmes.push('Branquelas')
//filmes.pop

//btn1.addEventListener('click', ()=>{
//    let filmeDigitado = filmeInput.value
 ///   console.log
 //   filmes.push(filmeDigitado)
//})

// Elemento DOM

const listaFilmes = document.querySelector('#listaFilmes')
const filmes = [{
    nome:'Harry Potter',
    lancamento:2001,
    genero:'Fantasia',
    atores:{
        ator: 'Daniel'
    }
},{
    nome:'vovózona',
    lancamento:2000,
    genero:'comedia'
}]

window.onload = () =>{
    for(let i=0; i < filmes.length; i++){
       let itemLista = document.createElement('li'); // criando elemento
       listaFilmes.append(itemLista)
       itemLista.innerHTML = filmes[i].nome

       itemLista.classList.add(itemFavorito)
       let anoLancamento = document.createElement('li')
       listaFilmes.append(anoLancamento)
       anoLancamento.innerHTML =  `<strong>Data de lancamento</strong> ${filmes[i].lancamento}`
     }
}

filmes.forEach((meuElemento)=>{
    console.log(meuElemento.nome + 'Vai corinthia')
})
import './banner.css'
// props guarda os atributos  (Objeto)
function Banner(props){
    return(
        <header>
            <h1 className="titulo-banner">{props.textoBanner}</h1>
            <h1 className="titulo-banner">{props.numeroTentativas}</h1>
            <p>Paragrafo do meu banner</p>
        </header>
    )
}

export default Banner
import Contato from '../Contato/Contato'
import Habilidade from '../Habilidade/Habilidade'
import InfoPessoal from '../infoPessoais/InfoPessoais'

function Principal(){
    return(
        <div class="mainInfo">
            <section id="info">
                <InfoPessoal/>
                <Habilidade/>
            </section>
                <Contato/>
        /</div>
    )
}

export default Principal
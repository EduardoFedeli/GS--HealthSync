import Logo from '../src/Imagens/LogoSemFundo.png'; 

import './styles/style.scss';

export default function Cabecalho() {
    return (
        <div className="cabecalho">
            <img src={Logo} alt="Descrição da imagem" className="imagem-centralizada" />
        </div>
    );
}

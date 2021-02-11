import "./Navegador.css";
import imageLogo from "../../../img/logoInsta.jpg";

export function Navegador(props){
    let Link = (props) => (<a className={props.linkClassName} href=""> {props.linkTexto} </a>)
    let UsuarioLogado = ({nomeUsuario}) => (<p className="usuario-logado-nav"> {nomeUsuario} </p>)
    return (
        <nav className="navegador">
            {/* Como a logo já fica à esquerda da página, eu só fiz algumas alterações no css */}
            <img src={imageLogo} alt="Logo" className="logo-nav"></img>

            {/* Criei uma div abrangendo os botões e o nome do usuário logado */}
            <div className="opcoes-nav">
                <Link linkTexto="Linha do tempo" linkClassName="link-linha-do-tempo"></Link>
                <Link linkTexto="Postar" linkClassName="link-postar"></Link>
                <UsuarioLogado nomeUsuario="Leticia"></UsuarioLogado>            
            </div>
        </nav>
    )
}
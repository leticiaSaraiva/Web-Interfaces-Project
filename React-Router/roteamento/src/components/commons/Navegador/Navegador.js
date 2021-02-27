import "./Navegador.css";
import imageLogo from "../../../img/logoInsta.jpg";
import { NavLink } from 'react-router-dom';

export function Navegador(props){
    let UsuarioLogado = ({nomeUsuario}) => (<p className="usuario-logado-nav"> {nomeUsuario} </p>)
    return (
        <nav className="navegador">

            <img src={imageLogo} alt="Logo" className="logo-nav"></img>

            <div className="opcoes-nav">
                <NavLink
                    exact
                    className="link"
                    to="/">
                        Linha do tempo
                </NavLink>

                <NavLink
                    className="link"
                    to="/postar">
                        Postar
                </NavLink>
            
                <UsuarioLogado nomeUsuario="Leticia"></UsuarioLogado>            
            </div>
        </nav>
    )
}
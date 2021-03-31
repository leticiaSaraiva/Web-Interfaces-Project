import "./Navegador.css";
import imageLogo from "../../../img/logoInsta.jpg";
import { NavLink } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../../App";
import history from "../../../history";

function NavegadorLogado({nome}){
    const {setAuth} = useContext(AuthContext);

    return(
        <nav className="navegador">
            <img src={imageLogo} alt="Logo" className="logo-nav"></img>
            <div className="opcoes-nav">
                <div className="link" 
                    onClick={()=>{setAuth({token: null, nome: null}); history.push("/login");}}>
                    Logout
                </div>

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

                <div className="usuario-logado-nav">
                    {nome}
                </div>
            </div>
        </nav>
    )
}

function NavegadorNaoLogado(){
    return (
        <nav className="navegador">

            <img src={imageLogo} alt="Logo" className="logo-nav"></img>

            <div className="opcoes-nav">
                
                <NavLink
                    exact
                    className="link"
                    to="/cadastro">
                        Cadastrar
                </NavLink>

                <NavLink
                    className="link"
                    to="/login">
                        Login
                </NavLink>
                
            </div>
        </nav>
    )
}

export function Navegador(){
    
    const {auth} = useContext(AuthContext);

    return (
        <div>
            {auth.token === "null" || auth.token === null ? 
                <NavegadorNaoLogado></NavegadorNaoLogado> :
                <NavegadorLogado nome={auth.nome}></NavegadorLogado>
            }
        </div>    
    )
}
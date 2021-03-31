import { PaginaPostar } from './components/pages/PaginaPostar/PaginaPostar';
import { Router, Route, Redirect } from 'react-router-dom';
import history from './history';
import { PaginaPrincipal } from './components/pages/PaginaPrincipal/PaginaPrincipal';
import { PaginaLogin } from './components/pages/PaginaLogin/PaginaLogin';
import { createContext, useState } from 'react';
import { PaginaCadastro } from './components/pages/PaginaCadastro/PaginaCadastro';

export const AuthContext = createContext(null);

function App() {

  const [auth, setAuth] = useState({token: localStorage.getItem("token"), nome: localStorage.getItem("nome")});
  
  const setAuthLS = (newAuth) => {
    setAuth(newAuth);
    localStorage.setItem("token", newAuth.token);
    localStorage.setItem("nome", newAuth.nome);
  }
  
  return (

    <AuthContext.Provider value={{auth: auth, setAuth: setAuthLS}}>
      <Router history={history}>
        
        <Route exact path="/">
          {
            auth.token === null || auth.token === "null"
            ? <Redirect to="/login"></Redirect>
            : <PaginaPrincipal></PaginaPrincipal>
          }
        </Route>

        <Route 
          path="/postar"
          component={PaginaPostar}>
        </Route>

        <Route
          path="/login"
          component={PaginaLogin}>
        </Route>

        <Route
          path="/cadastro"
          component={PaginaCadastro}>
        </Route>

      </Router>
    </AuthContext.Provider>
  );
}

export default App;

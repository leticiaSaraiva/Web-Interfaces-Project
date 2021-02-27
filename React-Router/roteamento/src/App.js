import { PaginaPostar } from './components/pages/PaginaPostar/PaginaPostar';
import { Router, Route } from 'react-router-dom';
import history from './history';
import { PaginaPrincipal } from './components/pages/PaginaPrincipal/PaginaPrincipal';

function App() {
  return (
    // Implementação dos links ativos.
    // Os componentes utilizados para na implementação são o Router e o Route.

    // O Router é o componente raiz da aplicação.
    // O history é o objeto que o Router utilizará para o controle da transição das páginas.
    // Depois que o objeto 'history' foi criado, é possível configurá-lo para fazer as trocas de rota.
    // Para cada rota é indicado qual o caminho e o que será exibido nessa rota.
    <Router history={history}>
     
      {/* Cada Route é uma rota da aplicação. */}

      {/* Primeira rota. */}
      <Route exact path="/">
        <PaginaPrincipal></PaginaPrincipal>
      </Route>

      {/* Segunda rota. */}
      <Route path="/postar">
        <PaginaPostar></PaginaPostar>
      </Route>

    </Router>
  );
}

export default App;

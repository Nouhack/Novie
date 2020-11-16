import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import InitialPage from './pages/InitialPage/InitialPage'
import Logo from './components/logo/Logo'
import { Route, Switch } from 'react-router-dom'
import MovieListPage from './pages/MovieListPage/MovieListPage'
import DetailsPage from './pages/DetailsPage/DetailsPage'
import ErrorPage from './pages/404/ErrorPage'

const App = () => {
  return (
    <Container fluid="md" className='App'>
      <Logo />
      <Switch>
        <Route path="/Search/:type/:title/:page" exact component={MovieListPage}></Route>
        <Route path="/Search/:type/:imdbid" exact component={DetailsPage}></Route>
        <Route path="/" exact component={InitialPage}></Route>
        <Route component={ErrorPage}></Route>
      </Switch>
    </Container>
  );
}

export default App;

// routes.js
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Actors from './pages/Actors';
import Directors from './pages/Directors';
import ErrorPage from './pages/ErrorPage';

const routes = (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/movie/:id" component={Movie} />
      <Route path="/actors" component={Actors} />
      <Route path="/directors" component={Directors} />
      <Route component={ErrorPage} />
    </Switch>
  </Router>
);

export default routes;

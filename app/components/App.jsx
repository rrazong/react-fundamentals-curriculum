import React from 'react';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import CityForm from './CityForm';
import Details from './Details';
import Forecast from './Forecast';

const Nav = () => (
  <div className="nav">
    <Link
      className="nav-title"
      to="/"
    >
      <h1 className="nav-title">Weather App</h1>
    </Link>
    <CityForm />
  </div>
);

const Home = () => (
  <div className="home">
    <CityForm prompt="Enter a City and State" />
  </div>
);

const App = () => (
  <Router>
    <div className="app">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/forecast" component={Forecast} />
        <Route path="/details/:city" component={Details} />
      </Switch>
    </div>
  </Router>
);

export default App;

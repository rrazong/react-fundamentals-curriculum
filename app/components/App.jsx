import React from 'react';
import CityForm from './CityForm';

function App() {
  return (
    <div className="app">
      <Nav />
      <Home />
    </div>
  );
}

const Nav = () => (
  <div className="nav">
    <h1 className="nav-title">Weather App</h1>
    <CityForm />
  </div>
);

const Home = () => (
  <div className="home">
    <CityForm prompt="Enter a City and State" />
  </div>
);

export default App;

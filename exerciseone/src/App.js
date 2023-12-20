import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './component/Header/Header';
import Card from './component/Card/Card';




const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <div className='row'>
          <div className='col'>
            <Card />
          </div>
          <div className='col'>
            <Card />
          </div>
          <div className='col'>
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

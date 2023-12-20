import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './component/Header/Header';
import Card from './component/Card/Card';
import image01 from './assets/01.jpg';




const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <div className='row'>
          <div className='col'>
            <Card 
                image={image01}
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat."
              />
          </div>
          <div className='col'>
            <Card 
                image={image01}
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat."
              />
          </div>
          <div className='col'>
            <Card 
                image={image01}
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat."
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

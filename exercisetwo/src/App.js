import React from 'react';
import './App.css';
import ResponsiveTabsAccordion from './ResponsiveTabsAccordion/ResponsiveTabsAccordion';
import data from './data.json';

function App() {
  return (
    <div>
      <ResponsiveTabsAccordion data={data} />
    </div>
  );
}

export default App;

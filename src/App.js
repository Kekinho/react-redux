import './App.css';
import React from 'react';
import Card from './components/card/Card';
import CustomPieChart from './components/charts/pie/CustomPieChart';
import Fill from './components/fill/Fill'

function App() {

 
  return (
    <div className='App'>
      <h1>Dashboard</h1>
      <div className='Cards'>
        <Fill ></Fill>
        <CustomPieChart></CustomPieChart>
        <Card title='Card 3' grey>
          x
        </Card>
        <Card title='Card 4' grey>
          x
        </Card>
      </div>
    </div>
  );
}

export default App;

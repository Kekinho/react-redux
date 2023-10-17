import './App.css';
import React, { useState } from 'react';
import Card from './components/card/Card';
import CustomPieChart from './components/charts/pie/CustomPieChart';
import Fill from './components/fill/Fill'

function App() {



  var [data, setData] = useState(
    [{ name: 'Group A', value: 150 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 50 },
    { name: 'Group D', value: 200 },
    ])


  return (
    <div className='App'>
      <h1>Dashboard</h1>
      <div className='Cards'>
        <Fill onChange={setData}></Fill>
        <CustomPieChart data={data}></CustomPieChart>
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

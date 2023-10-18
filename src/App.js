import './App.css';
import React, {useState } from 'react';
import Card from './components/card/Card';
import CustomPieChart from './components/charts/pie/CustomPieChart';
import Fill from './components/fill/Fill'
import FlipCard from './components/flip_card/FlipCard';

function App() {

  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const handleCardFlip = () => {
      setIsCardFlipped(!isCardFlipped);
  }
 
  return (
    <div className='App'>
      <h1>Dashboard</h1>
      <div className='Cards'>
        <Fill ></Fill>
        <CustomPieChart></CustomPieChart>
        <FlipCard title='Flip Card' grey>
          x
        </FlipCard>
        <FlipCard title='Flip Card' grey>
          x
        </FlipCard>
        <Card title='Card 4' grey>
          x
        </Card>
        <CustomPieChart></CustomPieChart>
      </div>
    </div>
  );
}

export default App;

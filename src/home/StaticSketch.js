import './style.css';
import React, {useState, useEffect } from 'react';
import Card from '../components/card/Card'
import CustomPieChart from '../components/charts/pie/CustomPieChart';
import Fill from '../components/fill/Fill'
import FlipCard from '../components/flip_card/FlipCard';
import CustomChartLine from '../components/charts/line/CustomChartLine';
import { fetchStockData } from '../infra/stockapi/data';

function StaticSketch() {

  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchStockData();
      console.log(data);
      setStockData(data);
    }
    fetchData();
    const intervalId = setInterval(async () => {
      const data = await fetchStockData();
      console.log(data);
      setStockData(prevData => [...prevData, ...data]);
    }, 1 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);



  const lineChartData = [
    { name: 'January', value1: 30, value2: 40, value3: 25 },
    { name: 'February', value1: 40, value2: 35, value3: 45 },
    { name: 'March', value1: 25, value2: 50, value3: 30 },
    { name: 'April', value1: 45, value2: 30, value3: 35 },
    // adicione mais meses e valores conforme necessário
  ];

  const lineChartKeys = ['value1', 'value2', 'value3'];

  const lineChartStocksKeys = ['value1', 'value2', 'value3'];

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
        <CustomChartLine data={lineChartData} dataKeys={lineChartKeys} colors={['#8884d8', '#82ca9d', '#ffc658']}/>
      </div>
    </div>
  );
}

export default StaticSketch;

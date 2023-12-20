import './style.css';
import React, {useState, useEffect } from 'react';
import Card from '../components/card/Card'
import CustomPieChart from '../components/charts/pie/CustomPieChart';
import Fill from '../components/fill/Fill'
import FlipCard from '../components/flip_card/FlipCard';
import CustomChartLine from '../components/charts/line/CustomChartLine';
import { fetchStockData } from '../infra/stockapi/data';

function DynamicSketch() {

  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchStockData();
      console.log(data);

      // Adiciona o horário atual à entrada de dados
      const currentTime = new Date().toLocaleTimeString();

      // Cria um novo objeto com a estrutura desejada
      const newData = { name: currentTime, ...data.reduce((acc, item) => ({ ...acc, [item.acao]: parseFloat(item.cotacao) }), {}) };

      setStockData(prevData => [...prevData, newData]);
    }

    fetchData();
    const intervalId = setInterval(fetchData, 20 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);
  
  //const lineChartStocksKeys = ['AAPL', 'MSFT', 'AMZN', 'TSLA', 'FB']; 
  const lineChartStocksKeys1 = ['AAPL']; 
  const lineChartStocksKeys2 = ['MSFT']; 
  const lineChartStocksKeys3 = ['AMZN']; 
  const lineChartStocksKeys4 = ['TSLA']; 
  const lineChartStocksKeys5 = ['FB'];

  // Ajuste de exemplo para o gráfico de linha
/*    const lineChartData = [
    { name: '22:10', acao1: 30, acao2: 40, acao3: 25 },
    { name: '22:15', acao1: 43, acao2: 40, acao3: 25 },
    { name: '22:20', acao1: 12, acao2: 54, acao3: 87},
    // adicione mais ações e valores conforme necessário
  ];

  const lineChartKeys = ['acao1', 'acao2', 'acao3'];  */

 
  return (
    <div className='App'>
      <h1>Dashboard</h1>
      <div className='Cards'>
        <CustomChartLine data={stockData} dataKeys={lineChartStocksKeys1} colors={['#8884d8', '#82ca9d', '#ffc658']}/>
        <CustomChartLine data={stockData} dataKeys={lineChartStocksKeys2} colors={['#8884d8', '#82ca9d', '#ffc658']}/>
        <CustomChartLine data={stockData} dataKeys={lineChartStocksKeys3} colors={['#8884d8', '#82ca9d', '#ffc658']}/>
        <CustomChartLine data={stockData} dataKeys={lineChartStocksKeys4} colors={['#8884d8', '#82ca9d', '#ffc658']}/>
        <CustomChartLine data={stockData} dataKeys={lineChartStocksKeys5} colors={['#8884d8', '#82ca9d', '#ffc658']}/>
      </div>
    </div>
  );
}

export default DynamicSketch;

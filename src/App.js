import './App.css';
import Card from './components/card/Card';
import CustomPieChart from './components/charts/pie/CustomPieChart';

function App() {
  return (
    <div className='App'>
      <h1>Dashboard</h1>
      <div className='Cards'>
        <Card title='Card 1' grey>
          x
        </Card>
        <CustomPieChart title='Charts 1' grey>
          x
        </CustomPieChart>
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

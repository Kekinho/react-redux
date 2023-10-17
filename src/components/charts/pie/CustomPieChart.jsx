import React, { PureComponent } from 'react';
import Card from "../../card/Card";
import CustomPie from './CustomPie';
import Legends from './Legends';
import './CustomPieChart.css'



const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// eslint-disable-next-line
export default props => {
    const data = props.data
    return (
        <Card title="Chart" grey>
            <div className='chart-content'>
                <div className="chart">
                    <CustomPie data={data} colors={COLORS}></CustomPie>
                </div>
                <div className="chart-info">
                    <Legends data={data} colors={COLORS}></Legends>
                </div>
            </div>


        </Card>
    )
}
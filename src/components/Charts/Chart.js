import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
    const dataPointValue= props.dataPoints.map(dataPoint=>dataPoint.value);
    const totalMaximum=Math.max(...dataPointValue)
    return (
        <div className='chart'>
           { props.dataPoints.map(dataPoint=><ChartBar key={dataPoint.label} maxValue={totalMaximum} value={dataPoint.value} label={dataPoint.label}/>)}
        </div>
    );
}

export default Chart;

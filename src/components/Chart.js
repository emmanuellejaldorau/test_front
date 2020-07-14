import React, { useState, useEffect, useRef } from 'react';
import Chartjs from 'chart.js';

const chartConfig = {
    type: 'bar',
    data: {
        datasets: [{
            label: 'Region Dataset',
            data: [10, 20, 30, 40]
            }, {
            label: 'Department Dataset',
            data: [50, 50, 50, 50]
            }, {
            label: 'Ville Dataset',
            data: [10, 20, 30, 40]
        }],
        labels: ['January', 'February', 'March', 'April']
    },
    options: {
        // ...
    }
};



const Chart = () => {
  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, chartConfig);
      setChartInstance(newChartInstance);
    }
  }, [chartContainer]);

  return (
    <div>
      <canvas ref={chartContainer} />
    </div>
  );
};

export default Chart;
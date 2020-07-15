import React, { useState, useEffect, useRef } from 'react';
import Chartjs from 'chart.js';


const Chart = (props) => {

  const chartConfig = {
    type: 'bar',
    data: {
        labels: props.labels,
        datasets: [{
            label: 'Évènements par Région',
            data: props.counts
        }]
    },
    options: {
      //...
    }
};

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
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

interface SemiDonutProps {
  height?: number;
  value?: number;
  label?: string;
}

const SemiDonut: React.FC<SemiDonutProps> = ({
  height = 200,
  value = 75,
  label = '',
}) => {
  const data = {
    datasets: [
      {
        data: [value, 100 - value],
        backgroundColor: ['#007bff', '#eee'],
        borderWidth: 0,
        borderRadius: 50,
      },
    ],
  };

  const options: ChartOptions<'doughnut'> = {
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      },
      datalabels: {
        display: false
      }
    },
    rotation: -100,
    circumference: 200,
    clip: 1000,
    cutout: "78%",
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <div style={{ position: 'relative' }}>
      <Doughnut
        data={data}
        options={options}
        height={height}
      />
      <div
        style={{
          position: "absolute",
          top: "65%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center"
        }}
      >
        <div>{label}</div>
      </div>
    </div>
  )
}

export default SemiDonut;
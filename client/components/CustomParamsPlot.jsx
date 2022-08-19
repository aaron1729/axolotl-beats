import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';

ChartJS.register(LinearScale, PointElement, LineElement, Legend, Tooltip);

function CustomParamsPlot(props) {
  const { breakpointsArr } = props;

  const colorScheme = ['#3b82f6', '#22c55e', '#f97316', '#14b8a6', '#6b7280'];

  const data = {
    datasets: [],
  };

  const customParamsList = Object.keys(breakpointsArr[0].custom_params);

  for (let i = 0; i < customParamsList.length; i++) {
    const getParamCoords = breakpointsArr.map((element) => {
      return {
        x: element.minute,
        y: element.custom_params[customParamsList[i]] * 100,
      };
    });

    const paramsObj = {
      label: `${customParamsList[i]} over time`,
      data: getParamCoords,
      backgroundColor: colorScheme[i] ? colorScheme[i] : 'rgb(255, 99, 132)',
      borderColor: colorScheme[i] ? colorScheme[i] : 'rgb(255, 99, 132)',
      showLine: true,
    };

    data.datasets.push(paramsObj);
  }

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Minutes',
        },
      },
      y: {
        title: {
          display: true,
          text: 'parameter values',
        },
      },
    },
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  return <Scatter data={data} options={options} />;
}
export default CustomParamsPlot;

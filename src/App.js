import React from 'react';
import { Bar, Line } from 'react-chartjs-2';

import Statistics from './components/Statistics';
import chartsData from './data.json';

const CHART_COLORS = ['#36a1eb', '#4cc0bf', '#ffcd56', '#ff6383'];
const DATA_LABELS = {
  nc: 'Net Comp',
  ahr: 'Analyzer HR',
  qr: 'Question Right'
};

const App = () => {
  const getLineChartData = () => {
    const labels = chartsData.revenue.map(record => `Week ${record.week}`);
    const datasets = Object.keys(chartsData.revenue[0].data).map((key, index) => {
      const getValues = chartsData.revenue.map(record => record.data[key]);

      return {
        data: getValues,
        label: DATA_LABELS[key],
        fill: false,
        borderWidth: 4,
        pointBorderWidth: 4,
        pointRadius: 6,
        backgroundColor: CHART_COLORS[index],
        borderColor: CHART_COLORS[index],
        pointBackgroundColor: CHART_COLORS[index],
        pointHoverBackgroundColor: CHART_COLORS[index],
        pointHoverBorderWidth: 0,
        pointHoverRadius: 6,
        lineTension: 0
      };
    });

    return {
      labels,
      datasets
    };
  };
  const getBarChartData = () => {
    const labels = chartsData.instalations.map(record => `Week ${record.week}`);
    const datasets = Object.keys(chartsData.instalations[0].data).map((key, index) => {
      const getValues = chartsData.instalations.map(record => record.data[key]);

      return {
        data: getValues,
        label: DATA_LABELS[key],
        fill: false,
        borderColor: CHART_COLORS[index],
        backgroundColor: CHART_COLORS[index]
      };
    });

    return {
      labels,
      datasets
    };
  };
  const getChart = (type, title) => {
    const yAxLabel = type === 'line' ? '$' : '';
    const stepSize = type === 'line' ? 500 : 5;
    const chartOptions = {
      responsive: true,
      title: {
        display: true,
        text: title,
        position: 'top',
        fontStyle: 'normal'
      },
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 15
        }
      },
      scales: {
        yAxes: [
          {
            ticks: {
              stepSize,
              callback: (value, index, values) => (index === values.length - 1 ? yAxLabel : value)
            }
          }
        ],
        xAxes: [
          {
            gridLines: {
              display: false
            }
          }
        ]
      }
    };

    return (
      <div>
        {type === 'line' ?
          <Line
            data={getLineChartData()}
            options={chartOptions}
          />
          :
          <Bar
            data={getBarChartData()}
            options={chartOptions}
          />
        }
      </div>
    );
  };
  const dollarIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 486.025 486.025">
      <path d="M420.725 85.413c-42.1-42.1-98.1-65.3-157.6-65.3-60.6 0-117.3 23.9-159.6 67.3-4.6 4.7-4.5 12.3.2 17 4.7
        4.6 12.3 4.5 17-.2 37.8-38.7 88.3-60 142.4-60 109.7-.1 198.9 89.1 198.9 198.8s-89.2 198.9-198.9
        198.9-198.8-89.2-198.8-198.9v-2.5l19.7 19.8c2.3 2.3 5.4 3.5 8.5 3.5s6.1-1.2 8.5-3.5c4.7-4.7 4.7-12.3
        0-17l-40.2-40.3c-4.7-4.7-12.3-4.7-17 0l-40.3 40.3c-4.7 4.7-4.7 12.3 0 17s12.3 4.7 17 0l19.8-19.8v2.5c0
        59.5 23.2 115.5 65.3 157.6s98.1 65.3 157.6 65.3 115.5-23.2 157.6-65.3c42-42.1 65.2-98.1
        65.2-157.6s-23.2-115.5-65.3-157.6z"
      />
      <path d="M263.125 103.613c-6.6 0-12 5.4-12 12v29.1h-7.6c-30.3 0-55 24.7-55 55s24.7 55 55 55h39.2c17.1 0 31
        13.9 31 31s-13.9 31-31 31h-70.5c-6.6 0-12 5.4-12 12s5.4 12 12 12h38.9v29.5c0 6.6 5.4 12 12 12s12-5.4
        12-12v-29.5h8.3c30-.4 54.3-24.9 54.3-55 0-30.3-24.7-55-55-55h-39.2c-17.1 0-31-13.9-31-31s13.9-31
        31-31h69.2c6.6 0 12-5.4 12-12s-5.4-12-12-12h-37.6v-29.1c0-6.6-5.3-12-12-12z"
      />
    </svg>
  );
  const downloadIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 479 479">
      <path d="M158.4 196.8c-5.3 5.3-5.3 13.8 0 19.1l71.6 71.6c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4l71.6-71.6c5.3-5.3
        5.3-13.8 0-19.1s-13.8-5.3-19.1 0L253 245.3V13.5C253 6 247 0 239.5 0S226 6 226
        13.5v231.8l-48.5-48.5c-5.3-5.3-13.9-5.3-19.1 0z"
      />
      <path d="M460.2 307.4l-47-170c-1.1-3.9-3.8-7-7.4-8.7l-1.3-.6c-1.8-.8-3.7-1.2-5.6-1.2h-84.7c-7.5
        0-13.5 6-13.5 13.5s6 13.5 13.5 13.5h75.6l39.7 143.8h-105c-7.5 0-13.5 6-13.5 13.5v12.2c0 17.9-14.5
        32.4-32.4 32.4h-82.4c-17.9 0-32.4-14.5-32.4-32.4v-12.2c0-7.5-6-13.5-13.5-13.5H49.4l39.9-144.1h75.6c7.5
        0 13.5-6 13.5-13.5s-6-13.5-13.5-13.5H80.1c-1.9 0-3.8.4-5.6 1.2l-1.3.6c-3.6 1.7-6.4 4.8-7.4 8.7l-47
        170c-.3 1.2-.5 2.4-.5 3.6v70.9c0 53.7 43.7 97.4 97.4 97.4h247.6c53.7 0 97.4-43.7
        97.4-97.4V311c0-1.3-.1-2.5-.5-3.6zm-26.5 74.2c0 38.8-31.6 70.4-70.4 70.4H115.7c-38.8
        0-70.4-31.6-70.4-70.4v-56.9H137c.7 32.1 27.1 58 59.4 58h82.4c32.3 0 58.7-25.9 59.4-58h95.7v56.9h-.2z"
      />
    </svg>
  );

  return (
    <div className="main">
      <Statistics
        chart={getChart('line', 'Revenue per week')}
        title="Revenue per week"
        descriptionValuePrefix="$"
        descriptionValue="32,556"
        descriptionLabel="Revenue Stream"
        buttonLabel="Revenue Analysis"
        icon={dollarIcon}
        statisticsLabel="Revenue by Solution"
      />
      <Statistics
        chart={getChart('bar', 'Installations')}
        title="Installations"
        descriptionValue="136"
        descriptionLabel="Installations"
        buttonLabel="View Instalations"
        icon={downloadIcon}
        statisticsLabel="Revenue by Solution"
      />
    </div>
  );
};

export default App;

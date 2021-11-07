import React, {useEffect, useState} from 'react'
import { Bar, PolarArea } from 'react-chartjs-2';

import styles from './Chart.module.css';

function Chart(props) {

  const [data, setData] = useState({});
  const name = "The World";
  
  useEffect(()=> {
    console.log(props.data);
    setData(props.data);
  },[props.data])

  const barChart = (
    <Bar width={500} height={400}
      data={{
        labels: ['Total','Infected', 'Recovered', 'Deaths'],
        datasets: [
          {
            label: 'People',
            backgroundColor: ['rgba(22, 160, 133, 1)', 'rgba(41, 128, 185, 1)', 'rgba(142, 68, 173, 1)', 'rgba(192, 57, 43, 1)'],
            data: [data.cases, data.active, data.recovered, data.deaths],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${data.country}` },
      }}
    />
  );

  const polarChart = (
    <PolarArea  width={400} height={400}
      data = {{
        labels: ['Cases', 'Active', 'Recovered', 'Deaths'],
        datasets: [
          {
            label: 'Cases Per One Million',
            data: [ data.casesPerOneMillion, data.activePerOneMillion, data.recoveredPerOneMillion, data.deathsPerOneMillion],
            backgroundColor: [
              'rgba(231, 76, 60, 1)',
              'rgba(155, 89, 182, 1)',
              'rgba(230, 126, 34, 1)',
              'rgba(52, 73, 94, 1)',
            ],
            borderWidth: 1,
          },
        ],
      }}
    />
  );
  return (
    <div className={styles.container}>
      <div>
        <span className={styles.title}>Total Data in <span className={styles.country}>
          {
            props.data.hasOwnProperty('country') ? data.country : name
          }
          
        </span></span>
        {barChart}
      </div>
      <div>
        <span className={styles.title}>Data Per One Million in <span className={styles.country}>
          {
            props.data.hasOwnProperty('country') ? data.country : name
          }
        </span></span>
        {polarChart}
      </div>
    </div>
  )
}

export default Chart

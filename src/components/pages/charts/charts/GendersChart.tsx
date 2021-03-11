import React from 'react'
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { observer } from 'mobx-react';
import store from '@Store/index';

const _componentDisplayName = 'GendersChart';

export interface GendersChartProps {}

const GendersChart = (props: GendersChartProps) => {
  
  const options: Highcharts.Options = {
    title: {
      text: 'Genders chart'
    },
    xAxis: {
      tickInterval: 1,
    },
    series: [
      {
        name: 'Males',
        type: 'line',
        data: store.pages.chart.charts.genders.males,
      },
      {
        name: 'Females',
        type: 'line',
        data: store.pages.chart.charts.genders.females,
      }
    ]
  }
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  );
};

GendersChart.displayName = _componentDisplayName;

export default observer(GendersChart);

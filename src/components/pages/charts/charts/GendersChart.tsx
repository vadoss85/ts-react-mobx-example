import React from 'react'
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { observer } from 'mobx-react-lite';
import { useChartGenders } from '@Store/providers/charts';

const _componentDisplayName = 'GendersChart';

export interface GendersChartProps {}

const GendersChart = observer((props: GendersChartProps) => {
  const genders = useChartGenders();
  
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
        data: genders.males,
      },
      {
        name: 'Females',
        type: 'line',
        data: genders.females,
      }
    ]
  }
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  );
});

GendersChart.displayName = _componentDisplayName;

export default GendersChart;

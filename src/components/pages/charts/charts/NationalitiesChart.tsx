import React from 'react'
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { observer } from 'mobx-react-lite';
import { useChartNationalities } from '@Store/providers/charts';

const _componentDisplayName = 'NationalitiesChart';

export interface NationalitiesChartProps {}

const NationalitiesChart = observer((props: NationalitiesChartProps) => {
  const nationalities = useChartNationalities();
  const options: Highcharts.Options = {
    chart: {
      type: 'column'
    },
    title: {
        text: 'Nationalities per request'
    },
    accessibility: {
      announceNewData: {
        enabled: true
      }
    },
    xAxis: {
      type: 'category'
    },
    yAxis: {
      title: {
        text: 'Total percent'
      }
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: '{point.y:.1f}%'
        }
      }
    },
    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },
    series: [
      {
        name: "Nationalities",
        colorByPoint: true,
        type: 'column',
        data: [
          {
            name: "AU",
            y: nationalities.AU,
          },
          {
            name: 'BR',
            y: nationalities.BR,
          },
          {
            name: 'CA',
            y: nationalities.CA,
          },
          {
            name: 'CH',
            y: nationalities.CH,
          },
          {
            name: 'DE',
            y: nationalities.DE,
          },
          {
            name: 'DK',
            y: nationalities.DK,
          },
          {
            name: 'ES',
            y: nationalities.ES,
          },
          {
            name: 'FI',
            y: nationalities.FI,
          },
          {
            name: 'FR',
            y: nationalities.FR,
          },
          {
            name: 'GB',
            y: nationalities.GB,
          },
          {
            name: 'IE',
            y: nationalities.IE,
          },
          {
            name: 'IR',
            y: nationalities.IR,
          },
          {
            name: 'NO',
            y: nationalities.NO,
          },
          {
            name: 'NL',
            y: nationalities.NL,
          },
          {
            name: 'NZ',
            y: nationalities.NZ,
          },
          {
            name: 'TR',
            y: nationalities.TR,
          },
          {
            name: 'US',
            y: nationalities.US,
          }
        ]
      }
    ],
  }

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  );
});

NationalitiesChart.displayName = _componentDisplayName;

export default NationalitiesChart;

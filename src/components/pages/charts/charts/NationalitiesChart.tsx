import React from 'react'
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { observer } from 'mobx-react';
import store from '@Store/index';

const _componentDisplayName = 'NationalitiesChart';

export interface NationalitiesChartProps {}

const NationalitiesChart = (props: NationalitiesChartProps) => { 
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
            y: store.pages.chart.charts.nationalities.AU,
          },
          {
            name: 'BR',
            y: store.pages.chart.charts.nationalities.BR,
          },
          {
            name: 'CA',
            y: store.pages.chart.charts.nationalities.CA,
          },
          {
            name: 'CH',
            y: store.pages.chart.charts.nationalities.CH,
          },
          {
            name: 'DE',
            y: store.pages.chart.charts.nationalities.DE,
          },
          {
            name: 'DK',
            y: store.pages.chart.charts.nationalities.DK,
          },
          {
            name: 'ES',
            y: store.pages.chart.charts.nationalities.ES,
          },
          {
            name: 'FI',
            y: store.pages.chart.charts.nationalities.FI,
          },
          {
            name: 'FR',
            y: store.pages.chart.charts.nationalities.FR,
          },
          {
            name: 'GB',
            y: store.pages.chart.charts.nationalities.GB,
          },
          {
            name: 'IE',
            y: store.pages.chart.charts.nationalities.IE,
          },
          {
            name: 'IR',
            y: store.pages.chart.charts.nationalities.IR,
          },
          {
            name: 'NO',
            y: store.pages.chart.charts.nationalities.NO,
          },
          {
            name: 'NL',
            y: store.pages.chart.charts.nationalities.NL,
          },
          {
            name: 'NZ',
            y: store.pages.chart.charts.nationalities.NZ,
          },
          {
            name: 'TR',
            y: store.pages.chart.charts.nationalities.TR,
          },
          {
            name: 'US',
            y: store.pages.chart.charts.nationalities.US,
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
};

NationalitiesChart.displayName = _componentDisplayName;

export default observer(NationalitiesChart);

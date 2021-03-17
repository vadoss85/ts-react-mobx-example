import React, { Fragment, useEffect } from 'react'
import UIPageWidthContainer from '@UI/UIPageWidthContainer';
import GendersChart from './charts/GendersChart';
import NationalitiesChart from './charts/NationalitiesChart';
import { useChartPageStore } from '@Store/providers/charts';

const PageCharts = () => {
  const chart = useChartPageStore();
  chart.charts.load();

  useEffect(() => {
    chart.charts.run();
    return () => {
      chart.charts.stop()
    }
  }, [])

  return (
    <UIPageWidthContainer
      useGutterTop={true}
    >
      <Fragment>
        <NationalitiesChart />
        <GendersChart />
      </Fragment>
    </UIPageWidthContainer>
  );
}

export default PageCharts;
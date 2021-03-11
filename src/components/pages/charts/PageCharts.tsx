import React, { Fragment, useEffect } from 'react'
import UIPageWidthContainer from '@UI/UIPageWidthContainer';
import GendersChart from './charts/GendersChart';
import store from '@Store/index';
import NationalitiesChart from './charts/NationalitiesChart';

const PageCharts = () => {
  store.pages.chart.charts.load();

  useEffect(() => {
    store.pages.chart.charts.run();
    return () => {
      store.pages.chart.charts.stop()
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
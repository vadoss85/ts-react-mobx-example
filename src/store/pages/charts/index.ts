import ChartSeriesList from "@Store/lists/charts/ChartSeriesList";

export default class StorePageCharts {
  charts = new ChartSeriesList({
    limit: 24,
  });
}

import { Store } from "@Store/index";
import { useGlobalStore } from "..";
type Chart = Store['pages']['chart']
type Genders = Chart['charts']['genders'];
type Nationalities = Chart['charts']['nationalities'];

const store = useGlobalStore();

export const useChartPageStore = (): Chart => {
  return store.pages.chart;
}
export const useChartGenders = (): Genders => {
  return useChartPageStore().charts.genders;
}
export const useChartNationalities = (): Nationalities => {
  return useChartPageStore().charts.nationalities;
}

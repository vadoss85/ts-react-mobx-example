import { AppTheme } from "./AppTheme";
import StorePageCharts from "./pages/charts";
import StorePageHome from "./pages/home";
import { AppRoutes } from "./Routes";

export class Store {
  routes = AppRoutes;
  theme = new AppTheme();
  pages = {
    home: new StorePageHome(),
    chart: new StorePageCharts(),
  }
}

const store = new Store();

window.mobxStore = store;

export default store;
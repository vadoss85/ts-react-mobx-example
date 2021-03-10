import { AppTheme } from "./AppTheme";
import StorePageHome from "./pages/home";
import { AppRoutes } from "./Routes";

class Store {
  routes = AppRoutes;
  theme = new AppTheme();
  pages = {
    home: new StorePageHome(),
  }
}

const store = new Store();

window.mobxStore = store;

export default store;
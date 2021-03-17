import store, { Store } from "..";

export const useGlobalStore = (): Store => {
  return store;
}

export const useThemeStore = (): Store['theme'] => {
  return store.theme;
}

export const useRoutesStore = (): Store['routes'] => {
  return store.routes;
}
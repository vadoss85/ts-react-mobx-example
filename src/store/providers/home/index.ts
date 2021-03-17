import { Store } from "@Store/index";
import { useGlobalStore } from "..";

type HomePage = Store['pages']['home'];

const store = useGlobalStore();
export const useHomePageStore = (): HomePage => {
  return useGlobalStore().pages.home;
}

export const useHomePageFilterStore = (): HomePage['filter'] => {
  return useHomePageStore().filter;
}
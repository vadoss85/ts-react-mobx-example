import ChartSeriesModel from "@Store/models/ChartSeriesModel";
import { action, makeObservable, observable } from "mobx";
import { ModelsCollection } from "./ModelsCollection";

export class ChartSeriesCollection extends ModelsCollection<ChartSeriesModel> {
  limit: number = 10;
  list = observable<ChartSeriesModel>([]);

  constructor() {
    super()

    makeObservable(this, {
      addModel: action,
    })
  }

  addModel(model: ChartSeriesModel) {
    if (this.list.length === this.limit) {
      this.list.shift();
    }

    this.list.push(model);
  }
}

export const chartSeriesCollection = new ChartSeriesCollection();
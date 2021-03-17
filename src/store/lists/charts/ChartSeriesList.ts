import { chartSeriesCollection } from "@Store/collections/ChartSeriesCollection";
import ChartSeriesModel, { ChartSeriesModelUpdateParams } from "@Store/models/ChartSeriesModel";
import { RandomUserRequest } from "../../../API/RandomUser/RandomUserRequest";
import { computed, flow, makeObservable } from "mobx";
import { DataList } from "../DataList";
import { RandomUserQueryBuilderNationalities } from "API/RandomUser/RandomUserQueryBuilder";

type ChartNationalitiesData = Record<RandomUserQueryBuilderNationalities, number>

interface ChartSeriesListArgs {
  limit: number;
}
export default class ChartSeriesList implements DataList<ChartSeriesModel> {
  collection = chartSeriesCollection;
  limit: number;
  page: number = 1;

  provider: RandomUserRequest;
  tInterval: number;
  delay: number = 4000;

  constructor(args: ChartSeriesListArgs) {
    this.provider = new RandomUserRequest();
    this.limit = args.limit;

    makeObservable(this, {
      genders: computed,
      nationalities: computed,
    })
  }

  load = flow(function* (this: ChartSeriesList) {
    try {
      this.provider.fetch({
        page: this.page,
        limit: this.limit,
      }).then((response) => {
        const { results } = response;
        const model = new ChartSeriesModel({id: `${this.page}`})
        const data: ChartSeriesModelUpdateParams = results.reduce((acc, user) => {
          if (user.gender === 'male') {
            acc.genders[0]++;
          } else {
            acc.genders[1]++;
          }

          if (!acc.nationalities[user.nat]) {
            acc.nationalities[user.nat] = 0;
          }

          acc.nationalities[user.nat]++;

          return acc;
        }, {genders: [0, 0], nationalities: {} as any})

        model.update(data);

        this.collection.addModel(model);
      });
    } catch(err) {
      console.log(err);
    }
  })

  get genders() {
    return this.collection.list.reduce((acc, chart) => {
      acc.males.push(chart.genders.male)
      acc.females.push(chart.genders.female)
      return acc;
    }, {males: [], females: []});
  }

  get nationalities() {
    return this.collection.list.reduce((acc, chart, i) => {
      if (i !== (this.collection.list.length - 1)) {
        return acc;
      }

      Object.keys(chart.nationalities).forEach((n) => {
        const nat = n as RandomUserQueryBuilderNationalities;

        acc[nat] = Number((chart.nationalities[nat]*100/this.limit).toFixed(2));
      })

      return acc;
    }, {} as Partial<ChartNationalitiesData>)
  }

  nextPage() {
    this.page++
    this.load();
  }

  run() {
    this.stop();
    this.tInterval = window.setInterval(() => {
      this.nextPage()
    }, this.delay)
  }


  stop() {
    window.clearInterval(this.tInterval);
  }

  reset() {
    // 
  }

  prevPage() {
    // 
  }

  gotoPage(page: number) {
    // 
  }
}
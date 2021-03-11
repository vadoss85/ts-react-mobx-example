import { RandomUserQueryBuilderGender, RandomUserQueryBuilderNationalities } from "API/RandomUser/RandomUserQueryBuilder";
import { RandomUser } from "API/RandomUser/RandomUserRequest";
import { action, makeAutoObservable, makeObservable, observable } from "mobx";
import { Model, ModelArgs } from "./Model";

type Arr = number;
export type ChartGendersData = Record<RandomUserQueryBuilderGender, Arr>;
export type ChartNationalitiesData = Record<RandomUserQueryBuilderNationalities, Arr>;
export type ChartSeriesModelUpdateParams = {
  genders: [number, number], // male, female;
  nationalities: ChartNationalitiesData;
}

interface ChartSeriesModelArgs extends ModelArgs {}

export default class ChartSeriesModel extends Model {
  limit: number = 10;
  genders: ChartGendersData = {
    male: 0,
    female: 0,
  };
  nationalities: ChartNationalitiesData = {
    AU: 0,
    BR: 0,
    CA: 0,
    CH: 0,
    DE: 0,
    DK: 0,
    ES: 0,
    FI: 0,
    FR: 0,
    GB: 0,
    IE: 0,
    IR: 0,
    NO: 0,
    NL: 0,
    NZ: 0,
    TR: 0,
    US: 0,
  }

  static getEmptyValues() {
    return Object.create({
      AU: 0,
      BR: 0,
      CA: 0,
      CH: 0,
      DE: 0,
      DK: 0,
      ES: 0,
      FI: 0,
      FR: 0,
      GB: 0,
      IE: 0,
      IR: 0,
      NO: 0,
      NL: 0,
      NZ: 0,
      TR: 0,
      US: 0,
    })
  }

  constructor(args: ChartSeriesModelArgs) {
    super({id: args.id});

    makeObservable(this, {
      update: action,
    })

    makeAutoObservable(this.nationalities);
    makeAutoObservable(this.genders);
  }

  @action
  update(params: ChartSeriesModelUpdateParams) {
    const { genders } = params;
    this.genders.female = genders[0]
    this.genders.male = genders[1];

    Object.keys(this.nationalities).forEach((n) => {
      const nat = n as RandomUserQueryBuilderNationalities;
      this.nationalities[nat] = params.nationalities[nat] || 0;
    })
  }
}
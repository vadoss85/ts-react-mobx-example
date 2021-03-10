import { RandomUserQueryBuilderFilterArgs, RandomUserQueryBuilderGender, RandomUserQueryBuilderNationalities } from "API/RandomUser/RandomUserQueryBuilder";
import { action, computed, flow, makeAutoObservable, makeObservable, observable, runInAction } from "mobx";
import { RandomUserRequest } from "../../../API/RandomUser/RandomUserRequest";
import { randomUsersCollection } from "../../collections/RandomUsersCollection";
import { RandomUserModel } from "../../models/RandomUserModel";
import { DataList } from "../DataList";

export type UserGender = RandomUserQueryBuilderGender;
export type UserNationality = RandomUserQueryBuilderNationalities;
export type UserNationalities = RandomUserQueryBuilderNationalities[];

interface RandomUsersListArgs {
  limit: number;
}

export class RandomUsersList implements DataList<RandomUserModel> {
  collection = randomUsersCollection;
  limit: number;
  page: number = 1;
  gender: UserGender = null;
  nationalities: UserNationalities = [];
  isFirstLoadDone: boolean = false;

  provider: RandomUserRequest;

  readonly lsSeedItemName: string = '_randomUserSeed';

  randomUsersIds: string[] = observable([]);

  constructor(args: RandomUsersListArgs) {
    const seed = localStorage.getItem(this.lsSeedItemName);
    this.limit = args.limit;

    this.provider = new RandomUserRequest({seed});

    makeObservable(this, {
      models: computed,
      count: computed,
      load: action,
      addIdsToArray: action,
      reset: action.bound,
      setGender: action,
      setNationalities: action,
    })
  }

  get models() {
    return this.randomUsersIds.map((randomUserId) => this.collection.getModelById(randomUserId));
  }

  get count(): number {
    return this.randomUsersIds.length;
  }

  load = flow(function* (this: RandomUsersList) {
    try {
      this.provider.fetch({
        page: this.page,
        limit: this.limit,
        gender: this.gender,
        nationalities: this.nationalities,
      }).then((response) => {
        const { info: {seed}, results } = response;
        // localStorage.setItem(this.lsSeedItemName, seed);
  
        const ids = results.reduce<string[]>((acc, randomUser) => {
          const model = RandomUserModel.fromApiResponse(randomUser);
          
          this.collection.addModel(model);

          acc.push(model.id);

          return acc;
        }, []);
        
        this.addIdsToArray(ids);
        this.isFirstLoadDone = true;
      });
    } catch(err) {
      console.log(err);
    }
  })

  addIdsToArray(ids: string[]): void {
    this.randomUsersIds.push(...ids);
  }

  clearIdsArray(): void {
    this.randomUsersIds.splice(0, this.randomUsersIds.length);
  }

  nextPage() {
    this.page++
    this.load();
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
    }

    this.load();
  }

  gotoPage(page: number) {
    this.page = page > 0 ? page : 1;
    this.load();
  }

  initialLoad = () => {
    if (!this.isFirstLoadDone) {
      this.isFirstLoadDone = true;
      this.load();
    }
  }

  reset() {
    this.page = 1;
    this.clearIdsArray();
    this.collection.clear();
  }

  setGender(gender: UserGender) {
    this.gender = gender;
  }

  setNationalities(nats: UserNationalities) {
    this.nationalities = nats;
  }
}
import { RandomUserModel } from "../store/models/RandomUserModel";

export interface WithRandomUserModel {
  user: RandomUserModel;
}

export type FuncWithRandomUserModel<RT> = (user: RandomUserModel) => RT;
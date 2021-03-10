import { RandomUserModel } from "../models/RandomUserModel";
import { ModelsCollection } from "./ModelsCollection";

export class RandomUsersCollection extends ModelsCollection<RandomUserModel> {}

export const randomUsersCollection = new RandomUsersCollection();
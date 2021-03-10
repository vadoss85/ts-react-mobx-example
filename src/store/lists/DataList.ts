import { ModelsCollection } from "../collections/ModelsCollection";
import { Model } from "../models/Model";

export abstract class DataList<M extends Model> {
  abstract limit: number;
  abstract page: number;
  abstract collection: ModelsCollection<M>;
  abstract load(): void;
  abstract nextPage(): void;
  abstract prevPage(): void;
  abstract gotoPage(page: number): void;
  abstract reset(): void;
}
import { Model } from "../models/Model";

export class ModelsCollection<M extends Model> {
  protected collection = new Map<string, M>();

  getModelById(modelId: string) {
    return this.collection.get(modelId);
  }

  addModel(model: M) {
    this.collection.set(model.id, model);
  }

  addModels(models: M[]) {
    models.forEach((m) => {
      this.addModel(m);
    });
  }

  removeModel(id: string) {
    this.collection.delete(id);
  }

  clear() {
    this.collection.clear();
  }
}
export interface ModelArgs {
  id: string;
}

export class Model {
  readonly id: string;

  constructor(args: ModelArgs) {
    this.id = args.id;
  }
}
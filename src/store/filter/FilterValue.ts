import { action, makeObservable, observable } from "mobx";

export interface FilterValueArgs<FV> {
  value: FV;
  selected: boolean;
}

export class FilterValue<FV> {
  value: FV

  selected: boolean = false;

  constructor(args: FilterValueArgs<FV>) {
    this.value = args.value
    this.selected = args.selected;

    makeObservable(this, {
      selected: observable,
      toggle: action.bound,
    })
  }

  toggle() {
    this.selected = !this.selected;
  }
}
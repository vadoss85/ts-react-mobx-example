import { action, makeObservable, observable } from "mobx";

export default class Dialog {
  visible: boolean = false;

  constructor() {
    makeObservable(this, {
      visible: observable,
      show: action.bound,
      hide: action.bound,
    })
  }

  show(): void {
    this.visible = true;
  }

  hide(): void {
    this.visible = false;
  }
}
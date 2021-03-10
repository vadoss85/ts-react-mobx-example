import { action, makeObservable, observable } from "mobx";
import { FuncWithRandomUserModel } from "../../../typings/User";
import Dialog from "../../Dialog";
import { RandomUserModel } from "../../models/RandomUserModel";

export class RandomUserInfoDialog extends Dialog {
  randomUser: RandomUserModel = null;

  constructor() {
    super();

    makeObservable(this, {
      randomUser: observable,
      setRandomUser: action,
    })
  }

  setRandomUser: FuncWithRandomUserModel<void> = (user: RandomUserModel) => {
    this.randomUser = user;
  }

  reset() {
    this.setRandomUser(null);
  }

  hide(): void {
    super.hide();
    this.reset();
  }
}
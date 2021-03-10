import { FilterValue } from "@Store/filter/FilterValue";
import { UserGender } from "@Store/lists/randomUsers/RandomUsersList";
import { RandomUserQueryBuilderNationalities } from "API/RandomUser/RandomUserQueryBuilder";
import { action, makeObservable, observable, computed } from "mobx";

type Nat = FilterValue<RandomUserQueryBuilderNationalities>;
export class UsersFilter {
  gender: UserGender = null;
  nationalities = observable.array<Nat>([]);

  constructor() {
    const nationalities: RandomUserQueryBuilderNationalities[] = [
      'AU', 'BR', 'CA', 'CH',
      'DE', 'DK', 'ES', 'FI',
      'FR', 'GB', 'IE', 'IR',
      'NO', 'NL', 'NZ', 'TR',
      'US',
    ]

    makeObservable(this, {
      gender: observable,
      setGender: action.bound,
      getSelectedNationalities: action.bound,
    });

    nationalities.forEach((nat) => {
      this.nationalities.push(new FilterValue({
        value: nat,
        selected: false
      }))
    });
  }

  setGender(gender: UserGender): void {
    this.gender = gender;
  }

  getSelectedNationalities() {
    return this.nationalities.filter((nat) => nat.selected);
  }
}
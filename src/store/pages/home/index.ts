import ScrollHandler from "@Store/ScrollHandler";
import { FuncWithRandomUserModel } from "../../../typings/User";
import { RandomUsersList } from "../../lists/randomUsers/RandomUsersList";
import { RandomUserInfoDialog } from "./RandomUserInfoDialog";
import { UsersFilter } from "./UsersFilter";

export default class StorePageHome {
  randomUsers = new RandomUsersList({limit: 24});
  randomUserInfoDialog = new RandomUserInfoDialog();
  scrollHandler: ScrollHandler;
  filter: UsersFilter;
  
  constructor() {
    this.scrollHandler = new ScrollHandler({
      onScrollEnd: this.loadMoreUsers
    });
    this.filter = new UsersFilter();
  }

  showRandomUserFullInfo: FuncWithRandomUserModel<void> = (user): void => {
    this.randomUserInfoDialog.setRandomUser(user)
    this.randomUserInfoDialog.show();
  }

  loadMoreUsers = (): void => {
    this.randomUsers.nextPage();
  }

  submitFilter = (): void => {
    this.randomUsers.reset();
    this.randomUsers.setGender(this.filter.gender);
    this.randomUsers.setNationalities(this.filter.getSelectedNationalities().map((nat) => nat.value));
    this.randomUsers.load();
  }
}
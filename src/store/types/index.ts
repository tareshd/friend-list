import { IFriendListItem } from "../../state/IFriendListItem";
import * as Actions from "../actions";

interface AddFriendAction {
  type: typeof Actions.ADD_FRIEND;
  friend: IFriendListItem;
}
interface ChangeFavouritePreference {
  type: typeof Actions.CHANGE_FAVOURITE_PREFERENCE;
  id: number;
  favourite: boolean;
}
interface ChangePagination {
  type: typeof Actions.CHANGE_PAGINATION;
  value: number;
}
interface DeleteFriend {
  type: typeof Actions.DELETE_FRIEND;
  id: number;
  setPagination: number;
}
interface SearchByName {
  type: typeof Actions.SEARCH_BY_NAME;
  searchText: string;
}
interface SortByFavouriteAsc {
  type: typeof Actions.SORT_BY_FAVOURITE_ASC;
}
interface SortByFavouriteDesc {
  type: typeof Actions.SORT_BY_FAVOURITE_DESC;
}

export type ActionTypes =
  | AddFriendAction
  | ChangeFavouritePreference
  | ChangePagination
  | DeleteFriend
  | SearchByName
  | SortByFavouriteAsc
  | SortByFavouriteDesc;

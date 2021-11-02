import { IFriendListItem } from "../state/IFriendListItem";

export default interface IInitialState {
  friendList: IFriendListItem[];
  pagination: number;
  mockedFriendList: IFriendListItem[];
  maxItemCountPerPage: number;
}

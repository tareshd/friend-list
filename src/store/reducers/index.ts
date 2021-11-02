import * as Actions from "../actions";
import { ActionTypes } from "../types";
import { InitialState } from "../../Mock";
import { IFriendListItem } from "../../state/IFriendListItem";

export const rootReducer = (state = InitialState, action: ActionTypes) => {
  let newState;
  switch (action.type) {
    case Actions.ADD_FRIEND:
      const friend = action.friend;
      const friendList: IFriendListItem[] = state.friendList.concat(friend);
      const mockFriendList: IFriendListItem[] =
        state.mockedFriendList.concat(friend);
      newState = {
        ...state,
        friendList: friendList,
        mockedFriendList: mockFriendList,
      };
      return newState;

    case Actions.CHANGE_FAVOURITE_PREFERENCE:
      const changeFavouritePreference = state.friendList.map((item) => {
        if (item.id === action.id) {
          item.favourite = !action.favourite;
          return item;
        } else {
          return item;
        }
      });

      const changeFavouritePreferenceInMock = state.mockedFriendList.map(
        (item) => {
          if (item.id === action.id) {
            item.favourite = !action.favourite;
            return item;
          } else {
            return item;
          }
        }
      );

      newState = {
        ...state,
        friendList: changeFavouritePreference,
        mockedFriendList: changeFavouritePreferenceInMock,
      };

      return newState;

    case Actions.CHANGE_PAGINATION:
      newState = {
        ...state,
        pagination: action.value,
      };
      return newState;

    case Actions.DELETE_FRIEND:
      const deleteFriend = state.friendList.filter(
        (item) => item.id !== action.id
      );

      const deleteFromMockedFriendList = state.mockedFriendList.filter(
        (item) => item.id !== action.id
      );

      const setpagination =
        action.setPagination === 1 && state.pagination !== 1
          ? state.pagination - 1
          : state.pagination;
      newState = {
        ...state,
        friendList: deleteFriend,
        pagination: setpagination,
        mockedFriendList: deleteFromMockedFriendList,
      };

      return newState;

    case Actions.SORT_BY_FAVOURITE_ASC:
      const newFreindList = [...state.friendList];
      let sortByFavouriteAsc = newFreindList.sort((a, b) =>
        a.favourite === b.favourite ? 0 : a.favourite ? -1 : 1
      );

      newState = {
        ...state,
        friendList: sortByFavouriteAsc,
      };
      return newState;

    case Actions.SORT_BY_FAVOURITE_DESC:
      const newFreindListDesc = [...state.friendList];
      const sortByFavouriteDesc = newFreindListDesc.sort((a, b) =>
        a.favourite === b.favourite ? 0 : a.favourite ? 1 : -1
      );
      newState = {
        ...state,
        friendList: sortByFavouriteDesc,
      };
      return newState;

    case Actions.SEARCH_BY_NAME:
      const searchByName = state.mockedFriendList.filter((friend) =>
        friend.friendName
          .toLowerCase()
          .includes(action.searchText.toLowerCase())
      );
      newState = {
        ...state,
        friendList: searchByName,
      };
      return newState;

    default:
      return state;
  }
};

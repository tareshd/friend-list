import IInitialState from "../../state/IInitialState";

export const getFriendList = (state: IInitialState) => {
  return state.friendList;
};

export const getPagination = (state: IInitialState) => {
  return state.pagination;
};

export const getMaxItemCountPerPage = (state: IInitialState) => {
  return state.maxItemCountPerPage;
};

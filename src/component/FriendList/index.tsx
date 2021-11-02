import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as Actions from "../../store/actions";
import * as selectors from "../../store/selectors";
import { PaginationPanel } from "../Pagination";
import NormalFriend from "../../assets/NormalFriend.png";
import FavouriteFriend from "../../assets/FavouriteFriend.png";
import Delete from "../../assets/delete.png";

export const FriendList: React.FC = () => {
  const friendList = useSelector(selectors.getFriendList);
  const pagination = useSelector(selectors.getPagination);
  const maxItemCountPerPage = useSelector(selectors.getMaxItemCountPerPage);
  const [end, setEnd] = useState(0);
  const [start, setStart] = useState(0);
  const [currentItemList, setCurrentItemList] = useState(friendList);

  const dispatch = useDispatch();

  useEffect(() => {
    setEnd(pagination * maxItemCountPerPage);
    setStart(end - maxItemCountPerPage);
    setCurrentItemList(friendList.slice(start, end));
  }, [friendList, pagination, start, end, maxItemCountPerPage]);

  const handleFavourite = (friendId: number, isFavourite: boolean) => {
    dispatch({
      type: Actions.CHANGE_FAVOURITE_PREFERENCE,
      id: friendId,
      favourite: isFavourite,
    });
  };

  const handleDelete = (friendId: number, pageLength: number) => {
    if (window.confirm("Are you sure you wish to delete this friend?")) {
      dispatch({
        type: Actions.DELETE_FRIEND,
        id: friendId,
        setPagination: pageLength,
      });
    }
  };

  const displayFriendList = () => {
    if (!friendList) {
      return;
    }

    return currentItemList.map((item) => {
      return (
        <React.Fragment key={item.id}>
          <div className="grid-container">
            <div>
              <h3>{item.friendName}</h3>
              <div>Status: {item.status}</div>
            </div>
            <div className="button-wrapper">
              <div
                className="button"
                onClick={() => handleFavourite(item.id, item.favourite)}
              >
                {item.favourite ? (
                  <img className="fav-img" src={FavouriteFriend} alt="Fav" />
                ) : (
                  <img className="fav-img" src={NormalFriend} alt="NotFav" />
                )}
              </div>
              <div
                className="button"
                onClick={() => handleDelete(item.id, currentItemList.length)}
              >
                <img className="del-img" src={Delete} alt="Del" />
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    });
  };

  const displayPagination = () => {
    if (!friendList) {
      return;
    }

    return friendList.length > maxItemCountPerPage && <PaginationPanel />;
  };

  return (
    <div className="card">
      {displayFriendList()}
      {displayPagination()}
    </div>
  );
};

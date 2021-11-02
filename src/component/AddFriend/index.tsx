import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../store/actions";
import { IFriendListItem } from "../../state/IFriendListItem";
import * as selectors from "../../store/selectors";
import { validateTextInput } from "../../utilities/helpers";

export const AddFriend: React.FC = () => {
  const dispatch = useDispatch();

  const friendList = useSelector(selectors.getFriendList);
  const [friendName, setFriendName] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [newFriendId, setNewFriendId] = useState(20);

  const handleChange = (event: any) => {
    const value = event.target.value;
    setFriendName(value);
    if (value && (event.charCode === 13 || event.key === "Enter")) {
      if (!validateTextInput(value)) {
        setErrorMsg("Invalid Input!!! Only alphabets allowed");
        return;
      } else if (checkIfFreindAlreadyExists(value)) {
        setErrorMsg("Already Exists, please try with other friend name");
        return;
      } else {
        setErrorMsg("");
      }
      handleAddFriend(value);
    }
  };

  const handleAddFriend = (name: string) => {
    setNewFriendId(newFriendId + 1);
    const newFriend: IFriendListItem = {
      id: newFriendId,
      friendName: name,
      favourite: false,
      status: "No Status!!!",
    };
    dispatch({ type: Actions.ADD_FRIEND, friend: newFriend });
    setFriendName("");
  };

  const checkIfFreindAlreadyExists = (value: string) => {
    return friendList.some((friend) => {
      return (
        friend.friendName.toLowerCase().trim() === value.toLowerCase().trim()
      );
    });
  };

  return (
    <div className="add-friend-text-container">
      <input
        type="text"
        id="friend-name"
        placeholder="Type the name and press 'ENTER' to add a friend..."
        autoComplete="off"
        value={friendName}
        onChange={handleChange}
        onKeyPress={handleChange}
        className="add-friend-text-field"
      />
      {errorMsg && <span className="error">{errorMsg}</span>}
    </div>
  );
};

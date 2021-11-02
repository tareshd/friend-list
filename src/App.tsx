import React from "react";
import "./App.css";
import { AddFriend } from "./component/AddFriend";
import { Header } from "./component/AppHeader";
import { FriendList } from "./component/FriendList";

function App() {
  return (
    <div className="App">
      <div className="Main">
        <Header />
        <AddFriend />
        <FriendList />
      </div>
    </div>
  );
}

export default App;

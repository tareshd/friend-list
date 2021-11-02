import IInitialState from "../state/IInitialState";

export const InitialState: IInitialState = {
  friendList: [
    {
      id: 1,
      friendName: "Ajay",
      favourite: true,
      status: "Feeling lucky today",
    },
    {
      id: 2,
      friendName: "Vijay",
      favourite: false,
      status: "Almighty GOD",
    },
    {
      id: 3,
      friendName: "Priya",
      favourite: true,
      status: "Lets party",
    },
    {
      id: 4,
      friendName: "Sneha",
      favourite: false,
      status: "Marvels Superhero Movies ROCK",
    },
  ],
  pagination: 1,
  mockedFriendList: [
    {
      id: 1,
      friendName: "Ajay",
      favourite: true,
      status: "Feeling lucky today",
    },
    {
      id: 2,
      friendName: "Vijay",
      favourite: false,
      status: "Almighty GOD",
    },
    {
      id: 3,
      friendName: "Priya",
      favourite: true,
      status: "Lets party",
    },
    {
      id: 4,
      friendName: "Sneha",
      favourite: false,
      status: "Marvels Superhero Movies ROCK",
    },
  ],
  maxItemCountPerPage: 4,
};

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import store from "../store"; // Import your Redux store instance
import Skeleton from "./Skeleton";
import Button from "./Button";

export default function UsersList() {
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [loadingUsersError, setLoadingUsersError] = useState(null);
  const disPatch = useDispatch();
  const { data } = useSelector((state) => {
    console.log("In useSelector, State changed:", state.users);
    return state.users;
  });
  useEffect(() => {
    setIsLoadingUsers(true);
    disPatch(fetchUsers()) //this is a Promise
      .unwrap() // After testing, I found this unwrap can be delete?
      .then(() => {
        console.log("Success!");
      })
      .catch(() => {
        console.log("Fail!");
      });
    //monitor state in the store
    store.subscribe(() => {
      console.log("in Subscribe, State changed:", store.getState());
    });
    // the following approach cannot get real time state from store
    const currentState = store.getState();
    console.log("Second way to see Current state:", currentState); // Print the full Redux state
  }, [disPatch]);

  const handleUserAdd = () => {
    disPatch(addUser()); // Dispatch a Thunk directly,no need use useEffect()
  };

  if (isLoadingUsers) {
    return <Skeleton times={6} className="h-10 w-full" />;
  }
  if (loadingUsersError) {
    return <div>Error Fetching</div>;
  }

  const renderedUsers = data.map((user) => {
    return (
      <div key={user.id} className="mb-2 border rounded">
        <div className="flex p-2 justify-between items-center cursor-pointer">
          {user.name}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button onClick={handleUserAdd}>+ Add User</Button>
      </div>
      {renderedUsers}
    </div>
  );
}

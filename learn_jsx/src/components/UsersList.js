import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store";
import store from "../store"; // Import your Redux store instance
import Skeleton from "./Skeleton";

export default function UsersList() {
  const disPatch = useDispatch();
  const { isLoading, data, error } = useSelector((state) => {
    console.log("In useSelector, State changed:", state.users);
    return state.users;
  });
  useEffect(() => {
    disPatch(fetchUsers());
    //monitor state in the store
    store.subscribe(() => {
      console.log("in Subscribe, State changed:", store.getState());
    });
    // the following approach cannot get real time state from store
    const currentState = store.getState();
    console.log("Second way to see Current state:", currentState); // Print the full Redux state
  }, [disPatch]);

  if (isLoading) {
    return <Skeleton times={6} className="h-10 w-full" />;
  }
  if (error) {
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

  return <div>{renderedUsers}</div>;
}

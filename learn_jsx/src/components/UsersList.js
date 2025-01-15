import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../store";
import store from "../store"; // Import your Redux store instance
export default function UsersList() {
  const disPatch = useDispatch();
  useEffect(() => {
    disPatch(fetchUsers());
    //monitor state in the store
    store.subscribe(() => {
      console.log("State changed:", store.getState());
    });
    // the following approach cannot get real time state from store
    const currentState = store.getState();
    console.log("Second way to see Current state:", currentState); // Print the full Redux state
  }, [disPatch]);

  return <div>UsersList</div>;
}

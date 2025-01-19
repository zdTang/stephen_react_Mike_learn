import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import store from "../store"; // Import your Redux store instance
import Skeleton from "./Skeleton";
import Button from "./Button";

export default function UsersList() {
  // Notice the export name, and understand the common logic for each Thunk
  function useThunk(thunk) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const runThunk = useCallback(
      (arg) => {
        setIsLoading(true);
        dispatch(thunk(arg))
          .unwrap()
          .catch((err) => setError(err))
          .finally(() => setIsLoading(false));
      },
      [dispatch, thunk]
    );
    return [runThunk, isLoading, error];
  }

  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);
  const [doCreatUser, isCreatingUser, creatingUserError] = useThunk(addUser);

  const { data } = useSelector((state) => {
    console.log("In useSelector, State changed:", state.users);
    return state.users;
  });
  useEffect(() => {
    doFetchUsers();
  }, []);

  const handleUserAdd = () => {
    doCreatUser();
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
        {isCreatingUser ? (
          "Creating User..."
        ) : (
          <Button onClick={handleUserAdd}>+ Add User</Button>
        )}
        {creatingUserError && "Error Creating User..."}
      </div>
      {renderedUsers}
    </div>
  );
}

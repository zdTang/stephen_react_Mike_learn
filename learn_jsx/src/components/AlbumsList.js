import { useFetchAlbumsQuery } from "../store";
const AlbumsList = ({ user }) => {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  console.log(data, error, isLoading);
  return <div>Album for {user.name}</div>;
};
export default AlbumsList;

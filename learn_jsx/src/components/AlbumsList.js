import { useFetchAlbumsQuery } from "../store";
const AlbumsList = ({ user }) => {
  //const { data, error, isLoading } = useFetchAlbumsQuery(user);
  const results = useFetchAlbumsQuery(user);
  console.log(results);
  return <div>Album for {user.name}</div>;
};
export default AlbumsList;

import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from "./Skeleton";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";

const AlbumsList = ({ user }) => {
  console.log("albumslist component render!!");
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  console.log(data, error, isLoading);
  const [addAlbum, results] = useAddAlbumMutation(); // the 'results' has lots of states such as isLoading...
  console.log(results);

  const handleAddAlbum = () => {
    addAlbum(user);
  };
  let content;
  if (isLoading) {
    content = <Skeleton times={3} className="h-10 w-full" />;
  } else if (error) {
    content = <div>Error Fetching</div>;
  } else {
    content = data.map((album) => {
      const header = <div>{album.title}</div>;
      return (
        <ExpandablePanel key={album.id} header={header}>
          List of Photos in the album
        </ExpandablePanel>
      );
    });
  }
  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bond">Album for {user.name}</h3>
        <Button loading={results.loading} onClick={handleAddAlbum}>
          + Add Album
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
};
export default AlbumsList;

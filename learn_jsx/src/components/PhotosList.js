import { useFetchPhotosQuery } from "../store";

function PhotosList({ album }) {
  const { data, error, isLoading } = useFetchPhotosQuery(album);
  return (
    <div>
      <h1>PhotosList</h1>
    </div>
  );
}

export default PhotosList;
